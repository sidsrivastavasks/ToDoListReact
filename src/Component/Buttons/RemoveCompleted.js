function RemoveCompleted({ onRemoveCompleted }) {
    function handelClick() {
        onRemoveCompleted();
    }
    return (
        <button className="btn btn-danger" onClick={handelClick}>
            Remove Completed
        </button>
    );
}

export default RemoveCompleted;
