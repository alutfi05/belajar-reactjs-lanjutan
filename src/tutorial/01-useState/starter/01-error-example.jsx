const ErrorExample = () => {
    let count = 0;

    const handleClickCount = () => {
        count += 1;
        console.log(count);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button type="button" onClick={handleClickCount} className="btn">
                increase
            </button>
        </div>
    );
};

export default ErrorExample;
