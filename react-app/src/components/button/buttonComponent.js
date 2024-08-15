import { SvgImgComponent } from "../img/svgImgComponent"

export const ButtonComponent = ({btnText, icon, classN, func}) => {
    return (
        func ? 
        <button className={`btn ${classN ? classN : ""}`} onClick={()=> func()}>
            {
                icon &&
                <SvgImgComponent img={icon} classN={"btn-icon"}/>
            }
            <span>{btnText}</span>
        </button>
        :
        <button className={`btn ${classN ? classN : ""}`} type="submit">
            {
                icon &&
                <SvgImgComponent img={icon} classN={"btn-icon"}/>
            }
            <span>{btnText}</span>
        </button>
    )
}