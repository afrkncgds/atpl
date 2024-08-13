import { SvgImgComponent } from "../img/svgImgComponent"

export const TextListComponent = ({data, icon, detail}) => {
    return(
        <div className="text-list">
            {
                data.map((item, key)=>(
                    <div key={key} className="text-list__item">
                        {
                            icon &&
                            <SvgImgComponent img={icon} alt={`list-icon-${key}`}/>
                        }
                        <p>{item}</p>
                    </div>
                ))
            }
            {
                detail && 
                <p>{detail}</p>
            }
        </div>
    )
}