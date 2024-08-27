import { SvgImgComponent } from "../img/svgImgComponent"

export const TextListComponent = ({data, icon, detail}) => {
    return(
        <div className="text-list">
            <div className="text-list__block">
            {
                data.map((item, key)=>(
                    <div key={key} className="text-list__item">
                        {
                            icon &&
                            <SvgImgComponent img={icon} alt={`list-icon-${key}`}/>
                        }
                        <p className={`${!icon ? "text-list__dot" : ""}`}>{item}</p>
                    </div>
                ))
            }
            </div>
            {
                detail && 
                <p>{detail}</p>
            }
        </div>
    )
}