import { ImgComponent } from "../img/imgComponent"

export const BannerComponent = () => {

    return (
        <section className="banner">
            <div className="banner__mask">
                <img src="../../../public/assets/img/banner/bannerBg.png" alt="bg"/>
            </div>
            <div className="banner__content safe-area">
                <div className="banner__text">
                    <div className="text__title">
                        <h3>Welcome to the</h3>
                    </div>
                    <div className="text__content">
                        <p>Learning Management System</p>
                    </div>
                    <div className="text__item">
                        <p>
                            We offer reliable Learning Management System that completely fulfills the requirements from
                            authorities.
                            User friendly interface, easy to read reports and built-in guidance will simplify your
                            learning flow.
                        </p>
                    </div>


                </div>
                <div className="banner__img">
                </div>
            </div>

        </section>
)
}