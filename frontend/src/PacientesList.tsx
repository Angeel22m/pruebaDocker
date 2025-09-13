import { useEffect, useState } from "react";
import styles from "./PacienteList.module.css";

type Paciente = {
  id: number;
  nombre: string;
  apellido: string;
};

export default function PacientesList() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [editNombre, setEditNombre] = useState("");
  const [editApellido, setEditApellido] = useState("");

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = () => {
    fetch("http://localhost:3000/pacientes")
      .then((res) => res.json())
      .then((data) => setPacientes(data))
      .catch((err) => console.error(err));
  };

  const addPaciente = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/pacientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, apellido }),
    });
    setNombre("");
    setApellido("");
    fetchPacientes();
  };

  const deletePaciente = async (id: number) => {
    await fetch(`http://localhost:3000/pacientes/${id}`, { method: "DELETE" });
    fetchPacientes();
  };

  const startEdit = (paciente: Paciente) => {
    setEditandoId(paciente.id);
    setEditNombre(paciente.nombre);
    setEditApellido(paciente.apellido);
  };

  const cancelEdit = () => {
    setEditandoId(null);
    setEditNombre("");
    setEditApellido("");
  };

  const updatePaciente = async (id: number) => {
    await fetch(`http://localhost:3000/pacientes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: editNombre, apellido: editApellido }),
    });
    cancelEdit();
    fetchPacientes();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>👩‍⚕️ Pacientes</h2>

      <form onSubmit={addPaciente} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          ➕ Agregar
        </button>
      </form>

      <ul className={styles.list}>
        {pacientes.map((p) => (
          <li key={p.id} className={styles.card}>
            {editandoId === p.id ? (
              <div style={{ flex: 1, display: "flex", gap: "8px" }}>
                <input
                  className={styles.input}
                  value={editNombre}
                  onChange={(e) => setEditNombre(e.target.value)}
                />
                <input
                  className={styles.input}
                  value={editApellido}
                  onChange={(e) => setEditApellido(e.target.value)}
                />
                <button onClick={() => updatePaciente(p.id)} className={styles.button}>
                  💾 Guardar
                </button>
                <button onClick={cancelEdit} className={styles.deleteButton}>
                  ❌ Cancelar
                </button>
              </div>
            ) : (
              <>
                <span className={styles.cardText}>
                  {p.nombre} {p.apellido}
                </span>
                <div className={styles.cardButtons}>
                  <button
                    onClick={() => startEdit(p)}
                    className={styles.editButton}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => deletePaciente(p.id)}
                    className={styles.deleteButton}
                  >
                    🗑 Eliminar
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
