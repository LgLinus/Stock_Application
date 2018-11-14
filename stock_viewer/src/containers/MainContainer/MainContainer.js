import React, {Component} from 'react';
import HeaderContainer from '../HeaderContainer/HeaderCont';
import StockViewerContainer from '../StockViewerContainer/StockViewerContainer';
import RecipeContainer from '../RecipeContainer/RecipeContainer';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {menu: 'recipes'};
  }

  renderMenu(menu) {
    if (menu === 'stocks') {
      return <StockViewerContainer />;
    }
    if (menu === 'recipes') return <RecipeContainer />;
  }

  handleChangeMenu = newMenu => {
    if (newMenu) {
      this.setState({menu: newMenu});
    }
  };

  render() {
    let menu = this.state.menu;
    return (
      <div>
        <HeaderContainer handleChangeMenu={this.handleChangeMenu} />
        <div className="MainBody" />
        {this.renderMenu(menu)}
      </div>
    );
  }
}

export default MainContainer;
