export const StepLineComponent = ({length, activeVal}) => {
    return(
        <div className="step-line">
            {
                Array.from(Array(length)).map((_, index) => (
                    <div key={index} className={`step-line__item ${index === activeVal || index < activeVal ? 'active' : ''}`}>
                        
                    </div>
                ))
            }
        </div>
    )
}