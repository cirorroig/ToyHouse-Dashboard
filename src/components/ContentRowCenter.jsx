import React from 'react';
import LastProductInDb from "./LastProductInDb"
import CategoriesInDb from './CategoriesInDb';
import SizesInDb from './SizesInDb';
import AgesInDb from './AgesInDb';
import Chart from './Chart';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}
            <CategoriesInDb/>
            <SizesInDb />
            <AgesInDb/>
            <Chart/>

        </div>
    )
}

export default ContentRowCenter;