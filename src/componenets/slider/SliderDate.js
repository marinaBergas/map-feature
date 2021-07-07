import React, { useEffect, useState } from 'react'
import Slider from './Slider';


const SliderDate = ({match}) => {
    const [currentSchools, setCurrentschools] = useState(null);

 
    const fetchData = async() =>{
        try {
        const res = await fetch("https://www.scholarhood.ca/dev-test.json") ;
        const data = await res.json();
            if(data){
              setCurrentschools(data)
            }
        }catch(error) {
            console.log(error);
          }
      }
   useEffect(() => {
    fetchData();
   }, [])
   

    return (
        <>
        <div className="row App__schoolSection__card-container__card-row justify-content-center text-center" >
            {currentSchools&&<Slider data={currentSchools}/>}
        </div>
         </>
    )
}

export default SliderDate
