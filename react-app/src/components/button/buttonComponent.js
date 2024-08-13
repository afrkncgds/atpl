import { SvgImgComponent } from "../img/svgImgComponent"

export const ButtonComponent = ({btnText, icon, classN}) => {
    return (
        <button className={`btn ${classN ? classN : ""}`}>
            {
                icon &&
                <SvgImgComponent img={icon} classN={"btn-icon"}/>
            }
            <span>{btnText}</span>
        </button>
    )
}