import { Header } from './components/Header';
import { ExpenseProvider } from './context/ExpenseProvider';

export const CostControlApp = () => {
  return (
    <ExpenseProvider>
      <Header />
    </ExpenseProvider>
  );
};
