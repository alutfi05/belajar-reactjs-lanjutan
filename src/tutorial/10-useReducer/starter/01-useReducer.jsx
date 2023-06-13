import { useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './action';
import reducer from './reducer';

const defaultState = {
    people: data,
};

const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removeList = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: { id } });
    };

    const clearList = () => {
        dispatch({ type: CLEAR_LIST });
    };

    const resetList = () => {
        dispatch({ type: RESET_LIST });
    };

    return (
        <div>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button onClick={() => removeList(id)}>remove</button>
                    </div>
                );
            })}

            {state.people.length < 1 ? (
                <button
                    className="btn"
                    style={{ marginTop: '2rem' }}
                    onClick={resetList}
                >
                    reset
                </button>
            ) : (
                <button
                    className="btn"
                    style={{ marginTop: '2rem' }}
                    onClick={clearList}
                >
                    clear
                </button>
            )}
        </div>
    );
};

export default ReducerBasics;
