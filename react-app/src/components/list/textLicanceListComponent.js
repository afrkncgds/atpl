import { SvgImgComponent } from "../img/svgImgComponent"

export const TextLicanceListComponent = ({data, icon, detail,title,subTitle}) => {
    return(
        <div className="text-list">
            {
                title &&
                <div className="title">
                    <h3 >
                        {title}
                    </h3>
                </div>

            }
            {
                detail &&
                <p className="detail">{detail}</p>
            }
            {
                subTitle &&
                <div className="subTitle">
                    <h4 >
                        {subTitle}
                    </h4>
                </div>
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