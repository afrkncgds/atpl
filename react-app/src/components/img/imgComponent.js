import { ASSETS } from "../../constants/paths"

export const ImgComponent = ({ lazy, classN, alt, img, imgMobile, min, max }) => {

    return (
        <picture>
            <source media={`(min-width: ${min ? min + "px" : "431px"})`}
                srcSet={`${ASSETS}${img.substring(0, img.lastIndexOf("."))}.webp 1x, ${ASSETS}${img.substring(0, img.lastIndexOf("."))}_2x.webp 2x`}
                type="image/webp" />
            <source media={`(min-width: ${min ? min + "px" : "431px"})`}
                srcSet={`${ASSETS}${img.substring(0, img.lastIndexOf("."))}.png 1x, ${ASSETS}${img.substring(0, img.lastIndexOf("."))}_2x.png 2x`}
                type="image/png" />
            <source media={`(max-width: ${max ? max + "px" : "430px"})`}
                srcSet={`${ASSETS}${(imgMobile || img).substring(0, (imgMobile || img).lastIndexOf("."))}.webp 1x, ${ASSETS}${(imgMobile || img).substring(0, (imgMobile || img).lastIndexOf("."))}_2x.webp 2x, ${ASSETS}${(imgMobile || img).substring(0, (imgMobile || img).lastIndexOf("."))}_3x.webp 3x`}
                type="image/webp" />
            <source media={`(max-width: ${max ? max + "px" : "430px"})`}
                srcSet={`${ASSETS}${(imgMobile || img).substring(0, (imgMobile || img).lastIndexOf("."))}.png 1x, ${ASSETS}${(imgMobile || img).substring(0, (imgMobile || img).lastIndexOf("."))}_2x.png 2x, ${ASSETS}${(imgMobile || img).substring(0, (imgMobile || img).lastIndexOf("."))}_3x.png 3x`}
                type="image/png" />
            <img
                loading={lazy ? "lazy" : "eager"}
                className={`${classN ? classN : ''}`}
                src={`${ASSETS}${img}`}
                alt={alt}
            />
        </picture>
    )
}