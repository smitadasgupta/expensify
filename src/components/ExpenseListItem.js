import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({id,description,amount,createdAt}) => (
        <div className="expenselist-section__list-item">
            <Link to={`/edit/${id}`} className="expenselist-section__edit-item">
                <h3>{description}</h3>
            </Link>

        <div className="expenselist-section__details">
                <p className="expenselist-section__amount">Amount: <span>&pound;{numeral(amount / 100).format('£0,0.00')}</span></p>
                <p className="expenselist-section__date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
            </div>
        </div> 
);

export default ExpenseListItem;