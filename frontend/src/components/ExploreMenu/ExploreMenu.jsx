import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        From comforting classics to bold global flavors, explore every corner of
        our curated menu.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={item.menu_name}
              className="explore-menu-listItem"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={
                  item.menu_name
                    ? `${item.menu_name} category`
                    : "Menu category"
                }
                loading="lazy"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
