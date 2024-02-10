import React, { useEffect , useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { filterData, apiUrl } from './data';


const App = () => {
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);


  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data);
    }
    catch{
      toast.error("Error");
    }
    setLoading(false);
  }

  useEffect( () =>{
    fetchData();
  },[]);

  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
      </div>
      <div className='all_data'>
        <div>
          <Filter 
          filterData={filterData}
          category = {category}
          setCategory = {setCategory}
          ></Filter>
        </div>
        <div className="Cards">
          {loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />) }
        </div>
      </div>
      <ToastContainer/>
      
    </div>
    
  );
}

export default App;
