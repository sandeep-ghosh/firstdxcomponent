import styled from 'styled-components';

export const StyledSignatureContent = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&family=Great+Vibes&family=Pacifico&family=Satisfy&display=swap');

  canvas {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme?.base?.palette?.['border-line'] || '#ccc'};
    cursor: crosshair;
    touch-action: none;
    background-color: ${({ theme }) => theme?.base?.palette?.['primary-background'] || '#fff'};
  }
`;

export const StyledButtonsWrapper = styled.div`
  padding-top: 0.5rem;
`;

export const StyledSignatureReadOnlyContent = styled.div`
  img {
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme?.base?.palette?.['border-line'] || '#ccc'};
    background-color: ${({ theme }) => theme?.base?.palette?.['primary-background'] || '#fff'};
  }
`;

export const StyledFontOption = styled.div<{ fontFamily: string }>`
  font-family: ${({ fontFamily }) => fontFamily}, cursive;
  font-size: 1.5rem;
  padding: 0.5rem 0;
`;
