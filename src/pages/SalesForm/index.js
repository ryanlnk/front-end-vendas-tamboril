import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ButtonAdd from '../../components/ButtonAdd';
import ButtonSave from '../../components/ButtonSave';

const Sales = () => {
  const [customerId, setCustomerId] = useState('DEFAULT');
  const [paymentId, setPaymentId] = useState('DEFAULT');
  const [sellerId, setSellerId] = useState('DEFAULT');
  const [accountBankId, setAccountBankId] = useState('DEFAULT');
  const [products, setProducts] = useState([]);
  const [salePrice, setSalePrice] = useState(null);
  const [quantity, setQuantity] = useState();

  const [rows, setRows] = useState([{}]);

  const [customers, setCustomers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    async function getTables() {
      const responseSellers = await axios.get('https://localhost:7097/sellers');
      const responseBanks = await axios.get('https://localhost:7097/banks');

      const responseCustomers = await axios.get(
        'https://localhost:7097/customers',
      );

      const responsePayments = await axios.get(
        'https://localhost:7097/payments',
      );

      const responseProducts = await axios.get(
        'https://localhost:7097/products',
      );

      setCustomers(responseCustomers.data);
      setPayments(responsePayments.data);
      setSellers(responseSellers.data);
      setBanks(responseBanks.data);
      setProducts(responseProducts.data);
    }
    getTables();
  }, []);

  function addRow(e) {
    e.preventDefault();
    setRows([...rows, {}]);
  }

  function deleteRow(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1 className="ml-5 text-2xl font-bold">Vendas</h1>

      <form className="m-5 w-5/6 mx-auto">
        <label className="block mt-4">Cliente</label>
        <select
          value={customerId}
          onChange={({ target }) => setCustomerId(target.value)}
          className="block w-1/2 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="DEFAULT" disabled>
            Selecione um cliente
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>

        {/* Tabela para inserir produtos da venda */}
        <table className="mt-16 mb-3 w-full mx-auto table-auto">
          <thead>
            <tr className="text-left border-b border-gray-300">
              <th className="px-4 py-1">Produto</th>
              <th className="px-4 py-1">Quantidade</th>
              <th className="px-4 py-1">Preço (R$)</th>
              <th className="px-4 py-1">Subtotal (R$)</th>
              <th className="px-4 py-1">Opções</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
                key={index}
              >
                <td>
                  <select
                    className="block rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={({ target }) => setSalePrice(target.value)}
                  >
                    <option value="DEFAULT" disabled>
                      Selecione um produto
                    </option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </td>

                <td>
                  <input
                    className="form-input block rounded-md border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                    type="text"
                    name="quantity"
                    id="quantity"
                    value={quantity}
                    onChange={({ target }) => setQuantity(target.value)}
                  />
                </td>

                <td className="text-center">
                  {products.map((product) => {
                    if (product.id == salePrice) {
                      return product.salePrice;

                      // return (
                      //   <input
                      //     disabled
                      //     key={product.id}
                      //     className="form-input block rounded-md border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                      //     type="text"
                      //     name="price"
                      //     id="price"
                      //     value={product.salePrice}
                      //   />
                      // );
                    }
                  })}
                </td>

                <td className="text-center"></td>

                <td className="px-4 py-2 inline-flex">
                  <button
                    className="text-red-800 hover:text-red-200 hover:scale-125 active:scale-95 ease-in-out duration-100"
                    onClick={deleteRow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Fim da tabela */}

        <ButtonAdd add={addRow} />

        <div className="float-right mt-8 mb-3 w-1/2">
          <table className="mt-2 mb-3 mx-auto w-1/2 table-auto">
            <tr>
              <td className="px-4 py-1">Total</td>
              <td className="px-4 py-1">
                {products.map((product) => {
                  if (product.id == salePrice) {
                    return (
                      <input
                        className="form-input block rounded-md border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                        disabled
                        type="text"
                        value={`R$ ${product.salePrice}`}
                      />
                    );
                  }
                })}
              </td>
            </tr>

            <tr>
              <td className="px-4 py-1">Desconto</td>
              <td className="px-4 py-1">
                <input
                  className="form-input block rounded-md border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  type="text"
                />
              </td>
            </tr>

            <tr className="border-y border-gray-600">
              <td className="px-4 py-1">TOTAL LÍQUIDO</td>
              <td className="px-4 py-1">
                R$ 
              </td>
            </tr>
          </table>
        </div>

        <label className="block mt-8">Método de pagamento</label>
        <select
          value={paymentId}
          onChange={({ target }) => setPaymentId(target.value)}
          className="block w-2/5 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="DEFAULT" disabled>
            Selecione um método de pagamento
          </option>
          {payments.map((payment) => (
            <option key={payment.id} value={payment.id}>
              {payment.name}
            </option>
          ))}
        </select>

        <label className="block mt-8">Vendedor</label>
        <select
          value={sellerId}
          onChange={({ target }) => setSellerId(target.value)}
          className="block w-2/5 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="DEFAULT" disabled>
            Selecione um vendedor
          </option>
          {sellers.map((seller) => (
            <option key={seller.id} value={seller.id}>
              {seller.name}
            </option>
          ))}
        </select>

        <label className="block mt-8">Conta Bancária</label>
        <select
          value={accountBankId}
          onChange={({ target }) => setAccountBankId(target.value)}
          className="block w-2/5 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="DEFAULT" disabled>
            Selecione uma conta bancária
          </option>
          {banks.map((bank) => (
            <option key={bank.id} value={bank.id}>
              {bank.name}
            </option>
          ))}
        </select>

        <ButtonSave />
      </form>
    </div>
  );
};

export default Sales;
