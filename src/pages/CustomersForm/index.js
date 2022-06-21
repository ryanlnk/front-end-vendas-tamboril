import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ButtonSave from '../../components/ButtonSave';

const Customers = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [contact, setContatc] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function getCustomer() {
        const response = await axios.get(
          `https://localhost:7097/customers/${params.id}`,
        );
        setName(response.data.name);
        setEmail(response.data.email);
        setCpf(response.data.cpf);
        setContatc(response.data.contact);
        setBirthDate(response.data.birthDate);
      }
      getCustomer();
    }
  }, [params.id]);

  async function createCustomer(e) {
    e.preventDefault();

    if (!params.id) {
      await axios.post('https://localhost:7097/customers', {
        name,
        email,
        cpf,
        contact,
        birthDate,
      });
    } else {
      await axios.put(`https://localhost:7097/customers/${params.id}`, {
        name,
        email,
        cpf,
        contact,
        birthDate,
      });
    }
    setName('');
    setEmail('');
    setCpf('');
    setContatc('');
    setBirthDate('');
    navigate('/customers');
  }

  return (
    <div>
      <h1>Clientes</h1>

      <form onSubmit={createCustomer}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor="name">Nome</label>

        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="email">E-mail</label>

        <input
          type="text"
          name="cpf"
          id="cpf"
          value={cpf}
          onChange={({ target }) => setCpf(target.value)}
        />
        <label htmlFor="cpf">CPF</label>

        <input
          type="text"
          name="contact"
          id="contact"
          value={contact}
          onChange={({ target }) => setContatc(target.value)}
        />
        <label htmlFor="contact">Contato</label>

        <input
          type="text"
          name="birthDate"
          id="birthDate"
          value={birthDate}
          onChange={({ target }) => setBirthDate(target.value)}
        />
        <label htmlFor="birthDate">Data de Nascimento</label>
        <ButtonSave />
      </form>
    </div>
  );
};

export default Customers;
