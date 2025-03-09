import logoApas from "../../../assets/logoapas.png";

const HeaderComponent = () => {
  return (
    <header className="header-component">
      <img src={logoApas} width={"50px"} alt="" />
      <h1>agente de I.A. da APAS</h1>
      <img src={logoApas} width={"50px"} alt="" />
    </header>
  );
};

export default HeaderComponent;
