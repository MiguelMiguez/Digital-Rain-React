import React, { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/php/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    });
    const result = await response.json();
    if (result.status === "success") {
      setIsModalVisible(true);
      setTimeout(() => {
        setIsModalVisible(false);
      }, 5000);
    } else {
      alert("Error al enviar el correo");
    }
  };

  return (
    <div className="Contacto">
      <h2 className="TittleForm">contactanos</h2>
      <form onSubmit={handleSubmit}>
        <h3 className="SubTittleForm">
          Nosotros nos <span>encargamos</span> de todo!
        </h3>
        <div className="FormGroup">
          <input
            className="ContactoForm"
            type="text"
            id="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="ContactoForm"
            type="text"
            id="surname"
            placeholder="Apellido"
            value={formData.surname}
            onChange={handleChange}
          />
          <input
            className="ContactoForm"
            type="email"
            id="email"
            placeholder="ejemplo@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="ContactoForm"
            type="number"
            id="number"
            placeholder="telefono"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <button className="ButtonForm" type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Contacto;
