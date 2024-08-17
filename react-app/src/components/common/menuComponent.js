import { ButtonComponent } from "../button/buttonComponent"
import {MobileMenuComponent} from "./mobileMenuComponent";

export const MenuComponent = ({ data, btnText, icon }) => {
    return (
        <div className="menu-list">
            {
                data.map((item, key) => (
                    <a href="/" className="menu-item" key={key}>
                        {
                            <span>{item}</span>
                        }

                    </a>
                ))
            }
            <ButtonComponent btnText={btnText} icon={icon} classN={"yellow-btn"}/>
            <MobileMenuComponent data={data}/>
        </div>
    )
}