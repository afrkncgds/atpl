import { ButtonComponent } from "../button/buttonComponent"
import {MobileMenuComponent} from "./mobileMenuComponent";
import {useNavigate} from "react-router-dom";

export const MenuComponent = ({ data, btnText, icon }) => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };
    return (
        <div className="menu-list">
            {
                data.map((item, key) => (
                    <a href={item.link}  className="menu-item" key={key}>
                        {
                            <span>{item.name}</span>
                        }

                    </a>
                ))
            }
            <ButtonComponent func={goToLogin} btnText={btnText} icon={icon} classN={"yellow-btn"}/>
            <MobileMenuComponent data={data}/>
        </div>
    )
}