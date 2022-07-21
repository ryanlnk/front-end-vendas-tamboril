import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ButtonSave from '../../components/ButtonSave';

const Products = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [categoryId, setCategoryId] = useState('DEFAULT');

  const [categories, setCategories] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function getTable() {
      const responseCategories = await axios.get(
        'https://localhost:7097/categories',
      );
      setCategories(responseCategories.data);
    }
    getTable();
  }, []);

  useEffect(() => {
    if (params.id) {
      async function getProducts() {
        const response = await axios.get(
          `https://localhost:7097/products/${params.id}`,
        );
        setName(response.data.name);
        setSalePrice(response.data.salePrice);
        setDescription(response.data.description);
        setQuantity(response.data.quantity);
        setCategoryId(response.data.category.id);
      }
      getProducts();
    }
  }, [params.id]);

  async function createUpdateProducts(e) {
    e.preventDefault();

    if (!params.id) {
      await axios.post('https://localhost:7097/products', {
        name,
        salePrice,
        description,
        quantity,
        categoryId: Number(categoryId),
      });
    } else {
      await axios.put(`https://localhost:7097/products/${params.id}`, {
        name,
        salePrice,
        description,
        quantity,
        categoryId: Number(categoryId),
      });
    }
    navigate('/products');
  }

  return (
    <div>
      <h1 className="ml-5 text-2xl font-bold">Produtos</h1>

      <form className="m-5 w-5/6 mx-auto" onSubmit={createUpdateProducts}>
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

        <label className="block mt-4" htmlFor="salePrice">
          Preço
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="text"
          name="salePrice"
          id="salePrice"
          value={salePrice}
          onChange={({ target }) => setSalePrice(target.value)}
        />

        <label className="block mt-4" htmlFor="description">
          Descrição
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />

        <label className="block mt-4" htmlFor="quantity">
          Quantidade
        </label>
        <input
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="text"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={({ target }) => setQuantity(target.value)}
        />

        <label className="block mt-4">Categoria</label>
        <select
          value={categoryId}
          onChange={({ target }) => setCategoryId(target.value)}
          className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="DEFAULT" disabled>
            Selecione uma categoria
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <ButtonSave />
      </form>
    </div>
  );
};

export default Products;
