import React, { Component } from 'react';
import JonTab from '../../components/UI/JonTab/JonTab'
import PropTypes from 'prop-types';
import classes from './JonTabs.css';

class JonTabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;


    return (
      <div>
        <ol className= {classes.TabList}>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <JonTab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className={classes.TabContent}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default JonTabs;