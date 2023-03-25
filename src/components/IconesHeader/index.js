import styled from "styled-components";
import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";

const icones = [perfil, sacola];
const Icones = styled.ul`
  display: flex;
  align-items: center;
`;
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
`;

function iconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone}></img>
        </Icone>
      ))}
    </Icones>
  );  
}

export default iconesHeader;
