import { Link, useLocation } from "react-router-dom";
import CancelIcon from "../../../assets/cancel-icon.png";
import LogOutImg from "../../../assets/logout-icon.png";
import HeaderLogo from "../../../assets/nav-logo.png";
import SearchIcon from "../../../assets/search-icon.png";
import UserImg from "../../../assets/user-img.png";

const Header = () => {
  const pathName = useLocation();
  console.log(pathName);

  return (
    <>
      <header className="bg-secondary py-8">
        <div className="content-container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3">
              <div className="nav_logo">
                <Link to={"/"}>
                <img src={HeaderLogo} alt="header-logo" />
                </Link>
              </div>
            </div>

            <div className="col-span-5">
              <div className="search_bar">
                <input
                  className="w-full bg-[#ffffff80] py-2 px-5 pl-16 outline-none border-2 border-[#ABA397] rounded-[30px] placeholder:text-[#89807880] placeholder:text-base placeholder:font-medium text-primary"
                  type="text"
                  style={{
                    backgroundImage: `url(${SearchIcon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 20px center",
                  }}
                  placeholder="Digite o tema ou assunto que deseja"
                />
              </div>
            </div>

            <div className="col-span-4">
              <div className="user_section_wrapper flex justify-end">
                <div className="user flex items-center gap-2">
                  <div className="user_img">
                    <img src={UserImg} alt="" />
                  </div>
                  <div className="user_name">
                    <p className="text-primary font-medium text-3xl">
                      Otávio Salvatore
                    </p>
                  </div>
                  <div className="logout_icon">
                    <Link to={"/"}>
                      <img src={LogOutImg} alt="logout" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {pathName.pathname !== "/find-properties" && (
        <>
          <div className="alert bg-[#EA1103] py-5">
            <div className="content-container">
              <p className="text-primary font-cabinet text-lg font-normal flex items-center justify-center gap-52">
                Ops! Você precisa confirmar a sua conta para poder ter acesso a
                todas as funcionalidades do painel
                <img src={CancelIcon} alt="cancel" />
              </p>
            </div>
          </div>

          <nav className="">
            <ul className="grid grid-cols-12">
              <li className="bg-brown text-base text-center text-white font-semibold py-6 px-36 col-span-3">
                <Link to={"#"}>Dashboard</Link>
              </li>
              <li className="bg-lightBrown text-base text-center text-brown font-semibold py-6 px-36 col-span-3">
                <Link to={"#"}>Meus cadastros</Link>
              </li>
              <li className="bg-lightBrown2 text-base text-center text-[#898078] font-semibold py-6 px-36 col-span-3">
                <Link to={"#"}>Páginas</Link>
              </li>
              <li className="bg-bg-lightBrown2 text-base text-center text-[#898078] font-semibold py-6 px-36 col-span-3">
                <Link to={"#"}>Meu perfil</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
