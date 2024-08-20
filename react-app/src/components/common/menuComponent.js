import { ButtonComponent } from "../button/buttonComponent"
import {MobileMenuComponent} from "./mobileMenuComponent";
import {Link} from "react-router-dom";

export const MenuComponent = ({ data, btnText, icon }) => {
    return (
        <div className="menu-list">
            {
                data.map((item, key) => (
                    <Link to={item.link}  className="menu-item" key={key}>
                        {
                            <span>{item.name}</span>
                        }

                    </Link>
                ))
            }
            <ButtonComponent btnText={btnText} icon={icon} classN={"yellow-btn"}/>
            <MobileMenuComponent data={data}/>
        </div>
    )
}