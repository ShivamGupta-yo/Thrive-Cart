import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios';
import { toast } from 'react-toastify';
import {Checkbox,Radio} from "antd";
import { Prices } from '../components/Prices';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/context/cart';
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const[cart,setCart] = useCart();

  // get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/products/product-list/${page}`);
      setLoading(false);
    
      // console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error in fetching products");
    }
  };

  // get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Filter by category
  const handleFilter = async (value, id) => {
    let all = [...checked];
    // console.log(all);
    if (value) {
      all.push(id);
      console.log(all + "checking with id");
    } else {
      all = all.filter((c) => c != id);
    }
    setChecked(all);
  };

  // get filtered produc
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/products/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // get total count ========================================================================= 
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/products/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // load more =====================================================
  const loadMore = async()=>{
    try{
      setLoading(true)
      const {data} = await axios.get(`/api/v1/products/product-list/${page}`);
      setLoading(false);
      setProducts([...products,...data?.products]);

    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(page===1) return;
    loadMore();
  },[page])

  useEffect(() => {
    getAllCategories();
    getTotal();
    if (!checked.length || !radio.length) getAllProducts();
  }, []);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  return (
    <Layout title={"All products - Best Offers"}>
      <div className="home-container" style={{ height: "100%",marginBottom:"95px" }}>
        <div className="homerow">
          <div className="homeleft" style={{ padding: "20px" }}>
            {/* {JSON.stringify(checked)} */}
            {/* {total} */}
            <h4>Filter by Category </h4>
            <div className="filterByCategory">
              {categories?.map((c) => (
                <Checkbox
                  className="checkBox"
                  key={c._id}
                  onChange={(e) => {
                    handleFilter(e.target.checked, c._id);
                  }}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            {/* {JSON.stringify(radio)} */}
            <h4>Filter by Price </h4>
            <div className="filterByPrice">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio className="radio" value={p.array}>
                      {p.name}{" "}
                    </Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <br />
            <div>
              <button
                onClick={() => window.location.reload()}
                className="filterBtn"
              >
                Clear Filters
              </button>
            </div>
          </div>
          <div className="homeright" style={{marginLeft:"100px"}}>
            <h1 style={{ fontSize: "30px", marginTop: "20px" }}>
              All Products{" "}
            </h1>
            <div className="pro">
              {products &&
                products?.map((prod) => (
                  <>
                    <div className="pro-cd" key={prod._id}>
                      <div className="pro-img">
                        <img
                          src={`http://localhost:4000/upload/${prod.photo}`}
                        />
                      </div>
                      <div className="pro-det">
                        <h5 className="pro-n"> {prod.name}</h5>
                        <p className="pro-desc">
                          {prod.description.substring(0, 30)}...
                        </p>
                        <p className="pro-price">${prod.price}</p>
                        <div className='flexbtns'
                        style={{display:"flex",justifyContent:"space-between"}}>
                        <button
                          onClick={() => navigate(`/product/${prod._id}`)}
                          className="mdbtn"
                        >
                          More Details
                        </button>
                        <button
                          onClick={() => {
                            setCart([...cart, prod]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, prod])
                            );
                            toast.success("Item added to Cart");
                          }}
                          className="SubmitBtn"
                          style={{width:"150px",height:"58px",padding:"7px 10px",marginTop:"18px"}}
                        >
                          Add to Cart
                        </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <div>
              {Array.isArray(products) && products.length < total && (
                <button
                  className="SubmitBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "loading...." : "Load more"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home