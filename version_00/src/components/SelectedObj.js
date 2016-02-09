import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col} from 'react-bootstrap'


class SelectedObj extends React.Component {
	


  render() {
		var hostname = location.hostname
		if (hostname =='127.0.0.1') {
			hostname='www.test.com'
		}
	
		var selected = {
				Age:0,
				City:"",
				Created_at:"",
				Description:"",
				Id:"",
				ImgId:0,
				Img_file_name:"",
				Moto:"",
				Name:"",
				Phone:"",
				Region:"",
				Sex:""
		
		}
	 

	var  dataobj= this.props.data[this.props.data.length-1]
	 	 	 
	 for (var property in dataobj) {
		    		    
		    if (property === "Id") {
		    	selected.Id  = dataobj[property]
		    	
		    }
		    if (property === "Name") {		    
		    	selected.Name = dataobj[property]
		    }
		    if (property === "Age") {		    
		    	selected.Age = dataobj[property]
		    }
		    if (property === "Img_file_name") {		    
		    	selected.Img_file_name = dataobj[property]
		    }
		    if (property === "ImgId") {		    
		    	selected.ImgId = dataobj[property]
		    }
		    if (property === "City") {		    
		    	selected.City = dataobj[property]
		    }
		    if (property === "Description") {		    
		    	selected.Description= dataobj[property]
		    }
		    if (property === "Phone") {		    
		    	selected.Phone= dataobj[property]
		    }
		    if (property === "Moto") {		    
		    	selected.Moto= dataobj[property]
		    }	 
	 }
		 
		 var space = ' ';
		 var arrayOfStrings = selected.Moto.split(space);
		 var permlink = "/" +selected.Id+"/"+arrayOfStrings[0]+'_'+arrayOfStrings[1]+'.html'
		 var imglink ="http://"+hostname+":8000/img/"+selected.ImgId+"/"+selected.Img_file_name+"/250/350"

//	 <Image className="boxImageSmall" src={`http://${hostname}:8000/img/${selected.ImgId}/${selected.Img_file_name}/250/350`} thumbnail></Image>
    return (
      <div>
      <p className="mbigphone">{selected.Phone}</p>
    
      <Link  to={permlink}><Image className="boxImageSmall"  src={imglink} thumbnail></Image></Link>
      
       		    	  
    	  <p className="transparent">{selected.Description}</p>
    	  
       </div>
    )
  }
}

export default SelectedObj