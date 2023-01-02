import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import ExpensesOutput from "../components/expenses/ExpensesOutput";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http"

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses');
      }
      setIsFetching(false);
    }
    getExpenses();
  }, [])

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  function errorHandler() {
    setError(null)
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText={"No expenses registered the last 7 days."}
    />
  );
}

const styles = StyleSheet.create({});
