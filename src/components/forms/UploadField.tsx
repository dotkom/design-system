import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
//import { colors } from 'common/colors';

interface UploadFieldProps extends StyledComponentProps<'input', any, any, any> {
  label: string;
}

const FileUpload = styled.input`
  display: none;
`;
const FileUploadLabel = styled.label`
  display: inline-block;
  border-radius: 3px;
  background-color: #006cff;
`;
const FileUploadContainer = styled.div`
  display: flex;
`;
const RandomId = 'upload' + Math.floor(Math.random() * 1000);

const UploadField = ({ ...props }: UploadFieldProps) => {
  return (
    <FileUploadContainer>
      <FileUpload id={RandomId} type="file" {...props} />
      <FileUploadLabel htmlFor={RandomId}>{props.label}</FileUploadLabel>
    </FileUploadContainer>
  );
};

export default UploadField;
