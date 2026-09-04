import { useEffect, useState, useRef, type MouseEvent } from 'react';
import { withConfiguration, Button, Flex, FormField, FormControl, Text } from '@pega/cosmos-react-core';
import { StyledImageContainer, StyledPin, StyledButtonsWrapper } from './styles';

type ImageAnnotatorProps = {
  getPConnect: () => typeof PConnect;
  label: string;
  value: string;
  imageUrl: string;
  helperText?: string;
  validatemessage?: string;
  hideLabel: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  testId?: string;
  displayMode?: 'DISPLAY_ONLY' | '';
};

type Annotation = {
  id: number;
  x: number;
  y: number;
};

export const PegaExtensionsImageAnnotator = (props: ImageAnnotatorProps) => {
  const { value, getPConnect, validatemessage, label, hideLabel = false, helperText, testId, displayMode, imageUrl } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const propName = pConn.getStateProps().value;
  
  let { readOnly, required, disabled } = props;
  [readOnly, required, disabled] = [readOnly, required, disabled].map(
    (prop) => prop === true || (typeof prop === 'string' && prop === 'true'),
  );

  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [status, setStatus] = useState<'success' | 'warning' | 'error' | 'pending' | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse existing annotations on load
  useEffect(() => {
    if (value) {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          setAnnotations(parsed);
        }
      } catch {
        console.error('Invalid annotation JSON format in value string');
      }
    }
  }, [value]);

  useEffect(() => {
    setStatus(validatemessage ? 'error' : undefined);
  }, [validatemessage]);

  const saveAnnotations = (newAnnotations: Annotation[]) => {
    setAnnotations(newAnnotations);
    const jsonValue = JSON.stringify(newAnnotations);
    actions.updateFieldValue(propName, jsonValue);
    setStatus('success');
  };

  const handleImageClick = (e: MouseEvent<HTMLDivElement>) => {
    if (readOnly || disabled || displayMode === 'DISPLAY_ONLY' || !imageUrl) return;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate coordinates as a percentage of the container dimensions
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

      const newAnnotation: Annotation = {
        id: Date.now(),
        x: Number(xPercent.toFixed(2)),
        y: Number(yPercent.toFixed(2))
      };

      saveAnnotations([...annotations, newAnnotation]);
    }
  };

  const handleClearAll = () => {
    saveAnnotations([]);
  };

  const handleUndo = () => {
    if (annotations.length > 0) {
      const newArr = [...annotations];
      newArr.pop();
      saveAnnotations(newArr);
    }
  };

  if (displayMode === 'DISPLAY_ONLY') {
    return (
      <FormField label={label} labelHidden={hideLabel}>
        <StyledImageContainer readOnly>
          {imageUrl ? <img src={imageUrl} alt={label} /> : <Text>No image available</Text>}
          {annotations.map((ann, idx) => (
            <StyledPin key={ann.id} x={ann.x} y={ann.y}>
              {idx + 1}
            </StyledPin>
          ))}
        </StyledImageContainer>
      </FormField>
    );
  }

  return (
    <Flex container={{ direction: 'column', gap: 2 }}>
      <FormField
        label={label}
        labelHidden={hideLabel}
        info={validatemessage || helperText}
        status={status}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        testId={testId}
      >
        <FormControl ariaLabel={label} required={required} disabled={disabled} readOnly={readOnly}>
          <StyledImageContainer ref={containerRef} readOnly={readOnly || disabled} onClick={handleImageClick}>
            {imageUrl ? <img src={imageUrl} alt={label} /> : <Text>No image available. Provide a valid Image URL.</Text>}
            {annotations.map((ann, idx) => (
              <StyledPin key={ann.id} x={ann.x} y={ann.y}>
                {idx + 1}
              </StyledPin>
            ))}
          </StyledImageContainer>

          {!readOnly && !disabled && imageUrl && (
            <Flex as={StyledButtonsWrapper} container={{ direction: 'row', gap: 1 }}>
              <Button compact variant="secondary" onClick={handleUndo} disabled={annotations.length === 0}>
                {getPConnect().getLocalizedValue('Undo')}
              </Button>
              <Button compact variant="secondary" onClick={handleClearAll} disabled={annotations.length === 0}>
                {getPConnect().getLocalizedValue('Clear All')}
              </Button>
            </Flex>
          )}
        </FormControl>
      </FormField>
    </Flex>
  );
};

export default withConfiguration(PegaExtensionsImageAnnotator);
