import React, { useState } from "react";
import List from "./List";
import EmptyList from "../Buttons/EmptyList";

function Body() {
    const [listData, setListData] = useState([
        "Read SpringBoot",
        "Complete assignments",
        "Prepare breakfast",
        "Sleep for 2 hours",
        "Take a shower",
    ]);

    const removeData = () => {
        setListData([]);
    };

    return (
        <div>
            <List data={listData} />
            <EmptyList clearList={removeData} />
        </div>
    );
}

export default Body;
