import { ImgComponent } from "../img/imgComponent"


export const SliderComponent = ({ data }) => {
    return (
        <div className="slider">
            <button className="slider__btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3999 18L8.3999 12L14.3999 6" stroke="#482200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className="slider__container">
                <div className="slider__block">
                    {
                        data.map((item, key) => (
                            <ImgComponent key={key} img={item.img} alt={item.alt} />
                        ))
                    }
                </div>
            </div>
            <button className="slider__btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.3999 6L14.3999 12L8.3999 18" stroke="#482200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}