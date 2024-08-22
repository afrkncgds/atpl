import { LOGIN } from "../../constants/routePaths";
import { ButtonComponent } from "../button/buttonComponent"
import {MobileMenuComponent} from "./mobileMenuComponent";
import {useNavigate} from "react-router-dom";
import {SvgImgComponent} from "../img/svgImgComponent";

export const MenuComponent = ({ data, btnText, icon }) => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate(LOGIN);
    };
    return (
        <div className="menu-list">
            {
                data.map((item, key) => (
                    <a href={item.link} className="menu-item" key={key}>
                        {
                            <span>{item.name}</span>

                        }
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 8L10 13L5 8" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>


                    </a>
                ))
            }
            <ButtonComponent func={goToLogin} btnText={btnText} icon={icon} classN={"yellow-btn"}/>
            <MobileMenuComponent data={data}/>
        </div>
    )
}