import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/index";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
  return(
    <>
    <Header />
    <Summary />
    <TransactionsContainer>
    <SearchForm />
    <TransactionsTable>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td><PriceHighlight variant="income">R$ 36.000,00</PriceHighlight></td>
          <td>Venda</td>
          <td>30/07/2003</td>
        </tr>

      </tbody>
    </TransactionsTable>
    </TransactionsContainer>
    </>
  )
}