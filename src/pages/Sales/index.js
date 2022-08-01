import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAdd from '../../components/ButtonAdd';
import ButtonRemove from '../../components/ButtonRemove';

const Sales = () => {
  const navigate = useNavigate();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function getSales() {
      const response = await axios.get(`https://localhost:7097/sales`);
      setSales(response.data);
    }
    getSales();
  }, []);

  async function deleteSale(id) {
    await axios.delete(`https://localhost:7097/sales/${id}`);
    setSales(sales.filter((sale) => sale.id !== id));
  }

  function add() {
    navigate('/salesform');
  }

  if (sales.length !== 0) {
    return (
      <>
        <h1 className="ml-4 text-2xl font-bold">Vendas</h1>

        <ButtonAdd add={add} />

        <table className="m-5 w-5/6 mx-auto table-auto">
          <thead>
            <tr className="text-left border-b border-gray-300">
              <th className="px-4 py-1">Data</th>
              <th className="px-4 py-1">Venda</th>
              <th className="px-4 py-1">Cliente</th>
              <th className="px-4 py-1">Método de pagamento</th>
              <th className="px-4 py-1">Valor (R$)</th>
              <th className="px-4 py-1">Opções</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
                key={sale.id}
              >
                <td className="px-4 py-2">{sale.date}</td>
                <td className="px-4 py-2">{sale.id}</td>
                <td className="px-4 py-2">{sale.customer.name}</td>
                <td className="px-4 py-2">{sale.payment.name}</td>
                <td className="px-4 py-2">{sale.subTotal}</td>
                {/* <td className="px-4 py-2">{sale.salesHasProducts[0].subTotal}</td> */}
                <td className="px-4 py-2 inline-flex">
                  <ButtonRemove
                    deleteFunction={deleteSale}
                    parameter={sale.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h1 className="ml-4 text-2xl font-bold">Vendas</h1>

        <div>
          <ButtonAdd add={add} />
        </div>

        <p className="ml-4">Carregando...</p>
      </>
    );
  }
};

export default Sales;
