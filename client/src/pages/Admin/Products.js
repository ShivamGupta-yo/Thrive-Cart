import React, { useEffect, useState } from "react";
import AdminMenu from "../../Layout/AdminMenu";
import Layout from "../../Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/products/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="products-container">
        <div className="prow">
          <div className="produleft">
            <AdminMenu />
          </div>
          <div className="Pright">
            <h1 style={{textAlign:"center",fontSize:"30px"}}>All Products List</h1>
            <div className="products-grid">
              {products.map((prod) => (
                <Link
                  to={`/dashboard/admin/products/${prod._id}`}
                  key={prod._id}
                  className="product-link"
                >
                  <div className="product-card">
                    <div className="product-img">
                      <img
                        src={`http://localhost:4000/upload/${prod.photo}`}
                        alt={prod.name}
                      />
                    </div>
                    <div className="product-details">
                      <h5 className="product-name">{prod.name}</h5>
                      <p className="product-description">{prod.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
