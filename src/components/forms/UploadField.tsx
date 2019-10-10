import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

interface UploadFieldProps extends StyledComponentProps<'input', any, any, any> {
  label: string;
}

const FileUpload = styled.input`
  display: block;
`;
const FileUploadLabel = styled.label`
  display: inline-block;
  border-radius: 3px;
  text-align: center;
  background-color: ${colors.grayslightGray};
  box-sizing: border-box;
  border: 2px dashed ${colors.primay};
  width: 400px;
  padding: 20px 10px;
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
