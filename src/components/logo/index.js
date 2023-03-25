import styled from "styled-components";
import imgLogo from "../../img/logo.svg";

const LogoCountainer = styled.div`
  display: flex;
  font-size: 30px;
  margin-right: 10px;
`;
const ImgCountainer = styled.img`
  margin-right: 10px;
`;

function logo() {
  return (
    <LogoCountainer>
      <ImgCountainer src={imgLogo} alt="logo" />
      <p>
        <strong>Ativa</strong>
        <u>Books</u>
      </p>
    </LogoCountainer>
  );
}

function lucas() {
  return (
    <div className="Logo">
      <img src={imgLogo} alt="logo" className="logo-img"></img>
      <p>
        <strong>Ativa</strong>
        <u>Books</u>
      </p>
    </div>
  );
}

// export default Logo;
export { lucas, logo };
