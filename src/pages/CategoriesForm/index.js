import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ButtonSave from '../../components/ButtonSave';

const Categories = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function getCategory() {
        const response = await axios.get(
          `https://localhost:7097/categories/${params.id}`,
        );
        setName(response.data.name);
      }
      getCategory();
    }
  }, [params.id]);

  async function createCategory(e) {
    e.preventDefault();

    if (!params.id) {
      await axios.post('https://localhost:7097/categories', {
        name,
      });
    } else {
      await axios.put(`https://localhost:7097/categories/${params.id}`, {
        name,
      });
    }
    setName('');
    navigate('/categories');
  }

  return (
    <div>
      <h1 className="ml-5 text-2xl font-bold">Clientes</h1>

      <form className="m-5 w-5/6 mx-auto" onSubmit={createCategory}>
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

        <ButtonSave />
      </form>
    </div>
  );
};

export default Categories;
