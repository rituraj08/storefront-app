import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../api/LoadProduct";
import Card from "../../common/Card";
import Button from "../../common/Button";
import { loadMoreProducts } from "../../../store/productsSlice";
import { throttle } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../store/cartSlice";
import type { Product } from "../../../types";
import type { AppDispatch } from "../../../store/appStore";
const ProductList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts } = useSelector(
    (state: { products: { filteredProducts: Product[] } }) => state.products
  );

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

      const isScrollingDown = scrollHeight - (scrollTop + clientHeight) <= 300;

      const isScrollingUp = scrollTop <= 100;

      if (isScrollingDown && !isScrollingUp) {
        dispatch(loadMoreProducts({ type: "down" }));
      } else if (isScrollingUp && scrollTop !== 0) {
        dispatch(loadMoreProducts({ type: "up" }));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const throttledScrollHandler = throttle(handleScroll, 200);
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", throttledScrollHandler);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "scroll",
          throttledScrollHandler
        );
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleButtonClick = (product: Product) => {
    console.log("handleButtonClick");
    console.log("product", product.id);
    console.log("addToCart");
    dispatch(addToCart(product.id));
    navigate("/Checkout");
  };

  return (
    <div className="productList" ref={containerRef}>
      {filteredProducts?.map((product: Product) => (
        <div key={product.id}>
          <Card key={product.id} product={product} />
          <Button text="Buy" onClick={() => handleButtonClick(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
