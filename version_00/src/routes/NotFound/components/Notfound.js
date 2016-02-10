import React from 'react'
import {Button} from 'react-bootstrap'
//import {Button,Thumbnail,Grid,Image,Label  } from 'react-bootstrap'
//import { Redirect } from 'react-router'
import { browserHistory } from 'react-router'
//import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
//import Chat from './Chat'

class Notfound extends React.Component {
	handleReturn(){
		browserHistory.push('/')
		
	}
	
	 render() {
		 
		  return (
				 <div>
				 <Button onClick={this.handleReturn}  className="bigclose" bsStyle="danger" bsSize="large" active>Palata</Button>
				 	Not Found
				 	
				 </div>
		)		  
	 }
}

module.exports = Notfound