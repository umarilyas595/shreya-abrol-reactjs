import { React, useState, useEffect } from 'react';
import Movies from './Movies.json';
import Star from './images/Star-filled.svg';
import Starempty from './images/Star-empty.svg';
import Starhalf from './images/Star-half.svg';
import uparrow from './images/up-arrow.svg';
import downarrow from './images/down-arrow.svg';
import Categories from './Categories';



function App() {

  const [Movies_list, setMovies_list] = useState([]);
  const [Movies_array, setMovies_array] = useState(Movies);

  const [expanded,setexpanded] =useState();
  const[arrowclass,setarrowclass]=useState(false)
  const[arrow,setarrow]=useState(false)
  const[arrowimage,setarrowimage]=useState(downarrow)
  const[arrowimage_rating,setarrowimage_rating]=useState(downarrow)
  
  const[CategoryValue,setCategoryValue]=useState("Any genre");
  const [items] =useState(Categories);

  useEffect(() => {

  })

  const showCheckboxes=(event)=>{

     if(arrowclass==true){
      setarrowimage(downarrow);
      setarrowclass(false)
     }else{
      setarrowimage(uparrow);
      setarrowclass(true)
     }

     var checkboxes = document.getElementById("checkboxes_1");
     if (!expanded) {
         checkboxes.style.display = "block";
         setexpanded(true);
     } else {
         checkboxes.style.display = "none";
         setexpanded(false);
     }
     
  }



  
  const getCategoryValue=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setCategoryValue(value);
    setMovies_list(
      Movies_array.filter(data => (name == "anygenre" ? data.category.search(value) != -1 : data.category.search(value) != -1)));
   }

const showCheckboxes_=(event)=>{
  if(arrow==true){
    setarrowimage_rating(downarrow);
   setarrow(false)
   }else{
    setarrowimage_rating(uparrow);
    setarrow(true)
   }

   var checkboxes = document.getElementById("checkboxes");
   if (!expanded) {
       checkboxes.style.display = "block";
       setexpanded(true);
   } else {
       checkboxes.style.display = "none";
       setexpanded(false);
   }
  

}

const getRatingStars=(event)=>{
  const name = event.target.name;
  const value=event.target.value
  setMovies_list(
    Movies_array.filter(data => (name == "anygenre" ? data.rating.search(value) != -1 : data.rating.search(value) != -1))
  );
 
  
}
  const SearchOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMovies_list(
      Movies_array.filter(data => (name == "anygenre" ? data.category.search(value) != -1 : data.category.search(value) != -1))
    );
  };

  const SearchOnBlur = (event) => {
    const value = event.target.value;
    setMovies_list(Movies_array.filter(data => (data.title.search(value) != -1)));
  };

  const rating = (x,y) => {
    const total_stars = [];
   
        Array.apply(null, new Array(x)).map((index)=> {
          total_stars.push(<img src={Star}  key={index} alt=""></img>);
        })


        Array.apply(null, new Array(y)).map((index)=> {
          total_stars.push(<img src={Starempty} key={index} alt=""></img>);
        })

        return total_stars;
  }
 
  const stars = (rating) => {
    const total_stars = [];
    switch (rating) {
      case "7.5":

        Array.apply(null, new Array(7)).map((index)=> {
          total_stars.push(<img src={Star} key={index} alt=""></img>);
        })

        total_stars.push(<img src={Starhalf} key='8' alt=""></img>);

        Array.apply(null, new Array(2)).map((index)=> {
          total_stars.push(<img src={Starempty} key={index} alt=""></img>);
        })

        return total_stars;

      case "6.9":

        Array.apply(null, new Array(7)).map( (index)=> {
          total_stars.push(<img src={Star} key={index} alt=""></img>);
        })

        Array.apply(null, new Array(3)).map((index)=> {
          total_stars.push(<img src={Starempty} key={index} alt=""></img>);
        })

        return total_stars;

      case "6.4":

        Array.apply(null, new Array(6)).map((index)=>{
          total_stars.push(<img src={Star} key={index} alt=""></img>);
        })

        Array.apply(null, new Array(4)).map((index)=> {
          total_stars.push(<img src={Starempty} key={index} alt=""></img>);
        })

        return total_stars;

      case "5.0":

        Array.apply(null, new Array(5)).map((index)=> {
          total_stars.push(<img src={Star} key={index} alt=""></img>);
        })

        Array.apply(null, new Array(5)).map((index)=> {
          total_stars.push(<img src={Starempty} key={index} alt=""></img>);
        })

        return total_stars;

        break;
    }


  }


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col col-md-8">
          <input type="text" className="form-control serach-box grid_font" placeholder="Search Movie" name="serach" id="search" onBlur={SearchOnBlur} onChange={SearchOnChange}>
          </input>
        </div>
        <div className="col col-md-2">

        <div className="dropdown" id="valueItemDrop">
           <label className="form-control dropdown-box grid_font"  onClick={showCheckboxes_}>
            Rating <img src={arrowimage_rating} className="arrowclass" alt=""/>
           </label>
           <div></div>
          
           <ul className="dropdown-menu box_class" aria-labelledby="dLabel" id="checkboxes">
           
               <li className="checkbox form-group">
                   <input type="checkbox" 
                   className="check_class" value="1"  onChange={getRatingStars} />
                    Any
               </li>
              
               <li className="checkbox form-group">
                   <input type="checkbox"  className="check_class" value="1"  onChange={getRatingStars} />
               {rating(1,9)}
               </li>
               <li className="checkbox form-group">
                   <input type="checkbox"  className="check_class"  value="2" onChange={getRatingStars}/>
               {rating(2,8)}
               </li>
               <li className="checkbox form-group">
                   <input type="checkbox"  className="check_class" value="3"  onChange={getRatingStars} />
               {rating(3,7)}
               </li>
   
               <li className="checkbox form-group">
                   <input type="checkbox"  className="check_class"  value="4" onChange={getRatingStars} />
               {rating(4,6)}
               </li>
               <li className="checkbox form-group">
                   <input type="checkbox"  className="check_class"   value="5" onChange={getRatingStars} />
               {rating(5,5)}
               </li>
   
               <li className="checkbox form-group">
                   <input type="checkbox"  className="check_class"  value="6" onChange={getRatingStars}/>
               {rating(6,4)}
               
               </li>
               <li className="checkbox form-group">
                   <input type="checkbox"  className="check_class"   value="7" onChange={getRatingStars} />
               {rating(7,3)}
               </li>
   
               <li className="checkbox form-group">
                   <input type="checkbox" className="check_class"  value="8"  onChange={getRatingStars} />
               {rating(8,2)}
               </li>
   
               <li className="checkbox form-group">
                   <input type="checkbox"  className="check_class"  value="9" onChange={getRatingStars} />
               {rating(9,1)}
               </li>
           </ul>
       </div>

        </div>
        <div className="col col-md-2">
         
            <div className="dropdown" id="valueItemDrop">
            <label className="form-control dropdown-box grid_font"  onClick={showCheckboxes}>
            {CategoryValue}  <img src={arrowimage} className="arrowclass" alt=""/>
            </label>
            <div></div>
          
            <ul className="dropdown-menu" aria-labelledby="dLabel" id="checkboxes_1" style={{margin: ".5rem",padding: ".5rem"}}>
            {items.map((value, key) => (
            <li className="checkbox form-group" key={key.toString()}>
                    <input type="checkbox" className="check_class"  key={key.toString()}
                      value={value.value} onClick={getCategoryValue}/>
                    {value.label}
                </li>
            ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="row mt-5">
        <div className="col col-md-8">
          <table style={{ width: '100%' }}>
            <thead></thead>
            <tbody>
              {Movies_list.map((value, key) => (
                <tr key={key.toString()}>
                  <td style={{ float: 'left' }} className="grid_font">
                    {value.title}
                    <br></br>
                    {stars(value.rating)}
                  </td>
                  <td style={{ float: 'right' }} className="grid_font">{value.category}</td>
                </tr>
              ))}

            </tbody>
          </table>




        </div>
        <div className="col col-md-4"></div>
      </div>
    </div>
  )
}

export default App;