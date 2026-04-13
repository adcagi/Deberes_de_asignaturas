import { useForm } from 'react-hook-form';

const Register2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Registro correcto');
  };

  const password = watch('password');

  return (
    <div className="container mt-4">
      <h2>Registro (React Hook Form)</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          className="form-control mb-2"
          placeholder="Nombre"
          {...register('name', { required: 'Campo obligatorio' })}
        />
        {errors.name && <p>{errors.name.message as string}</p>}

        <input
          className="form-control mb-2"
          placeholder="Email"
          {...register('email', {
            required: 'Email obligatorio',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Email inválido',
            },
          })}
        />
        {errors.email && <p>{errors.email.message as string}</p>}

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          {...register('password', {
            required: true,
            minLength: {
              value: 4,
              message: 'Min 12 caracteres',
            },
          })}
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Confirmar Password"
          {...register('confirmPassword', {
            validate: (value) =>
              value === password || 'No coinciden',
          })}
        />
        {errors.confirmPassword && (
          <p>{errors.confirmPassword.message as string}</p>
        )}

        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Register2;