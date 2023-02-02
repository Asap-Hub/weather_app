import axios from "axios";
import { useEffect, useState } from "react";

function Main() {
    const [result, setData] = useState();

     const getdata = async () => {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=ghana&appid=3f4686adb6e7bdc7d83251a2f09959bd");
            setData(response.data);
           console.log(response.data);
           
     }
       
     useEffect(()=>{
        getdata();
     },[])

  return ( 
     
        <div className="main-div" >
          <div className="header-div">
            <h2 id="header-text"> 
            <span id="red">Ghana </span>
            <span id="yellow">weather </span>
            <span id="green">Forecast</span>
            </h2>
 
          </div>
           
           {/* searching input and search button */}
          <div className = "input-search-div">
                <div>
                <input placeholder="enter city name "  id="input"></input>
                </div>

                <div >
                <button type="submit" id="search"> search </button>
                </div>
          </div>

          <div className="content">
            <p>{result && result['weather'][0]['description']}</p>
          </div>
        </div>
     
  );
}
export default Main;
