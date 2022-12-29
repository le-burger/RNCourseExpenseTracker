import { View, Text, StyleSheet } from "react-native";

import { GlobalStyle } from '../../constants/Styles'

export default function ExpensesSummary({expenses, periodName}) {
    const expenseSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

  return (
    <View style={styles.constainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    constainer: {
      padding: 8,
      backgroundColor: GlobalStyle.colors.primary50,
      borderRadius: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    period: {
      fontSize: 12,
      color: GlobalStyle.colors.primary400
    },
    sum: {
      fontSize: 16,
      fontWeight: 'bold',
      color: GlobalStyle.colors.primary500
    },
})
