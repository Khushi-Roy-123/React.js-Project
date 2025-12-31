import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="w-full min-h-screen flex items-center justify-center py-10 px-4">
        <div className="clean-card p-8 w-full max-w-md bg-white/80 backdrop-blur-xl relative animate-enter">

          <Header />

          <div className="mt-8 flex flex-col gap-6">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>

          <div className="text-center mt-6 text-xs text-slate-400">
            © 2025 ExpenseTracker
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
