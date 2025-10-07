import PredictionResult from '../PredictionResult';

export default function PredictionResultExample() {
  return (
    <div className="p-8 max-w-md">
      <PredictionResult
        carbonPotential={24.5}
        co2eq={90.0}
        uncertainty={0.12}
        permanence={0.8}
      />
    </div>
  );
}
