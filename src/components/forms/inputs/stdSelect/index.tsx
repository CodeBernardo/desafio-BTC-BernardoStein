import { ChangeEvent, forwardRef, SelectHTMLAttributes } from "react";

interface SelectOpts {
  value: string;
  label: string;
}

type Planets = "Earth" | "Mars" | "not_selected";

interface StdSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: SelectOpts[];
  setSelectedPlanet: React.Dispatch<React.SetStateAction<Planets>>;
}

export const StdSelect = forwardRef<HTMLSelectElement, StdSelectProps>(
  ({ id, label, options, setSelectedPlanet, ...rest }, ref): JSX.Element => {
    const handlePlanetChange = (evt: ChangeEvent<HTMLSelectElement>) => {
      setSelectedPlanet(evt.target.value as Planets);
    };

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <select id={id} {...rest} ref={ref} onChange={handlePlanetChange}>
          {options.map(({ value, label }, idx) => {
            return (
              <option key={idx} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </>
    );
  },
);

export type { Planets, SelectOpts };
