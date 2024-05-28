import { forwardRef, InputHTMLAttributes } from "react";

interface StdInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const StdInput = forwardRef<HTMLInputElement, StdInputProps>(
  ({ label, id, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...rest} />
      </>
    );
  },
);
