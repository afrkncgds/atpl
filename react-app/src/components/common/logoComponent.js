import { SvgImgComponent } from "../img/svgImgComponent"

export const LogoComponent = ({ icon}) => {
    return(
        <div className="logo">



            <a  href="/" className="logo-item">
                {
                    icon &&
                    <SvgImgComponent img={icon} />
                }

            </a>



        </div>
    )
}