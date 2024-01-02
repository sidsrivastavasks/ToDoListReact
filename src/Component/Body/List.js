function List({ data, onTaskClick }) {
    return data == null || data.length === 0 ? (
        <p>No tasks to show</p>
    ) : (
        <div className="list">
            <div className="completed">
                <h4>Completed</h4>
                {data.map((item) =>
                    item.completed == true ? null : (
                        <div key={item.id}>
                            <input
                                style={{ cursor: "pointer" }}
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => onTaskClick(item.id)}
                            />
                            <span>{item.name}</span>
                        </div>
                    )
                )}
            </div>
            <div className="not-completed">
                <h4>Not Completed</h4>
                {data.map((item) =>
                    item.completed == false ? null : (
                        <div key={item.id}>
                            <input
                                style={{ cursor: "pointer" }}
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => onTaskClick(item.id)}
                            />
                            <s>
                                <span>{item.name}</span>
                            </s>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default List;
