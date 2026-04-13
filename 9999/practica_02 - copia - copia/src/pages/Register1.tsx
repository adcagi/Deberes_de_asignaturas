import { useEffect, useState } from "react";

// RegisterForm.tsx
const provincias = [
  { name: 'Barcelona', cities: ['Barcelona', 'Terrassa', 'Sabadell'], zip: '08' },
  { name: 'Madrid', cities: ['Madrid', 'Alcalá de Henares', 'Getafe'], zip: '28' },
  { name: 'Valencia', cities: ['Valencia', 'Gandía', 'Torrent'], zip: '46' },
];


const RegisterForm = () => {
  const [provincia, setProvincia] = useState('');
  const[ciudades, setCiudades] = useState<string[]>([]);
  const[poblacion, setPoblacion] = useState('');
  const[zip, setZip] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() =>{
    const  selected = provincias.find((p) => p.name === provincia);

    if(selected){
      setCiudades(selected.cities);
      setZip(selected.zip);
      setPoblacion('');
    }else{
      setCiudades([]);
      setZip('');
      setPoblacion('');
    }
  }, [provincia]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
    setProvincia('');
  };

  return (
    <div className="container mt-4">
      <h2>Registre d'usuari</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input className="form-control" name="nom" />
        </div>

        <div className="mb-3">
          <label className="form-label">Cognoms</label>
          <input className="form-control" name="cognoms" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" name="email" />
        </div>

        <div className="mb-3">
          <label className="form-label">Telèfon</label>
          <input className="form-control" name="telefon" />
        </div>

        <div className="mb-3">
          <label className="form-label">Data Naixement</label>
          <input className="form-control" name="dataNaixement" placeholder="DD/MM/YYYY" />
        </div>

        <div className="mb-3">
          <label className="form-label">Contrasenya</label>
          <input type="password" className="form-control" name="contrasenya" />
        </div>

        <div className="mb-3">
          <label className="form-label">Verificar Contrasenya</label>
          <input type="password" className="form-control" name="verificarContrasenya" />
        </div>

        <div className="mb-3">
          <label className="form-label">Adreça</label>
          <input className="form-control" name="adreca" />
        </div>

        <div className="mb-3">
          <label className="form-label">Provincia</label>
          <select className="form-select" name="provincia" value={provincia} onChange={(e) => setProvincia(e.target.value)} required>
            <option value="">Selecciona provincia</option>
            {provincias.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Població</label>
          <select className="form-select" name="poblacio" value={poblacion} onChange={(e) => setPoblacion(e.target.value)} required>
            <option value="">Selecciona població</option>
            {ciudades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Codi Postal</label>
          <input className="form-control" name="codiPostal" value={zip} readOnly/>
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
      {submitted && <div className="alert alert-success mt-3">registro completado</div>}
    </div>
  );
};

export default RegisterForm;