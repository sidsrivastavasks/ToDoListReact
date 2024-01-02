function Body({ data }) {
    return (
        <>
            {data.length > 0 ? (
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

export default Body;
