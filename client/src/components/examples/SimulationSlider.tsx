import SimulationSlider from '../SimulationSlider';
import { useState } from 'react';

export default function SimulationSliderExample() {
  const [value, setValue] = useState(0);

  return (
    <div className="p-8 max-w-md">
      <SimulationSlider
        label="Temperature Change"
        value={value}
        onChange={setValue}
        min={-5}
        max={5}
        step={0.1}
        unit="°C"
        description="Adjust sea surface temperature"
      />
    </div>
  );
}
