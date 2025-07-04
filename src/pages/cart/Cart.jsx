import {
  decrementCart,
  incrementCart,
  removeCart,
} from "@/redux/features/cart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div className="p-10">
      <h2>Cart</h2>
      {/* <CartView data={cart}/> */}
      <div className="grid grid-cols-2">
        <div>
          {cart?.map((product) => (
            <div key={product.id}>
              <img src={product.thumbnail} width={80} alt="" />
              <p>{product.title}</p>
              <strong>
                {product.price} {product.price * product.quantity}
              </strong>
              <div>
                <button
                  className="disabled:opacity-40"
                  disabled={product.quantity <= 1}
                  onClick={() => dispatch(decrementCart(product))}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => dispatch(incrementCart(product))}>
                  +
                </button>
                <button onClick={() => dispatch(removeCart(product))}>
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2>Total {cart.reduce((sum, item) => sum + (item.price * item.quantity) , 0)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
