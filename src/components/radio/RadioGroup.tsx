import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import RadioButton from './RadioButton';

interface RadioButtonChoice {
  value: string;
  label: React.ReactNode;
  defaultChecked?: boolean;
}

export interface RadioProps {
  choices: RadioButtonChoice[];
  disabled?: boolean;
  groupName?: string;
  error?: boolean;
  onChange?: (value: string) => void;
}

const Radio = ({ choices, disabled, groupName, error, onChange }: RadioProps) => {
  const [checked, setChecked] = useState<string>();
  const [hasSetDefault, setHasSetDefault] = useState<boolean>(false);
  const groupId = groupName || _.uniqueId();
  const update = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.value);
    if (onChange) onChange(event.currentTarget.value);
  }
  const radios = choices.map((choice, index) => {
    if (choice.defaultChecked && !hasSetDefault) {
      setChecked(choice.value);
      setHasSetDefault(true);
    };
    return (
      <RadioButton 
        groupName={groupId}
        value={choice.value}
        key={index}
        onChange={update}
        disabled={disabled}
        error={error}
        checked={choice.value === checked}
      >
        { choice.label }
      </RadioButton>
    );
  });
  return <RadioGroupWrapper error={error}>{radios}</RadioGroupWrapper>;
};

const RadioGroupWrapper = styled.div<{ error?: boolean }>`
  & > * + * {
    margin-top: 0.5rem;
  }
`;

export default Radio;