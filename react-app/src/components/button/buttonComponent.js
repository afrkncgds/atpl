import { SvgImgComponent } from "../img/svgImgComponent"

export const ButtonComponent = ({btnText, icon, classN, func, props}) => {
    return (
        func ? 
        <button className={`btn ${classN ? classN : ""}`} onClick={() => props ? func(props) : func()}>
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