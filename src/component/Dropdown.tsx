
import { useState } from "react";

interface DropdownProps {
    list: any;
    type: string;
    filterHandler: any;
}
const Dropdown = ({list, type, filterHandler}: DropdownProps) => {
    const [show, setShow] = useState(false);
    const showHandler = () => {
        setShow(!show);
    }
    const clickHandler = (e: any) => {
        e.stopPropagation();
        console.log(e.target.closest("li").dataset.id);
        const id = e.target.closest("li").dataset.id;
        filterHandler(type, id);
    }
    return (
        <div>
         <p onClick={showHandler}>  {type} </p>
          { <ul style={{listStyle: "none"}} onClick={clickHandler}>
            {
                list.map((item: any) => (
                    <li data-id={item.id} key={item.id}>
                        <input  type="radio" name={type} placeholder={"Search"}/> {item.title}
                    </li>
                ))
            }
          </ul>}
        </div>
    )

}

export default Dropdown;