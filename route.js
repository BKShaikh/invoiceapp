import { createStackNavigator, createAppContainer } from 'react-navigation';
import DashBoard from './src/components/dashboard/index';
import Login from './src/components/login/index';
import SignUp from './src/components/signUp/index';
import ForgetPassword from './src/components/forgetPassword/index';
import Customers from './src/components/customers/index';
import Invoices from './src/components/invoices/index';
import AddCustomer from './src/components/customers/addCustomer';
import CustomerDetail from './src/components/customers/customerDetail';
import AddInvoice from './src/components/invoices/addInvoice';
import EditInvoice from './src/components/invoices/editInvoice';

const route = createStackNavigator({
  Invoices: { screen: Invoices },
  Login: { screen: Login },
  DashBoard: { screen: DashBoard },
  SignUp: { screen: SignUp },
  ForgetPassword: { screen: ForgetPassword },
  Customers: { screen: Customers },
  AddCustomer: { screen: AddCustomer },
  CustomerDetail: { screen: CustomerDetail },
  EditInvoice: { screen: EditInvoice },
  AddInvoice: { screen: AddInvoice }
},
  {
    headerMode: 'none',
  }
);

const AppNavigator = createAppContainer(route)

export default AppNavigator;