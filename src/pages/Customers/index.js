import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ButtonAdd from '../../components/ButtonAdd';

const Customers = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function getCustomers() {
      const response = await axios.get('https://localhost:7097/customers');
      setCustomers(response.data);
    }
    getCustomers();
  }, []);

  function add() {
    navigate('/customersform');
  }

  if (customers.length !== 0) {
    return (
      <div>
        <h1>Lista de clientes</h1>

        <div>
          <table style={{ borderStyle: 'solid' }}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>CPF</th>
                <th>Contato</th>
                <th>Data de Nascimento</th>
                <th>Opções</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.cpf}</td>
                  <td>{customer.contact}</td>
                  <td>{customer.birthDate}</td>
                  <td>
                    {<Link to={`/customersform/${customer.id}`}>Editar</Link>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ButtonAdd add={add} />
      </div>
    );
  } else {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }
};

export default Customers;
