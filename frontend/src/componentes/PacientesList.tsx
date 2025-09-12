import { useEffect, useState } from 'react';

type Paciente = {
  id: number;
  nombre: string;
  apellido: string;
};

export default function PacientesList() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/pacientes')
      .then(res => res.json())
      .then(data => setPacientes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Pacientes</h2>
      <ul>
        {pacientes.map(p => (
          <li key={p.id}>{p.nombre} {p.apellido}</li>
        ))}
      </ul>
    </div>
  );
}
