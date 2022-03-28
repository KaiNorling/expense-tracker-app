
import './App.css';
import { AddTransaction } from './component/AddTransaction';
import { Balance } from './component/Balance';
import { Header } from './component/Header';
import { IncomeExpense,  } from './component/IncomeExprense';
import { TransactionList } from './component/TransactionList';
import {GlobalProvider} from "./context/GlobalState"



function App() {
  return (
    <>
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
   
     
    
    </>

  );
}

export default App;
