import React from "react";
import MenuCategories from "./MenuCategories";
import ScrollButton from "../../helpers/ScrollBtn";
import MenuGridItem from "./MenuGridItem";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { motion } from "framer-motion";
import axios from "axios";

const Menu = ({
  allProducts,
  activeCategory,
  allCategories,
  changeCategory,
  handleAddProduct,
  handleRemoveProduct,
  findMenuItem,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentProducts, setcurrentProducts] = useState(
    [...allProducts].reverse().slice(itemOffset, endOffset)
  );
  const [pageCountProducts, setpageCountProducts] = useState(
    Math.ceil(allProducts.length / 5)
  );
  const [products, setProducts] = useState([]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % allProducts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };
  const resetPagination = () => {
    setItemOffset(0);
    setEndOffset(5);
  };
  //Get Products
  const getProducts = async () => {
    let response = await axios.get(
      "http://localhost:3001/customer/product/getCustomerProducts"
    );
    setProducts(response.data.products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    document.title = `${activeCategory} | Pizza Time`;
    setEndOffset(itemOffset + 5);
    setcurrentProducts([...allProducts].reverse().slice(itemOffset, endOffset));
    setpageCountProducts(Math.ceil(allProducts.length / 5));
  }, [allProducts, setEndOffset, endOffset, itemOffset, activeCategory]);
  return (
    <motion.main
      className="menu-main"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <MenuCategories
        activeCategory={activeCategory}
        allCategories={allCategories}
        changeCategory={changeCategory}
        resetPagination={resetPagination}
        findMenuItem={findMenuItem}
      />
      {products.length === 0 ? (
        <article className="menu-grid">
          <p className="nothing-found">No results found...</p>
        </article>
      ) : (
        <article className="menu-grid">
          {products.map((product) => {
            return (
              <>
                <article className="menu-grid-item flex-container flex-column txt-white">
                  <div className="menu-item-link">
                      <img
                        src={product.img}
                        alt={`${product.name
                        }`}
                      />
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="price">
                    <p className="price-num">
                      <span>Rs.</span>
                      {product.price}
                    </p>
                    <button class="passive-button-style active-add-to-cart">Add to cart</button>
                  </div>
                </article>
              </>
            );
          })}
          <ScrollButton />
        </article>
      )}

      {/* <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountProducts}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
      /> */}
    </motion.main>
  );
};

export default Menu;
