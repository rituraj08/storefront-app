import { useDispatch } from "react-redux";
import {
  setFilterByPrice,
  setFilterByRatings,
  setFilterByAlphabets,
} from "../../../store/productsSlice";
import { price, rating, aplphabetically } from "../../../utils";
import {
  FILTER_BY_PRICE,
  FILTER_BY_RATING,
  FILTER_ALPHABETICALLY,
} from "../../../utils/constants";
import Dropdown from "../../common/Dropdown";
const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = (type: string, value: string) => {
    console.log(type, value);
    if (type === FILTER_BY_PRICE) {
      dispatch(setFilterByPrice({ value, type }));
    } else if (type === FILTER_BY_RATING) {
      dispatch(setFilterByRatings({ value, type }));
    } else if (type === FILTER_ALPHABETICALLY) {
      dispatch(setFilterByAlphabets({ value, type }));
    }
  };
  return (
    <div className="filter">
      <h2> Filter </h2>
      <Dropdown
        list={price.list}
        type={price.type}
        filterHandler={filterHandler}
      />
      <Dropdown
        list={rating.list}
        type={rating.type}
        filterHandler={filterHandler}
      />
      <Dropdown
        list={aplphabetically.list}
        type={aplphabetically.type}
        filterHandler={filterHandler}
      />
    </div>
  );
};

export default Filter;
