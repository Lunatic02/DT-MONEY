import { BotaoNovaTransacao, HeaderContainer, HeaderContent } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo-dt.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <BotaoNovaTransacao>Nova transação</BotaoNovaTransacao>
          </Dialog.Trigger>
         <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}