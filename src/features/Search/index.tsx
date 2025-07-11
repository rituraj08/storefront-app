import { useCallback, useState } from "react";
import TextInput from "../../component/TextInput";
import { debounce } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../store/productsSlice";
import List from "../../component/List";
const Search = () => {
  const dispatch = useDispatch();
  const { searchProductsList } = useSelector((state: any) => state.products);
  const [searchText, setSearchText] = useState("");

  const searchHandler = useCallback(
    (value: string) => {
      console.log("searchHandler called..with", value);
      dispatch(searchProducts({ value }));
    },
    [dispatch]
  );

  const debouncedSearchHandler = useCallback(
    debounce((value: string) => {
      searchHandler(value);
    }, 500),
    [searchHandler]
  );

  const onChangeHandler = (e: any) => {
    const value = e.target.value;
    setSearchText(value);
    debouncedSearchHandler(value);
  };

  return (
    <div style={{ position: "relative" , width: "300px" }}>
      <TextInput value={searchText} onChange={onChangeHandler}/>
      {searchProductsList.length > 0 && <List list={searchProductsList} />}
    </div>
  );
};

export default Search;
