import React, { Component } from 'react';
import IncomePanel from '../../components/IncomePanel/IncomePanel';
import CatCards from '../CatCards/CatCards';
import classes from '../CatCards/CatCards.css';
import JonTabs from '../JonTabs/JonTabs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.less';
import ReactTable from "react-table";
import "react-table/react-table.css";




class Budget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: 'home',
            incomes: [
                {
                    id: 1,
                    name: "jon",
                    monthlyIncome: 4360
                },
                {
                    id: 2,
                    name: "Second Income",
                    monthlyIncome: 2199
                }
            ],
            loans: [
                {

                    id: 1,
                    name: "Boa Credit Card",
                    balance: 2000,
                    apr: 5.5,
                    dueDay: 17,
                    minPay: 0

                },
                {

                    id: 2,
                    name: "Ollo",
                    balance: 0,
                    apr: 5.5,
                    dueDay: 17,
                    minPay: 0

                }
            ],
            savings: [
                {
                    id: 1,
                    name: "Christmas",
                    goal: 2000,
                    balance: 0
                },
                {
                    id: 2,
                    name: "Vacation",
                    goal: 4000,
                    balance: 0
                }
            ],
            categories: [
                {
                    id: 1,
                    name: "Food",
                    idealPerRange: "5-15"
                },
                {
                    id: 2,
                    name: "Housing",
                    idealPerRange: "25-35"
                },
                {
                    id: 3,
                    name: "Utilities",
                    idealPerRange: "5-10"
                },
                {
                    id: 4,
                    name: "Insurance",
                    idealPerRange: "10-25"
                },
                {
                    id: 5,
                    name: "Transporation",
                    idealPerRange: "10-15"
                },
                {
                    id: 6,
                    name: "Medical",
                    idealPerRange: "5-10"
                },
                {
                    id: 7,
                    name: "Personal",
                    idealPerRange: "5-10"
                },
                {
                    id: 8,
                    name: "Savings",
                    idealPerRange: "5-10"
                },
                {
                    id: 9,
                    name: "Recreation",
                    idealPerRange: "5-10"
                }
            ],
            months: [{

                index: 1,
                title: "January",
                abbr: "Jan",
                bills: [
                    {
                        name: "Groceries",
                        cat: 1,
                        bAmount: 200,
                        aAmount: 0,
                        pAmount: 0,
                        dueDay: 1,
                        paid: false,
                        paidMonitored: false
                    },
                    {
                        name: "Restaurants",
                        cat: 1,
                        bAmount: 200,
                        aAmount: 0,
                        dueDay: 1
                    },
                    {
                        name: "Rent/Mortgage",
                        cat: 2,
                        bAmount: 1095,
                        aAmount: 0,
                        dueDay: 1
                    },
                    {
                        name: "Maintance",
                        cat: 2,
                        bAmount: 100,
                        aAmount: 0,
                        dueDay: 1
                    },
                    {
                        name: "Electric",
                        cat: 3,
                        bAmount: 100,
                        aAmount: 0,
                        dueDay: 10
                    }
                ]


            }, {


                index: 2,
                title: "Febuary",
                abbr: "Feb",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            },
            {
                index: 3,
                title: "March",
                abbr: "Mar",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            }
                ,
            {
                index: 4,
                title: "April",
                abbr: "Apr",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            }
                ,
            {
                index: 5,
                title: "May",
                abbr: "May",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            }
                ,
            {
                index: 6,
                title: "June",
                abbr: "Jun",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            }
                ,
            {
                index: 7,
                title: "July",
                abbr: "Jul",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            }
                ,
            {
                index: 8,
                title: "August",
                abbr: "Aug",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            }
                ,
            {
                index: 9,
                title: "Sept",
                abbr: "Sep",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            }
                ,
            {
                index: 10,
                title: "October",
                abbr: "Oct",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            },
            {
                index: 11,
                title: "November",
                abbr: "Nov",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            },
            {
                index: 12,
                title: "December",
                abbr: "Dec",
                bills: [{
                    name: "Groceries",
                    cat: 1,
                    bAmount: 300,
                    aAmount: 0,
                    dueDay: 1
                },

                {
                    name: "Rent/Mortgage",
                    cat: 2,
                    bAmount: 100,
                    aAmount: 0,
                    dueDay: 1
                }]
            }


            ]


        };
    }

    addBillThisMonth(bill, index) {
        let newState = { ...this.state };
        let foundMonth = this.state.months.find((month) => month.index === index)
        foundMonth.bills.push(bill);
        this.setState(() => {
            return newState
        });


    }

    addBillAllMonths(bill) {
        let newState = { ...this.state };
        newState.months.forEach((month) => {
            month.bills.push(bill)
        });
        this.setState(() => {
            return newState
        });
    }

    renderCats(month) {

        return this.state.categories.map((cat) => {
            return (
                <CatCards key={month + " " + cat} category={cat}
                    month={month}
                    bills={month.bills.filter(bill => bill.cat === cat.id)}
                    incomes={this.state.incomes}
                    addBillThisMonth={this.addBillThisMonth}
                    addBillAllMonths={this.addBillAllMonths} />
            )
        });
    }

    renderMonths() {
        return this.state.months.map((month) => {
            return (

                <div styles={{ display: 'flex' }} label={month.abbr} key={month.index} >
                    <IncomePanel incomes={this.state.incomes} />
                    <div className={classes.CatCards}>
                        {this.renderCats(month)}
                    </div>

                </div>
            )
        });
    }

    renderRecap() {
        const columns = [
            {
                Header: 'Bill Name',
                accessor: 'billName',
                minWidth: 65,
            }
        ];
        let months = [];
        let bills = [];
        this.state.months.forEach(month => {
            columns.push({ Header: month.abbr, accessor: month.abbr, minWidth: 65 })

            month.bills.forEach((bill, index) => {
                bills.push({ id: index + bill.name, billName: bill.name })
            })
        })

        return (
            <div>
       <table >
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
                <ReactTable
                    filterable={false}
                    data={bills}
                    columns={columns}
                    className="-striped w-100"
                    minrows={0}
                    showPagination={false}
                />
            </div>

        )

    }


    renderSavings() {
        return this.state.months.map((month) => {
            return (

                <div styles={{ display: 'flex' }} label={month.abbr} key={month.index} >
                    <IncomePanel incomes={this.state.incomes} />
                    <div className={classes.CatCards}>
                        {this.renderCats(month)}
                    </div>

                </div>
            )
        });
    }

    renderLoans() {
        return this.state.loans.map((loan) => {
            return (

                <div styles={{ display: 'flex' }} label={loan.name} key={loan.id} >

                    <div className={classes.CatCards}>

                    </div>

                </div>
            )
        });
    }

    render() {

        return (
            <div>

                <Tabs  defaultIndex={1}>
                    <TabList >
                        <Tab>Monthly</Tab>
                        <Tab>Recap</Tab>
                        <Tab>Savings</Tab>
                        <Tab>Loans</Tab>
                    </TabList>

                    <TabPanel>
                        <JonTabs>
                            {this.renderMonths()}
                        </JonTabs>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        {this.renderRecap()}

                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        {/* {this.renderSavings()} */}

                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        {/* {this.renderLoans()} */}

                    </TabPanel>
                </Tabs>

            </div>


        )
    }
}

export default Budget;