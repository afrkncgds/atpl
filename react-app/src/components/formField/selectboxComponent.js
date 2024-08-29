import React, { useState } from 'react';
import { SvgImgComponent } from '../img/svgImgComponent';

export const SelectBoxComponent = ({ label, options, meta: { error, touched } }) => {
    // State tanımlama
    const [selectedOption, setSelectedOption] = useState('Bir seçenek seçin');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    // Seçim değişikliği handler'ı
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    // Açılır listeyi açma/kapama handler'ı
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <app-react>
            <div className={`input-block select ${isDropdownOpen ? "open" : ""}`}>
                <label>{label}</label>
                <SvgImgComponent img={"chevron.svg"} classN={`gg-chevron`}/>
                <div className='select__item' onClick={toggleDropdown}>
                    {selectedOption}
                </div>

                {isDropdownOpen && (
                    <ul className='select__dropdown'>
                        <li className='select__dropdown-item search'>
                            <SvgImgComponent img={"search.svg"}/>
                            Search
                        </li>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className='select__dropdown-item'
                                onClick={() => handleOptionClick(option.label)}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </app-react>
    );
};
