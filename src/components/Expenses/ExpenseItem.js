import React  from 'react';
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card' 

const ExpenseItem=(props)=>{
    // const [title, setTitle] = useState(props.title);
    // const [newTitle, SetNewTitle] = useState('');

    // const clickHandler = () => {
    //     setTitle(newTitle);
    // }

    // const changeHandler = (event) =>{
    //     SetNewTitle(event.target.value)
    // }
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Change Title</button> */}
        </div>
    )
}

export default ExpenseItem;