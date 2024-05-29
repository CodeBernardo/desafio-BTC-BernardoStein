import { forwardRef, InputHTMLAttributes } from "react";
import s from "./index.module.scss"

interface StdInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const StdInput = forwardRef<HTMLInputElement, StdInputProps>(
  ({ label, id, ...rest }, ref): JSX.Element => {
    return (
      <div className="input__container">
        <label htmlFor={id} className="text3 medium">{label} *</label>
        <input id={id} ref={ref} {...rest}/>
      </div>
    );
  },
);
