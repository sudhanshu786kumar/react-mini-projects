import React from 'react';
import { useState } from 'react';
import Sresult from './Sresult';





const Search = () => {
    const [img, Setimg] = useState("");
    const InputEvent = (event) => {
        const data = event.target.value;
        Setimg(data)

    }

    return (
        <>
            <div className="searchbar">
                <input type="text " value={img} placeholder="search..." onChange={InputEvent} />
                {img === "" ? null : <Sresult name={img} />}
            </div>
        </>
    )

}
export default Search;
