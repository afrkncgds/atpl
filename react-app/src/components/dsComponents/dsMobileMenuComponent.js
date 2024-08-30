

export const DsMobileMenuComponent = ({data}) => {
    const open = false;
    return(
        <div className="mobile-menu">
            <div className="icon-item">

                {/*TODO: open classı geldiğinde body'e no-scroll class'ı gelmeli*/}

                {
                    open ?
                        <svg width="12" height="12" viewBox="0 0 12 12"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L13 1M1 1L13 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.59998 5.69995H20.4M3.59998 12H20.4M3.59998 18.3H20.4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                }


            </div>
            {
                open &&
                <div className="mobile-menu-block">

                    <div className="mobile-list-menu">
                        {
                            data.map ((item , key) =>(
                                <a href={item.link} className="list-item">

                                    <div className="text-item">
                                   <span>
                                       {item.name}
                                   </span>
                                    </div>
                                    <div className="icon-item">
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L1 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </a>
                            ))
                        }

                    </div>

                </div>

            }


        </div>
    )
}