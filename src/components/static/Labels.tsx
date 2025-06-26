import React from 'react';
import { cn } from '@/lib/utils';

interface LabelProps {
  text: string;
  className?: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ text, className, required }) => (
  <label className={cn("text-th-3 font-avenir-medium", className)}>
    {text}
    {required && 
      <>
        &nbsp;
        <span className="text-error">*</span>
      </>
    }
  </label>
);
