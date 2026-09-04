import React, { useEffect, useState, useRef } from 'react';
import {
  withConfiguration,
  Image,
  Button,
  Flex,
  FormField,
  FormControl,
  RadioButtonGroup,
  RadioButton,
  Input,
  Select,
  Option
} from '@pega/cosmos-react-core';
import SignaturePad from 'signature_pad';
import Signature from './Signature';
import { StyledButtonsWrapper, StyledSignatureContent, StyledSignatureReadOnlyContent, StyledFontOption } from './styles';


type SignatureCaptureProps = {
  getPConnect: () => typeof PConnect;
  label: string;
  value: string;
  helperText?: string;
  validatemessage?: string;
  hideLabel: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  testId?: string;
  displayMode?: 'DISPLAY_ONLY' | '';
};

const SIGNATURE_FONTS = [
  { label: 'Caveat', value: 'Caveat' },
  { label: 'Dancing Script', value: 'Dancing Script' },
  { label: 'Pacifico', value: 'Pacifico' },
  { label: 'Great Vibes', value: 'Great Vibes' },
  { label: 'Satisfy', value: 'Satisfy' }
];

export const PegaExtensionsSignatureCapture = (props: SignatureCaptureProps) => {
  const { value, getPConnect, validatemessage, label, hideLabel = false, helperText, testId, displayMode } = props;

  const ref = useRef<SignaturePad>();
  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const propName = pConn.getStateProps().value;
  const [hasValueChanged, setHasValueChanged] = useState<boolean>(false);
  const [info, setInfo] = useState(validatemessage || helperText);

  let { readOnly, required, disabled } = props;
  [readOnly, required, disabled] = [readOnly, required, disabled].map(
    (prop) => prop === true || (typeof prop === 'string' && prop === 'true'),
  );

  const [inputValue, setInputValue] = useState(value);
  const [status, setStatus] = useState<'success' | 'warning' | 'error' | 'pending' | undefined>(undefined);
  
  const [mode, setMode] = useState<'draw' | 'type'>('draw');
  const [penColor, setPenColor] = useState('#000000');
  const [typedName, setTypedName] = useState('');
  const [selectedFont, setSelectedFont] = useState(SIGNATURE_FONTS[0].value);
  
  useEffect(() => setInputValue(value), [value]);

  useEffect(() => {
    if (value && mode === 'draw') {
      ref.current?.fromDataURL(value);
    }
  }, []);

  useEffect(() => {
    if (validatemessage !== '') {
      setStatus('error');
    }
    if (status !== 'success') {
      setStatus(validatemessage !== '' ? 'error' : undefined);
    }
  }, [status, validatemessage]);

  const displayComp = value ? (
    <StyledSignatureReadOnlyContent>
      <Image alt={label} src={value} />
    </StyledSignatureReadOnlyContent>
  ) : null;
  if (displayMode === 'DISPLAY_ONLY') {
    return displayComp;
  }

  const onEndStroke = () => {
    setHasValueChanged(true);
    setStatus(undefined);
    setInfo(validatemessage || helperText);
  };

  const handleClear = () => {
    if (mode === 'draw') {
      ref.current?.clear();
    } else {
      setTypedName('');
    }
    setHasValueChanged(false);
    setStatus(undefined);
    setInfo(validatemessage || helperText);
  };

  const generateTypedSignature = (): string => {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `48px "${selectedFont}", cursive`;
      ctx.fillStyle = penColor;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(typedName, canvas.width / 2, canvas.height / 2);
      return canvas.toDataURL('image/png');
    }
    return '';
  };

  const handleAccept = () => {
    let newValue = '';
    if (mode === 'draw') {
      newValue = ref.current?.toDataURL('image/svg+xml') || '';
    } else {
      newValue = generateTypedSignature();
    }

    if (newValue) {
      setInputValue(newValue);
      actions.updateFieldValue(propName, newValue);
      setHasValueChanged(false);
      setStatus('success');
      setInfo(getPConnect().getLocalizedValue('Signature captured'));
    }
  };

  return (
    <StyledSignatureContent>
      <Flex container={{ direction: 'column', gap: 2 }}>
        {displayMode === 'DISPLAY_ONLY' || readOnly || disabled ? null : (
          <Flex container={{ direction: 'row', gap: 2, alignItems: 'center' }} style={{ marginBottom: '1rem' }}>
            <FormField label={getPConnect().getLocalizedValue('Mode')}>
              <FormControl ariaLabel="Mode">
                <RadioButtonGroup inline>
                  <RadioButton
                    id="draw"
                    label={getPConnect().getLocalizedValue('Draw')}
                    checked={mode === 'draw'}
                    onChange={() => setMode('draw')}
                  />
                  <RadioButton
                    id="type"
                    label={getPConnect().getLocalizedValue('Type')}
                    checked={mode === 'type'}
                    onChange={() => setMode('type')}
                  />
                </RadioButtonGroup>
              </FormControl>
            </FormField>
            <FormField label={getPConnect().getLocalizedValue('Pen Color')}>
              <FormControl ariaLabel="Pen Color">
                <Select
                  value={penColor}
                  onChange={(e: any) => setPenColor(e.target.value)}
                >
                  <Option value="#000000">Black</Option>
                  <Option value="#0000FF">Blue</Option>
                  <Option value="#FF0000">Red</Option>
                </Select>
              </FormControl>
            </FormField>
          </Flex>
        )}

        <FormField
          label={label}
          labelHidden={hideLabel}
          info={info}
          status={status}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          testId={testId}
        >
          <FormControl ariaLabel={label} required={required} disabled={disabled} readOnly={readOnly}>
            {readOnly || disabled ? (
              <img alt='Signature' src={inputValue} />
            ) : (
              <Flex container={{ direction: 'column', gap: 2 }}>
                {mode === 'draw' ? (
                  <Signature
                    signaturePadRef={ref}
                    penColor={penColor}
                    canvasProps={{
                      style: {
                        width: '100%',
                        height: 200,
                      },
                    }}
                    onEndStroke={onEndStroke}
                  />
                ) : (
                  <Flex container={{ direction: 'column', gap: 2 }}>
                    <Input
                      type="text"
                      placeholder="Type your name"
                      value={typedName}
                      onChange={(e: any) => {
                        setTypedName(e.target.value);
                        setHasValueChanged(!!e.target.value);
                      }}
                    />
                    {typedName && (
                      <RadioButtonGroup>
                        {SIGNATURE_FONTS.map(font => (
                          <RadioButton
                            key={font.value}
                            id={font.value}
                            checked={selectedFont === font.value}
                            onChange={() => setSelectedFont(font.value)}
                            label={
                              <StyledFontOption fontFamily={font.value} style={{ color: penColor }}>
                                {typedName}
                              </StyledFontOption>
                            }
                          />
                        ))}
                      </RadioButtonGroup>
                    )}
                  </Flex>
                )}

                <Flex as={StyledButtonsWrapper} container={{ direction: 'row', justify: 'between', pad: [1] }} style={{ marginTop: '0.5rem' }}>
                  <Button compact variant="secondary" className='clear' onClick={handleClear}>
                    {getPConnect().getLocalizedValue('Clear')}
                  </Button>
                  <Button
                    compact
                    variant='primary'
                    className='accept'
                    onClick={handleAccept}
                    disabled={mode === 'draw' ? !hasValueChanged : !typedName}
                  >
                    {getPConnect().getLocalizedValue('Accept')}
                  </Button>
                </Flex>
              </Flex>
            )}
          </FormControl>
        </FormField>
      </Flex>
    </StyledSignatureContent>
  );
};

export default withConfiguration(PegaExtensionsSignatureCapture);
