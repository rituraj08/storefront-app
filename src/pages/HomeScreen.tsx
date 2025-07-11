import Search from "../features/Search";
import Filter from "../features/Filter";
import ProductList from "../features/ProdutList";
const HomeScreen = () => {
  return (
    <div>
      <div className="search">
        <Search />
      </div>
      <div className="container">
        <Filter />
        <ProductList />
      </div>
    </div>
  );
};

export default HomeScreen;