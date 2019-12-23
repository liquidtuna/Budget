import React, { Component } from 'react';

import Modal from '../../components//UI/Modal/Modal'
import classes from './CatCards.css';
class CatCards extends Component {


    constructor(props) {
        super(props);

        this.state = {
            showAddBillModal: false,
            showAddBillThisMonthModal: false
        }
    }


    //Utilities
    onAddBill = () => {
        let newState = { ...this.state }
        newState.showAddBillModal = true;
        this.setState(() => {
            return newState
        });
    }

    onAddBillClosed = () => {
        let newState = { ...this.state }
        newState.showAddBillModal = false;
        this.setState(() => {
            return newState
        });
    }

    onAddBillMonth = () => {
        let newState = { ...this.state }
        newState.showAddBillThisMonthModal = true;
        this.setState(() => {
            return newState
        });
    }

    onAddBillMonthClosed = () => {
        let newState = { ...this.state }
        newState.showAddBillThisMonthModal = false;
        this.setState(() => {
            return newState
        });
    }


    //Rendering
    renderBills() {
        return this.props.bills.map((bill) => {
            return (
                <div key={bill.name + "" + bill.Amount}>
                    {bill.name}  {bill.bAmount}

                </div>
            )
        })

    }

    renderIncomes(billTotal) {
        let billPortion = (billTotal / this.props.incomes.length);
        console.log(billPortion);
        return this.props.incomes.map((income) => {
            return (
                <div key={income.name + "" + billPortion}>
                    {income.name} :  {billPortion}
                </div>
            )
        })
    }

    render() {
        let billTotal = 0;
        this.props.bills.forEach((bill) => {
            billTotal = billTotal + bill.bAmount
        });
        let key = this.props.month.index + ":" + this.props.category.id;
        return (
            <div className={classes.CatCard} >
                <div>
                    <h1>{this.props.category.name} {key}</h1>
                    <h5>Ideal Percentage {this.props.category.idealPerRange}</h5>
                </div>

                <div>
                    Budget : {billTotal}   <button className={'btn-info'}
                        onClick={() => this.onAddBill()}
                    >
                        <i /> add Bill
                            </button>
                            &nbsp;&nbsp;
                    <button className={'btn-info'}
                        onClick={() => this.onAddBillMonth()}
                    >
                        <i /> add Bill(local)
                            </button>
                </div>

                <div className={classes.CatBills}>
                    {this.renderBills()}
                </div>
                <div className={classes.CatIncomes}>
                    {this.renderIncomes(billTotal)}
                </div>

                <Modal show={this.state.showAddBillModal} modalClosed={this.onAddBillClosed}>
                    all Months
                </Modal>
                <Modal show={this.state.showAddBillThisMonthModal} modalClosed={this.onAddBillMonthClosed}>
                    This one
                </Modal>
            </div>
        )
    };

}

export default CatCards;