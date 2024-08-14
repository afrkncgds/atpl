import { ImgComponent } from "../img/imgComponent"

export const ImgCardComponent = ({ title, classN, data }) => {
    return (
        <section className={`img-card ${classN ? classN : ""}`}>
            {
                title &&
                <h2>{title}</h2>
            }
            <div className="img-card__block">
                {
                    data.map((item, key) => (
                        <div className="img-card__item" key={key}>
                            <ImgComponent img={item.img} alt={`card-block-${key}`} classN={"img-card__bg"}/>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}