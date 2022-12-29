import { useContext } from "react";
import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallBackText={"No expenses registered."}
    />
  );
}

const styles = StyleSheet.create({});
