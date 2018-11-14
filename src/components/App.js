import React, { Component } from "react";
import SplashPage from "./pages/SplashPage";
import DashboardPage from "./pages/DashboardPage";
import ScanPage from "./pages/ScanPage";

import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  AsyncStorage
} from "react-native";

import { createDrawerNavigator, StackNavigator } from "react-navigation";

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

// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Home: { screen: DashboardPage },
//     Account: { screen: AccountsPage },
//     BillsPayment: { screen: BillsPaymentPage },
//     Shop: { screen: CardPage },
//     SendMoney: { screen: SendCashPage },
//     Withdraw: { screen: WithdrawCashPage },
//     Cards: { screen: CardPage },
//     Offers: { screen: OffersPage },
//     Loyalty: { screen: LoyaltyPage },
//     History: { screen: HistoryPage },
//     Logout: { screen: AewdLoginPage },
//     Announcement: { screen: AnnouncementPage },
//     Donate: { screen: DonatePage },
//     Login: { screen: LoginPage }
//   },
//   {
//     contentComponent: DrawerPage
//   }
// );

const AppRouter = StackNavigator(
  {
    Splash: props => <SplashPage {...props} />,
    Dashboard: props => <DashboardPage {...props} />,
    Scan: props => <ScanPage {...props} />
    // Drawer: { screen: AppDrawerNavigator }
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
