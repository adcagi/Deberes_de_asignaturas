import { useState } from 'react';
import { data } from '@/data/locations';

const LocationSelector = () => {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    if (!province || !city) return;

    setResult(`${province} - ${city}`);

    // RESET
    setProvince('');
    setCity('');
  };

  return (
    <div>

      <select
        value={province}
        onChange={(e) => {
          setProvince(e.target.value);
          setCity(''); 
        }}
      >
        <option value="">Selecciona provincia</option>
        {Object.keys(data).map((prov) => (
          <option key={prov} value={prov}>
            {prov}
          </option>
        ))}
      </select>


      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!province}
      >
        <option value="">Selecciona ciudad</option>
        {province &&
          data[province as keyof typeof data].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
      </select>

      <button onClick={handleSubmit}>Enviar</button>

      {result && <p>Seleccionado: {result}</p>}
    </div>
  );
};

export default LocationSelector;