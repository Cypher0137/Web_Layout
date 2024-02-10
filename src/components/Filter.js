import React from 'react';
import './Filter.css';
const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;


    function filterclickHandler(title){
        setCategory(title)
    }
    
    return(
        <div className="filter" >
            {
                filterData.map( (data) => (
                    <button key={data.id} 
                     className='button' 
                    onClick={() => filterclickHandler(data.title)}
                    > {data.title} </button>
                ))
            }
        </div>
    )
}

export default Filter;