import React from 'react';

interface RequiredLabelProps {
  text: string;
}

const RequiredLabel: React.FC<RequiredLabelProps> = ({ text }) => (
  <label className="text-th-3 font-avenir-medium">
    {text}&nbsp;
    <span className="text-error">*</span>
  </label>
);

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <label className="text-th-3 font-avenir-medium">
    {text}
  </label>
);


export { RequiredLabel, Label };