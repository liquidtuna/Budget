import React, {Component} from 'react'

class IncomePanel extends Component{

    renderIncomes() {
 
        return this.props.incomes.map((income) => {
            return (
                <div key={income.name}>
                    {income.name} :  {income.monthlyIncome}
                </div>
            )
        })

    }

    render() {

        return (
            <div >
          Income
          <br/>
          {this.renderIncomes()};
            </div>
        );
    }
}

export default IncomePanel