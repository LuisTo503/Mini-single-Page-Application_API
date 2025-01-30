import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDoc, doc } from 'firebase/firestore';

const Create = () => {
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const productsCollection = collection(db, "products");

  const getUserData = async () => {
    if (user) {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      setUserData(userDoc.data());
    }
  };

  useEffect(() => {
    getUserData();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(productsCollection, {
        description: description,
        stock: parseInt(stock),
        price: parseFloat(price)
      });
      // Resetear los campos después de crear un producto
      setDescription('');
      setStock('');
      setPrice('');
      navigate('/products'); // Redirigir a la página de productos después de crear el producto
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className='container d-flex align-items-center justify-content-center vh-100'>
      <div className='card shadow' style={{ width: '400px' }}>
        <div className='card-body'>
          {userData && (
            <div className='text-center mb-4'>
              <h2>Welcome: {userData.email}</h2>
              <p>Role: {userData.role}</p>
            </div>
          )}
          <h1 className='text-center mb-4'>Create Product</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <input
                type="text"
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            <button type='submit' className='btn btn-primary w-25'>Store</button>
            <button type='button' className='btn btn-secondary w-25' onClick={() => navigate('/products')}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
