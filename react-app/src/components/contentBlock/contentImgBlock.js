export const ContentImgBlock = ({title, classN}) => {
    return(
        <section className={`content-block ${classN ? classN : ""}`}>
            {
                title &&
                <h2>{title}</h2>
            }
        </section>
    )
}