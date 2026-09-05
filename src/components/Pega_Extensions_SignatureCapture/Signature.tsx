import React, { useCallback, useEffect, useRef } from 'react';
import SignaturePad, { type Options } from 'signature_pad';
import { useTheme } from '@pega/cosmos-react-core';

interface SignatureProps extends Options {
  canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
  signaturePadRef?: React.MutableRefObject<SignaturePad | undefined>;
  onEndStroke?: CallableFunction;
  penColor?: string;
}

const Signature = (props: SignatureProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const padRef = useRef<SignaturePad>();
  const { signaturePadRef, canvasProps, onEndStroke, penColor } = props;
  const theme = useTheme();
  
  // Store the latest onEndStroke callback in a ref so we don't need to re-bind events
  const onEndStrokeRef = useRef(onEndStroke);
  useEffect(() => {
    onEndStrokeRef.current = onEndStroke;
  }, [onEndStroke]);

  const resizeCanvas = useCallback(() => {
    if (canvasRef?.current && padRef?.current) {
      const canvas = canvasRef.current;
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      
      // Save data before resizing to prevent wiping out existing strokes
      const data = padRef.current.toData();
      
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext('2d')?.scale(ratio, ratio);
      
      // Restore data after resize
      if (data && data.length > 0) {
        padRef.current.fromData(data);
      }
    }
  }, []);

  // Initialize SignaturePad exactly once
  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    if (!padRef.current) {
      // Set initial dimensions
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext('2d')?.scale(ratio, ratio);

      const signaturePad = new SignaturePad(canvas, {
        penColor: penColor || theme?.base?.palette?.['foreground-color'] || '#000',
      });
      padRef.current = signaturePad;
      if (signaturePadRef) {
        signaturePadRef.current = signaturePad;
      }

      signaturePad.addEventListener('endStroke', () => {
        onEndStrokeRef.current?.();
      });
    }

    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      // We only turn off the pad on unmount, we don't clear it.
      // If we clear it, hot-reloads and strict-mode unmounts will wipe user data.
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resizeCanvas]); // Intentionally omitting penColor and signaturePadRef to prevent re-initialization

  // Update penColor dynamically if it changes
  useEffect(() => {
    if (padRef.current) {
      padRef.current.penColor = penColor || theme?.base?.palette?.['foreground-color'] || '#000';
    }
  }, [penColor, theme]);

  return <canvas ref={canvasRef} {...canvasProps} />;
};

export default Signature;
