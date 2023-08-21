import { TransactionItem } from "components/transactionItem/TransactionItem"
import { Table, Tbody, Thead, Th } from "./TransactionHistory.styled" 


export const TransactionHistory = ({ items }) => {
    return (
<Table class="transaction-history">
  <Thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </Thead>

  <Tbody>
     
      {items.map(item => (
        <tr key={item.id}>
          <TransactionItem infoItem={item} />
        </tr>
      ))}
    
  </Tbody>
</Table>
    )
}