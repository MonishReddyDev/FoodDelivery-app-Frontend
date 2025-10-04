import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Fresh Meals Delivered Fast</h2>
        <p>
          Discover local favorites and new flavors—order in seconds and track
          your delivery in real time.
        </p>
        <button>View Menu</button>
      </div>
    </header>
  );
};

export default Header;
