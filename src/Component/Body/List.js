function List({ data }) {
    return (
        <>
            {data != null && data.length > 0 ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Nothing to do buddy. Sleep!!</p>
            )}
        </>
    );
}

export default List;
