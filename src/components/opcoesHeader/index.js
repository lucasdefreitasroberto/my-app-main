import styled from "styled-components";

const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];
const Opcoes = styled.ul`
  display: flex;
`;
const Opcao = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

function opcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((lista) => (
        <Opcao>
          <p>{lista}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default opcoesHeader;

// function opcoesHeader() {
//   return (
//     <Opcoes>
//       {textoOpcoes.map(function (lista) {
//         return (
//           <Opcao>
//             <p>{lista}</p>
//           </Opcao>
//         );
//       })}
//     </Opcoes>
//   );
//}
