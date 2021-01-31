import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import RadioButton from './RadioButton';

export interface RadioProps {
  disabled?: boolean;
  groupName?: string;
  error?: boolean;
  onChange?: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({ disabled, groupName, error, onChange, children }) => {
  const [checked, setChecked] = useState<string>();
  const [hasSetDefaultChecked, setHasSetDefaultChecked] = useState<boolean>(false);
  const groupId = groupName || _.uniqueId();
  const update = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.value);
    if (onChange) onChange(event.currentTarget.value);
  };
  const radios = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === RadioButton) {
      if (!hasSetDefaultChecked && child.props['checked']) {
        setHasSetDefaultChecked(true);
        setChecked(child.props['value']);
      }
      const props = {
        checked: child.props['value'] === checked,
        groupName: groupId,
        onChange: update,
        disabled: disabled,
        error: error,
      };
      return React.cloneElement(child, props);
    }
    return child;
  });
  return <RadioGroupWrapper error={error}>{radios}</RadioGroupWrapper>;
};

const RadioGroupWrapper = styled.div<{ error?: boolean }>`
  & > * + * {
    margin-top: 0.5rem;
  }
`;

export default Radio;
