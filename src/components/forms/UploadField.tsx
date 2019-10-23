import React, { useState } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { colors } from 'common/colors';

interface UploadFieldProps extends StyledComponentProps<'input', any, any, any> {
  label: string;
}

const FileUpload = styled.input`
  display: none;
`;
const FileUploadLabel = styled.label`
  display: inline-block;
  border-radius: 3px;
  text-align: center;
  background-color: ${colors.grayslightGray};
  box-sizing: border-box;
  border: 2px dashed ${colors.primary};
  width: 400px;
  padding: 20px 10px;
`;
const FileUploadContainer = styled.div`
  display: flex;
`;
const RandomId = 'upload' + Math.floor(Math.random() * 1000);

const UploadField = ({ ...props }: UploadFieldProps) => {
  const [text, setText] = useState('');

  const fileChange = (files: any[]) => {
    let build = '';
    for (let file of files) {
      build += ', ' + file.name;
    }
    setText(build.slice(2));
  };

  const handleFileChange = (evt: any) => {
    if (evt.target && evt.target.files) {
      fileChange(evt.target.files);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    fileChange(e.dataTransfer.files);
  };

  return (
    <FileUploadContainer>
      <FileUpload id={RandomId} type="file" multiple onChange={handleFileChange} {...props} />
      <FileUploadLabel htmlFor={RandomId} onDragOver={handleDragOver} onDrop={handleDrop}>
        {props.label} {text}
      </FileUploadLabel>
    </FileUploadContainer>
  );
};

export default UploadField;
