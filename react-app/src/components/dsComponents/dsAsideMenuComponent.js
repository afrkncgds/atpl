import React from 'react';
import { DsAsideMenuItemComponent } from './dsAsideMenuItemComponent';

export const DsAsideMenuComponent = ({data}) => {
    return (
        <div className='aside-menu'>
            {
                data?.map((item, key)=>(
                    <DsAsideMenuItemComponent data={item} key={key}/>
                ))
            }
        </div>
    );
}