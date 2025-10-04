import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, image, description }) => {
  const { cart, addToCart, removeFromCart } = useContext(StoreContext);

  const itemCount = cart[id]?.count || 0;

  return (
    <div className="Food-item">
      <div className="food-item-Image-container">
        <img className="food-item-Image" src={image} alt={name} />

        {!itemCount ? (
          <div className="add_icon_white">
            <img
              className="icon"
              src={assets.add_icon_white}
              alt="add"
              onClick={() => addToCart({ _id: id, name, price, image })}
            />
          </div>
        ) : (
          <div className="counter-pill">
            <img
              className="icon"
              src={assets.remove_icon_red}
              alt="remove"
              onClick={() => removeFromCart(id)}
            />
            <span className="count">{itemCount}</span>
            <img
              className="icon"
              src={assets.add_icon_green}
              alt="add"
              onClick={() => addToCart({ _id: id, name, price, image })}
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
