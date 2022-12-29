import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/expenses/ExpensesOutput";

export default function RecentExpenses() {
    return <ExpensesOutput expensesPeriod="Last 7 days"/>
}

const styles = StyleSheet.create({
    
})