import React, { Component } from "react";
import SplashPage from "./pages/SplashPage";
import DashboardPage from "./pages/DashboardPage";
import ScanPage from "./pages/ScanPage";
import DrawerPage from "./pages/DrawerPage";

import {
  createDrawerNavigator,
  StackNavigator,
  DrawerItems
} from "react-navigation";

class App extends Component {
  state = {
    ready: false,
    theme: {},
    authorized: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true });
    }, 300);
  }

  render() {
    return <AppRouter />;
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Splash: { screen: SplashPage },
    Dashboard: { screen: DashboardPage },
    Scan: { screen: ScanPage }
  },
  {
    contentComponent: DrawerPage
  }
);

const AppRouter = StackNavigator(
  {
    Splash: props => <SplashPage {...props} />,
    Dashboard: props => <DashboardPage {...props} />,
    Scan: props => <ScanPage {...props} />,
    Drawer: { screen: AppDrawerNavigator }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default App;
