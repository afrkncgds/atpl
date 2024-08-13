import { ImgComponent } from "../img/imgComponent"

export const BannerComponent = () => {
    return (
        <section className="banner">
            <div className="banner__mask">
                <ImgComponent img={"/img/banner/bannerBg.png"} alt={"banner-img"} />
            </div>
            <div className="banner__text">

            </div>
        </section>
    )
}