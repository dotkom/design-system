import React from 'react';
import styled from 'styled-components';

interface RadioProps {
  labels: string[];
  groupName: string;
}

const Radio = ({ labels, groupName }: RadioProps) => {
  const radios = labels.map((label) => (
    <RadioLabel>
      <RadioButton name={groupName} />
      {label}
    </RadioLabel>
  ));
  return <RadioGroup>{radios}</RadioGroup>;
};

const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 0.5rem;
`;

const RadioLabel = styled.label`
  display: block;
`;

const RadioGroup = styled.div`
  & > * + * {
    margin-top: 0.5rem;
  }
`;

export default Radio;
