import { useCallback, useState, useMemo, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../common/TextInput";
import { debounce } from "../../../utils";
import { searchProducts } from "../../../store/productsSlice";
import List from "../../common/List";
import type { RootState } from "../../../types";
const Search = () => {
  const dispatch = useDispatch();
  const { searchProductsList } = useSelector((state: RootState) => state.products );
  const [searchText, setSearchText] = useState("");

  // const searchHandler2 = useCallback(
  //   (value: string) => {
  //     console.log("searchHandler called..with", value);
  //     dispatch(searchProducts({ value }));
  //   },
  //   [dispatch]
  // );

  // const debouncedSearchHandler2 = useCallback(
  //   debounce((value: string) => {
  //     searchHandler(value);
  //   }, 500),
  //   [searchHandler2]
  // );

  const searchHandler = useCallback((value: string) => {
  console.log("searchHandler called..with", value);
  dispatch(searchProducts({ value }));
}, [dispatch]);

const debouncedSearchHandler = useMemo(() => debounce(searchHandler, 500), [searchHandler]);

  const onChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    debouncedSearchHandler(value);
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <TextInput value={searchText} onChange={onChangeHandler} placeholder={"Search Product"} />
      {searchProductsList.length > 0 && <List list={searchProductsList} />}
    </div>
  );
};

export default Search;
