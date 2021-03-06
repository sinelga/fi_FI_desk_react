import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,ListGroup,ListGroupItem} from 'react-bootstrap'
import SelectedObj from './SelectedObj'


class ObjList extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    		data: []
	    	
	    }
	    this.loadajax = this.loadajax.bind(this)   
	}
		
	loadajax() {

		var hostname = location.hostname
		
		if (hostname =='127.0.0.1') {
			hostname='www.test.com'
		}
		
		var request = new XMLHttpRequest();
		request.open('GET', 'http://'+hostname+':8000/api', true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    // Success!			  
		    var data = JSON.parse(request.responseText);
		    this.setState({data: data});
		    
		  } else {
		    // We reached our target server, but it returned an error

		  }
		}.bind(this);

		request.onerror = function() {
		  // There was a connection error of some sort
		};

		request.send();
		
	}
	
	componentDidMount(){
		
		this.loadajax()
				   
	}
		
	 render() {

		var rentobjs = this.state.data;
		var images = [];
		var hostname = location.hostname
		if (hostname =='127.0.0.1') {
			hostname='www.test.com'
		}
		 				
		 for  (var i = 0; i <  rentobjs.length; i++) {
			
			 var space = ' ';
			 var arrayOfStrings = rentobjs[i].Moto.split(space);
			 var permlink = "/" +rentobjs[i].Id+"/"+arrayOfStrings[0]+'_'+arrayOfStrings[1]+'.html'

			 images.push(<Link key={`${i}`} to={permlink}><div className="media "><div className="media-left "><Image className="media-object boxImageSmall" src={`http://${hostname}:8000/img/${rentobjs[i].ImgId}/${rentobjs[i].Img_file_name}/100/150`} thumbnail></Image></div><div className="media-body"><p className='phone'>{rentobjs[i].Phone}</p><p>{rentobjs[i].Name}</p><p>{rentobjs[i].City}</p></div></div></Link>)
			 
		 }
		
		 return (
		    
				 <div>
				 					 		
				 		<Row>
				 			<Col xs={6} md={4}>{images}</Col>
				 			<Col xs={12} md={8} ><SelectedObj data={rentobjs} /></Col>
				 		</Row>
				 						 						 	
		    	  </div> 
		    			    
		 )
	 	
	 }
		 
	 }	
	 
module.exports = ObjList