import MapView from '../MapView';

export default function MapViewExample() {
  return (
    <div className="p-8">
      <MapView onRegionSelect={(region) => console.log('Selected region:', region)} />
    </div>
  );
}
