import { LineListComponent } from "./lineListComponent"

export const LineListContainerComponent = ({data, title}) => {
    return(
        <div className="line-list__cnt dashboard-content">
            <h2>{title}</h2>
            <LineListComponent data={data}/>
        </div>
    )
}