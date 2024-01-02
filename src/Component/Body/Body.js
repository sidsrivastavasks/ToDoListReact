import React, { useState } from "react";
import List from "./List";

function Body() {
    const [listData, setListData] = useState([
        "Read SpringBoot",
        "Complete assignments",
        "Prepare breakfast",
        "Sleep for 2 hours",
        "Take a shower",
    ]);

    const clearList = () => {
        setListData([]);
    };

    return (
        <div>
            <List data={listData} />
            <button onClick={clearList}>Clear List</button>
        </div>
    );
}

export default Body;
