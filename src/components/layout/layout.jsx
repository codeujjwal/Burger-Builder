import React,{ Component } from "react";
import Toolbar from "../toolbar/toolbar";
import classes from "./layout.module.css";
import Sidedrawer from "../sidedrawer/sidedrawer";

class Layout extends Component {
  state = {
      sideDrawer: false
  };

sideDrawerclosed = () =>{
    this.setState({sideDrawer: false})
}

sideDrawerHandler = () => {
    this.setState((prevstate) => {
        return {sideDrawer: !prevstate.sideDrawer}

    })
}
  

  render() {
    return (
      <div className={classes.layout}>
        <Toolbar iconclicked={this.sideDrawerHandler}/>
        <Sidedrawer open={this.state.sideDrawer} closed={this.sideDrawerclosed} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
