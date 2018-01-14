import React from 'react';
import {connect} from 'react-redux';
import { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';


class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDateChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <section className="filters-section">
                
                <div className="filters-section__search-input">
                    <input
                        type="text"
                        value={this.props.filters.text}
                        onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}
                        className="text-input"
                        placeholder="Search expenses"
                    />
                </div>
                
               

                <div className="filters-section__select">
                    <select
                        className="select-inputs"
                        value={this.props.filters.sortBy}
                        onChange={(e) => {
                            if (e.target.value === 'date') {
                                this.props.dispatch(sortByDate());
                            }
                            else if (e.target.value === 'amount') {
                                this.props.dispatch(sortByAmount());
                            }
                        }
                        }
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div> 

                <div className="filters-section__date-picker">
                    <DateRangePicker
                        startDateId="ID"
                        endDateId="ID"
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDateChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </section>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);