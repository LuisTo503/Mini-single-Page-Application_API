import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const Edit = () => {
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const getProduct = useCallback(async () => {
    const productDoc = await getDoc(doc(db, "products", id));
    if (productDoc.exists()) {
      const productData = productDoc.data();
      setDescription(productData.description);
      setStock(productData.stock);
      setPrice(productData.price);
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, {
      description,
      stock: parseInt(stock),
      price: parseFloat(price)
    });
    navigate('/products');
  };

  useEffect(() => {
    getProduct();
  }, [id, getProduct]); // Incluimos `id` y `getProduct` en la lista de dependencias

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Edit Product</h1>
          <form onSubmit={handleUpdate}>
            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <input
                type="text"
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: '50%' }} // Hacer la casilla de descripción un 50% más angosta
              />
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Stock</label>
                  <input
                    type="number"
                    className='form-control'
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Price</label>
                  <input
                    type="number"
                    className='form-control'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;