import { SvgImgComponent } from "../img/svgImgComponent"

export const BreadcrumbComponent = ({title}) => {
    return(
        <div className="breadcrumb ">
            <div className="icon-item">
                <a href="/">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.5 9.99989L9.46967 4.03022C9.76256 3.73732 10.2374 3.73732 10.5303 4.03022L16.5 9.99989M5 8.49989V15.2499C5 15.6641 5.33579 15.9999 5.75 15.9999H8.5V12.7499C8.5 12.3357 8.83579 11.9999 9.25 11.9999H10.75C11.1642 11.9999 11.5 12.3357 11.5 12.7499V15.9999H14.25C14.6642 15.9999 15 15.6641 15 15.2499V8.49989M7.5 15.9999H13"
                            stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>

            </div>
            <div className="icon-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 6L11.9196 9.81156C11.9451 9.83629 11.9653 9.86566 11.9791 9.898C11.9929 9.93033 12 9.965 12 10C12 10.035 11.9929 10.0697 11.9791 10.102C11.9653 10.1343 11.9451 10.1637 11.9196 10.1884L8 14"
                        stroke="#D1D5DB" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
            <div className="text-item">
            <span>{title}</span>
            </div>


        </div>
    )
}