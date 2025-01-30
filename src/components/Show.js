import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig/firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import ProductList from './ProductList';
import Cart from './Cart';
import UserInfo from './UserInfo';

const MySwal = withReactContent(Swal);

const Show = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState({});
  const navigate = useNavigate();
  const productsCollection = collection(db, "products");

  const getProducts = useCallback(async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [productsCollection]);

  const getUserData = useCallback(async () => {
    if (user) {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      setUserData(userDoc.data());
    }
  }, [user]);

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Eliminar el producto?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        MySwal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
      }
    });
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/'); // Redirigir a la página de inicio después de cerrar sesión
  };

  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity: (prevCart[product.id]?.quantity || 0) + quantity,
      },
    }));
  };

  const calculateTotal = () => {
    return Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = () => {
    MySwal.fire({
      title: 'Compra en línea realizada',
      text: 'Gracias por su compra',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    setCart({});
  };

  useEffect(() => {
    getProducts();
    getUserData();
  }, [user, getProducts, getUserData]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {userData && <UserInfo userData={userData} handleLogout={handleLogout} />}
          {userData?.role === 'admin' && (
            <div className="d-grid gap-2">
              <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>
            </div>
          )}
          <ProductList
            products={products}
            userData={userData}
            confirmDelete={confirmDelete}
            handleAddToCart={handleAddToCart}
          />
          {userData?.role === 'user' && (
            <Cart
              cart={cart}
              calculateTotal={calculateTotal}
              handlePayment={handlePayment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Show;