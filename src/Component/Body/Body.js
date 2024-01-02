import React, { useState } from "react";
import List from "./List";
import EmptyList from "../Buttons/EmptyList";
import RemoveCompleted from "../Buttons/RemoveCompleted";

function Body() {
    const [listData, setListData] = useState([
        { name: "Read SpringBoot", completed: false, id: "1" },
        { name: "Complete assignments", completed: true, id: "2" },
        { name: "Prepare breakfast", completed: false, id: "3" },
        { name: "Sleep for 2 hours", completed: true, id: "4" },
    ]);

    const removeData = () => {
        setListData([]);
    };

    function handelRemoveCompleted() {
        const newList = listData.filter((item) => item.completed === false);
        setListData(newList);
    }

    function updateTask(id) {
        const newList = [...listData];
        const item = newList.find((item) => item.id === id);
        item.completed = !item.completed;
        setListData(newList);
    }

    return (
        <div className="card">
            <List data={listData} onTaskClick={updateTask} />
            <EmptyList clearList={removeData} />
            <RemoveCompleted onRemoveCompleted={handelRemoveCompleted} />
        </div>
    );
}

export default Body;
