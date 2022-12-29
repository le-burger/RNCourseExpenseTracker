import { StyleSheet, View } from "react-native";

import { GlobalStyle } from "../../constants/Styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({expenses, expensesPeriod}) {
    const DUMMY_EXPENSES = [
        {
            id: 'e1',
            description: 'A pair of shoes',
            amount: 69.99,
            date: new Date('2022-12-24')
        },
        {
            id: 'e2',
            description: 'Nice trousers',
            amount: 49.50,
            date: new Date('2022-11-29')
        },
        {
            id: 'e3',
            description: 'Netflix sub',
            amount: 14.99,
            date: new Date('2022-12-01')
        },
        {
            id: 'e4',
            description: 'A couple of books',
            amount: 29.99,
            date: new Date('2022-12-25')
        },
        {
            id: 'e5',
            description: 'Another couple of books',
            amount: 23.15 ,
            date: new Date('2022-12-22')
        },
    ]
     return <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
     </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyle.colors.primary700
    }
    
})