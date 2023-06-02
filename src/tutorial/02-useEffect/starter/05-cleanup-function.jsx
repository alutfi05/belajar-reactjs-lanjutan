import { useState, useEffect } from 'react';

const CleanupFunction = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <button
                type="button"
                className="btn"
                onClick={() => setToggle(!toggle)}
            >
                toggle component
            </button>
            {toggle && <SecondComponent />}
        </div>
    );
};

const SecondComponent = () => {
    useEffect(() => {
        const someFunc = () => {
            // some logic
        };

        window.addEventListener('scroll', someFunc);

        return () => {
            window.removeEventListener('scroll', someFunc);
        };
    }, []);

    return <h2>Second Component</h2>;
};

export default CleanupFunction;
