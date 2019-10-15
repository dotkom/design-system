import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 0.5em;
  width: 1em;
  height: 1em;
  background-color: transparent;
  border: none;
  color: red;
  font-weight: bold;
`;

const FullscreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

interface Props {
  fullscreen?: boolean;
  open: boolean;
  onClose: () => any;
}

const Modal: React.FC<Props> = ({ fullscreen = true, open = false, onClose, children }): JSX.Element => {
  if (fullscreen) {
    return (
      <>
        {open && (
          <FullscreenWrapper>
            <Center>
              <CloseBtn onClick={(): void => onClose()}>X</CloseBtn>
              {children}
            </Center>
          </FullscreenWrapper>
        )}
      </>
    );
  }
  return (
    <>
      {open && (
        <Center>
          <CloseBtn onClick={(): void => onClose()}>X</CloseBtn>
          {children}
        </Center>
      )}
    </>
  );
};

export default Modal;
