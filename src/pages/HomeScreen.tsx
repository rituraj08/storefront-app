import Search from "../component/features/Search";
import Filter from "../component/features/Filter";
import ProductList from "../component/features/ProdutList";
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