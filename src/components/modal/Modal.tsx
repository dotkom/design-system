import React from 'react';
import styled from 'styled-components';
import Icon from './../icon/Icon';
import { colors } from 'common/colors';
import { media } from 'common/layout'

const Center = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  min-width: 90vw;
  min-height: 80vh;
  max-height: 95vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  @media ${media.desktopAndUp} {
    min-width: 100px;
    min-height: min-content;
    max-width: 60vw;
    max-height: 80vw;
  }
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
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open = false, onClose, children }: Props): JSX.Element => {

  return (
    <>
      {open && (
        <FullscreenWrapper onClick={() => onClose()}>
          <Center onClick={(event) => event.stopPropagation()}>
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
