import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface StdInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error: Partial<FieldError> | undefined;
}

export const StdInput = forwardRef<HTMLInputElement, StdInputProps>(
  ({ label, id, error, ...rest }, ref): JSX.Element => {
    return (
      <div className="input__container">
        <label htmlFor={id} className="text3 medium">
          {label} *
        </label>
        <input id={id} ref={ref} {...rest} />
        <small>{error?.message}</small>
      </div>
    );
  },
);
