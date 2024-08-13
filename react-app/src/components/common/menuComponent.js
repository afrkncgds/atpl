import { SvgImgComponent } from "../img/svgImgComponent"

export const MenuComponent = ({data,btnText,icon}) => {
    return(
        <div className="menu-list">
                {
                    data.map((item)=>(
                        <a href="/"  className="menu-item">
                            {
                                <span>{item}</span>
                            }

                        </a>
                    ))
                }
                <div className="yellow-btn">
                    {
                        icon &&
                        <SvgImgComponent img={icon} />
                    }
                    <span>{btnText}</span>
                </div>


        </div>
    )
}