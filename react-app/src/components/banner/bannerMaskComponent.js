import {SvgImgComponent} from "../img/svgImgComponent";


export const BannerMaskComponent = ({mask}) => {
    return(
        <div className="banner--mask">
            {
                mask &&
                <SvgImgComponent img={mask}/>
            }




        </div>
    )
}