import styled from 'styled-components';

export const StyledImageContainer = styled.div<{ readOnly?: boolean }>`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 800px;
  border: 1px solid ${({ theme }) => theme?.base?.palette?.['border-line'] || '#ccc'};
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({ theme }) => theme?.base?.palette?.['primary-background'] || '#fff'};
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'crosshair')};

  img {
    display: block;
    width: 100%;
    height: auto;
    pointer-events: none; /* Let clicks fall through to the container */
  }
`;

export const StyledPin = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${({ y }) => y}%;
  left: ${({ x }) => x}%;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme?.base?.palette?.['brand-primary'] || '#0076CE'};
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  pointer-events: none;
`;

export const StyledButtonsWrapper = styled.div`
  margin-top: 0.5rem;
`;
