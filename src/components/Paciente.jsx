const Paciente = () => {

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Juan</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">23/08/2022</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, excepturi aut? Qui magni minima consequatur itaque deserunt ad consectetur cumque excepturi illo laboriosam, sed, sit vitae perspiciatis tenetur veritatis sint.</span>
        </p>
      </div>
  )
}

export default Paciente
