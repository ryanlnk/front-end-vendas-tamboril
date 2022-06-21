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
      <h1 className="text-2xl font-bold">Clientes</h1>

      <form onSubmit={createCustomer}>
        <label className="block mt-4" htmlFor="name">
          Nome
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />

        <label className="block mt-4" htmlFor="email">
          E-mail
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <label className="block mt-4" htmlFor="cpf">
          CPF
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="text"
          name="cpf"
          id="cpf"
          value={cpf}
          onChange={({ target }) => setCpf(target.value)}
        />

        <label className="block mt-4" htmlFor="contact">
          Contato
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="text"
          name="contact"
          id="contact"
          value={contact}
          onChange={({ target }) => setContatc(target.value)}
        />

        <label className="block mt-4" htmlFor="birthDate">
          Data de Nascimento
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="text"
          name="birthDate"
          id="birthDate"
          value={birthDate}
          onChange={({ target }) => setBirthDate(target.value)}
        />

        <ButtonSave />
      </form>
    </div>
  );
};

export default Customers;
