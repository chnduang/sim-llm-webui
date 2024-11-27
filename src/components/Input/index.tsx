'use client';
import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const SimInput: React.FC = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: any) => {
    const val = e.target.value;
    setValue(val);
  };

  const handlePressEnter = (e: any) => {
    e.preventDefault();
    const val = e.target.value;
    console.log('val', val);
  };

  return (
    <>
      <TextArea
        autoSize
        placeholder="输入消息"
        value={value}
        onChange={handleOnChange}
        onPressEnter={handlePressEnter}
      />
    </>
  );
};

export default SimInput;
