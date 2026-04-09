import { useState } from 'react';

// Datos de ejemplo para provincias y ciudades
const provincias = [
  { name: 'Barcelona', cities: ['Barcelona', 'Terrassa', 'Sabadell'] },
  { name: 'Madrid', cities: ['Madrid', 'Alcalá de Henares', 'Getafe'] },
  { name: 'Valencia', cities: ['Valencia', 'Gandía', 'Torrent'] },
];

const RegisterForm = () => {
  const [form, setForm] = useState({
    nom: '',
    cognoms: '',
    email: '',
    telefon: '',
    dataNaixement: '',
    contrasenya: '',
    verificarContrasenya: '',
    adreca: '',
    provincia: '',
    poblacio: '',
    codiPostal: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Manejo de cambios
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Validaciones
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.nom) newErrors.nom = 'El nom és obligatori';
    if (!form.cognoms) newErrors.cognoms = 'Els cognoms són obligatoris';
    if (!form.email) newErrors.email = 'El email és obligatori';
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email no vàlid';
    if (!form.telefon) newErrors.telefon = 'El telèfon és obligatori';
    if (!/^\d{9}$/.test(form.telefon)) newErrors.telefon = 'Telèfon ha de tenir 9 números';
    if (!form.dataNaixement) newErrors.dataNaixement = 'La data és obligatoria';
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(form.dataNaixement)) newErrors.dataNaixement = 'Format DD/MM/YYYY';
    if (!form.contrasenya) newErrors.contrasenya = 'La contrasenya és obligatoria';
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{12,}$/.test(form.contrasenya))
      newErrors.contrasenya = 'Mínim 12 caràcters amb números i símbols';
    if (form.contrasenya !== form.verificarContrasenya)
      newErrors.verificarContrasenya = 'Les contrasenyes no coincideixen';
    if (!form.adreca) newErrors.adreca = 'L\'adreça és obligatoria';
    if (!form.provincia) newErrors.provincia = 'Cal seleccionar una provincia';
    if (!form.poblacio) newErrors.poblacio = 'Cal seleccionar una població';
    if (!form.codiPostal) newErrors.codiPostal = 'Cal el codi postal';
    // Validar codi postal per província (simplificado ejemplo)
    if (form.provincia === 'Barcelona' && !/^08\d{3}$/.test(form.codiPostal))
      newErrors.codiPostal = 'Codi postal no coincideix amb Barcelona';
    if (form.provincia === 'Madrid' && !/^28\d{3}$/.test(form.codiPostal))
      newErrors.codiPostal = 'Codi postal no coincideix amb Madrid';
    if (form.provincia === 'Valencia' && !/^46\d{3}$/.test(form.codiPostal))
      newErrors.codiPostal = 'Codi postal no coincideix amb Valencia';

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Aquí podrías enviar los datos a una API
      console.log('Formulario enviado', form);
      setSubmitted(true);
      // Resetear formulario
      setForm({
        nom: '',
        cognoms: '',
        email: '',
        telefon: '',
        dataNaixement: '',
        contrasenya: '',
        verificarContrasenya: '',
        adreca: '',
        provincia: '',
        poblacio: '',
        codiPostal: '',
      });
    }
  };

  // Ciudades filtradas por provincia
  const cities = provincias.find((p) => p.name === form.provincia)?.cities || [];

  return (
    <div className="container mt-4">
      <h2>Registre d'usuari</h2>
      {submitted && <div className="alert alert-success">Registre completat correctament!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input className="form-control" name="nom" value={form.nom} onChange={handleChange} />
          {errors.nom && <small className="text-danger">{errors.nom}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Cognoms</label>
          <input className="form-control" name="cognoms" value={form.cognoms} onChange={handleChange} />
          {errors.cognoms && <small className="text-danger">{errors.cognoms}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Telèfon</label>
          <input className="form-control" name="telefon" value={form.telefon} onChange={handleChange} />
          {errors.telefon && <small className="text-danger">{errors.telefon}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Data Naixement</label>
          <input className="form-control" name="dataNaixement" value={form.dataNaixement} onChange={handleChange} placeholder="DD/MM/YYYY" />
          {errors.dataNaixement && <small className="text-danger">{errors.dataNaixement}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Contrasenya</label>
          <input type="password" className="form-control" name="contrasenya" value={form.contrasenya} onChange={handleChange} />
          {errors.contrasenya && <small className="text-danger">{errors.contrasenya}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Verificar Contrasenya</label>
          <input type="password" className="form-control" name="verificarContrasenya" value={form.verificarContrasenya} onChange={handleChange} />
          {errors.verificarContrasenya && <small className="text-danger">{errors.verificarContrasenya}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Adreça</label>
          <input className="form-control" name="adreca" value={form.adreca} onChange={handleChange} />
          {errors.adreca && <small className="text-danger">{errors.adreca}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Provincia</label>
          <select className="form-select" name="provincia" value={form.provincia} onChange={handleChange}>
            <option value="">Selecciona provincia</option>
            {provincias.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
          </select>
          {errors.provincia && <small className="text-danger">{errors.provincia}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Població</label>
          <select className="form-select" name="poblacio" value={form.poblacio} onChange={handleChange} disabled={!form.provincia}>
            <option value="">Selecciona població</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.poblacio && <small className="text-danger">{errors.poblacio}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Codi Postal</label>
          <input className="form-control" name="codiPostal" value={form.codiPostal} onChange={handleChange} />
          {errors.codiPostal && <small className="text-danger">{errors.codiPostal}</small>}
        </div>

        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;