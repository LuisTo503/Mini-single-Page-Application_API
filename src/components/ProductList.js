import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = ({ products, userData, confirmDelete, handleAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="my-4"> {/* Agregar márgenes superior e inferior */}
      {userData && (
        <div className="mb-4"> {/* Margen inferior */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2>Bienvenida, {userData.email}</h2>
              <p>Rol: {userData.role}</p>
            </div>
            {userData?.role === 'user' && (
              <button className="btn btn-secondary" onClick={() => navigate('/')}>Back to Home</button>
            )}
          </div>
        </div>
      )}
      <table className='table table-light table-hover'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                {userData?.role === 'admin' ? (
                  <>
                    <Link to={`/edit/${product.id}`} className="btn btn-light me-2">
                      <i className="fa-solid fa-pencil"></i>
                    </Link>
                    <button onClick={() => confirmDelete(product.id)} className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      min="1"
                      max={product.stock}
                      defaultValue="1"
                      id={`quantity-${product.id}`}
                      className="form-control d-inline-block me-2"
                      style={{ width: '70px' }} // Ajustar el ancho del campo de cantidad
                    />
                    <button
                      onClick={() => handleAddToCart(product, parseInt(document.getElementById(`quantity-${product.id}`).value))}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;