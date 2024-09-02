import { SvgImgComponent } from "../img/svgImgComponent"

export const LineListComponent = ({data}) => {
    return(
        <div className="line-list">
            <div className="line-list__block">
            {
                data.map((item, key)=>(
                    <div key={key} className="line-list__item">
                        <p>{item.text}</p>
                        {
                            item.icon &&
                            <SvgImgComponent img={item.icon} alt={`list-icon-${key}`}/>
                        }
                    </div>
                ))
            }
            </div>
        </div>
    )
}