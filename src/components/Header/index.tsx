import { BotaoNovaTransacao, HeaderContainer, HeaderContent } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo-dt.svg'

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <BotaoNovaTransacao>Nova transação</BotaoNovaTransacao>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}