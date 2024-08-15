import { SvgImgComponent } from "../img/svgImgComponent"

export const TextLicanceListComponent = ({data, icon, detail,title,subTitle}) => {
    return(
        <div className="text-list">
            {
                title &&
                <h3 className="title">
                    {title}
                </h3>

            }
            {
                detail &&
                <p className="detail">{detail}</p>
            }
            {
                subTitle &&
                <h4 className="subTitle">
                    {subTitle}
                </h4>
            }
            <div className="text-list__container">
                <div className="text-list__block">
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
                </div>
                <div className="text-list__block">
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
                </div>
            </div>


        </div>
    )
}