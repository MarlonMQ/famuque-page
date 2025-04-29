import React from 'react';

interface RequiredLabelProps {
  text: string;
}

export const RequiredLabel: React.FC<RequiredLabelProps> = ({ text }) => (
  <label>
    {text}&nbsp;
    <span className="text-error">*</span>
  </label>
);
