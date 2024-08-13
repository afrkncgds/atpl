import { ASSETS } from "../../constants/paths"

export const SvgImgComponent = ({lazy, classN, alt, img}) => {
    return (
        <img
            loading={lazy ? "lazy" : "eager"}
            className={`${classN ? classN : ''}`}
            src={`${ASSETS}/img/svg/${img}`}
            alt={alt}
        />
    )
}