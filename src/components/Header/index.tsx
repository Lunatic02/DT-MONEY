import { BotaoNovaTransacao, HeaderContainer, HeaderContent } from "./styles";

import logoImg from '../../assets/logo-dt.svg'

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <BotaoNovaTransacao>Nova transação</BotaoNovaTransacao>
      </HeaderContent>
    </HeaderContainer>
  )
}