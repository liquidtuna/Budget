import React, { Component } from 'react'

class IncomePanel extends Component {

    renderIncomes() {

        return this.props.incomes.map((income) => {
            return (
                <div key={income.name}>
                    {income.name} :  {income.monthlyIncome}
                </div>
            )
        })

    }
    renderMath() {
        let bTotalBills = 0;
        let aTotalBills = 0;

        let incomePaid =[];
        this.props.month.bills.forEach(bill => {
            bTotalBills = bTotalBills + bill.bAmount
            aTotalBills = aTotalBills + bill.aAmount

        });

        this.props.incomes.forEach(income => {
            incomePaid.push({[income.name] : (bTotalBills/this.props.incomes.size)})

        });

        return (
            <div className='row' key={this.props.month}>
                <div className='col-4'>
                    Budget Total Bills:  {bTotalBills}
                    <br />
                    Actual Total Bills:  {aTotalBills}
                </div>
                <div className='col-4'>
                    Budget Total Bills:  {bTotalBills}
                    <br />
                    Actual Total Bills:  {aTotalBills}
                </div>

            </div>
        )


    }

    render() {

        return (
            <div className='row'>
                <div className='col-2'>
                    Income
          <br />
                    {this.renderIncomes()}

                </div>
                <div className='col-7'>
                    {this.renderMath()}
                </div>
            </div>

        );
    }
}

export default IncomePanel