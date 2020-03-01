import React from 'react';
import styled from 'styled-components';
import Icon from 'components/icon/Icon';
import Card from 'components/card/Card';
import { colors } from 'common/colors';
import { media } from 'common/layout';

const StyledCard = styled(Card)`
  min-width: 90vw;
  max-height: 95vh;
  overflow-y: auto;

  @media ${media.tabletAndUp} {
    min-width: 100px;
    min-height: min-content;
    max-width: 60vw;
    max-height: 80vh;
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
          <StyledCard onClick={(event: Event) => event.stopPropagation()}>
            <TopBar>
              <CloseBtn onClick={() => onClose()}>
                <Icon name="clear" />
              </CloseBtn>
            </TopBar>
            {children}
          </StyledCard>
        </FullscreenWrapper>
      )}
    </>
  );
};

export default Modal;
