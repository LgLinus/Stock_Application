import React, {Component} from 'react';
import './MenuContainer.css';
import MainDrawer from '../../components/MainDrawer/MainDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      <ListItem button onClick={this.stocks} key="1">
        <ListItemText primary="Stocks" />
      </ListItem>,
      <ListItem button onClick={this.recipes} key="2">
        <ListItemText primary="Recipes" />
      </ListItem>,
      <ListItem button onClick={this.calendar} key="3">
        <ListItemText primary="Calendar" />
      </ListItem>,
      <ListItem button onClick={this.exit} key="4">
        <ListItemText primary="Exit" />
      </ListItem>,
    ];
  }

  stocks = () => {
    this.props.onClose('stocks');
  };

  recipes = () => {
    this.props.onClose('recipes');
  };
  exit = () => {
    console.log('Exit');
    this.props.onClose('exit');
  };

  calendar = () => {
    console.log('Calendar');
    this.props.onClose('calendar');
  };

  render() {
    return (
      <div className="Menu">
        <MainDrawer {...this.props}>{this.buttons}</MainDrawer>
      </div>
    );
  }
}

export default MenuContainer;
