import React from 'react';
import styled from 'styled-components';
import Icon from './../icon/Icon';
import { colors } from 'common/colors';

const Center = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
`;

const CloseBtn = styled.button`
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: ${colors.error};
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;
  margin: -0.5em -0.5em 0 0;

  &:hover {
    background-color: ${colors.errorLighten90};
  }

  &:active {
    background-color: ${colors.error};
    color: ${colors.errorDarken35};
  }
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

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ open = false, onClose, children }): JSX.Element => {
  return (
    <>
      {open && (
        <FullscreenWrapper>
          <Center>
            <TopBar>
              <CloseBtn onClick={() => onClose()}>
                <Icon name="clear" />
              </CloseBtn>
            </TopBar>
            {children}
          </Center>
        </FullscreenWrapper>
      )}
    </>
  );
};

export default Modal;
