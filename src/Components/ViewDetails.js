import React, { useEffect, useState } from 'react'
import '../Styles/viewdeatls.css'
import axios from 'axios';
import HideDetails from './HideDetails';
import { Link, useParams } from 'react-router-dom';
import {BsChevronLeft,BsChevronRight} from  'react-icons/bs'
import Footer from './Footer';
  
const ViewDetails = () => {
    const {id}=useParams()


    const [showDetails, setShowDetails] = useState(false);
    // This hook used to toggle View or Hide   


    const [selectedIndex, setSelectedIndex] = useState(null);
    // this hook used to select different index to access unique data in term of unique index 
    const[details,setDetails]=useState([])
    // This hook used to store data from api 
    const [currentPage, setCurrentPage] = useState(1);
    // This hook used to change pages 


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
         console.log(response.data) 
         setDetails(response.data)
         
        }).catch(err=>{
          console.log(err)
        })
        },[])
        const handlehide=((index)=>{
            setShowDetails(!showDetails)
            setSelectedIndex(index)


        })
        // This function perform select unique data for hidden box  
        const totalPages = 4
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
        const itemsPerPage = 3;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = details.slice(startIndex, endIndex);
        
        
   

  return (
    <div>
    {pageData && pageData.map((data,index)=>(
    <div>
    
       <div className="box" key={index}>
        
  <div className="box-title">Username<div className='data-name'><b >{data.username}</b></div></div>
  <div className="box-contact ">Contact<div className='data '>{data.name}</div></div>
  <div className="box-location">
    <div className="box-city ">City<div className='data'>{data.address.city}</div></div>
    <div className="box-state ">State<div className='data '>{data.address.street}</div></div>
  </div>
  <Link to={`/${data.id}`}><div className="box-button" onClick={() => handlehide(index)}>  {selectedIndex===index && showDetails ? 'Hide Details' : 'View Details'}</div></Link> 
</div>   
 {/* set every button act differently by using link with the response.id choose for select unique data    */}
{/* when selectindex match with index and toggle of hide and view  it can show or hide the hidden  box with unique data */}
  {/* the box with output from json data  */}
  
  {selectedIndex===index && showDetails && (
    <HideDetails phone={data.phone} name={data.name} city={data.address.city} country={data.address.street} description={data.company.bs}  email={data.email}  designation={data.company.catchPhrase} suite={data.address.suite}/>
  )}




















    </div>
))}
  <Footer setCurrentPage={setCurrentPage}  pageNumbers={pageNumbers} currentPage={currentPage}  />
  
</div>

)
}

export default ViewDetails
