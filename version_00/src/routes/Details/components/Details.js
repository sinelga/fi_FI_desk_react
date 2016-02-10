import React from 'react'
import {Button,Thumbnail,Grid,Image,Label  } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta'
import Chat from './Chat'

class Details extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	data: [],
	    	timerHandler: ''
	    	   	
	    }
	    this.handleToggleDetailsChat=this.handleToggleDetailsChat.bind(this)
	  }
	

	
	loadajax(id) {

		let hostname = location.hostname
		
		if (hostname =='127.0.0.1') {
			hostname='www.test.com'
		}
		var request = new XMLHttpRequest();
		request.open('GET', 'http://'+hostname+':8000/api/'+id, true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    // Success!			  
		    var data = JSON.parse(request.responseText);
		    this.setState({data: data});
		    console.log("data",data)
		    
		  } else {
			  
			 console.log("not found equest.status ",equest.status) 
		    // We reached our target server, but it returned an error

		  }
		}.bind(this);

		request.onerror = function() {
		  // There was a connection error of some sort
		};

		request.send();
		
	}
	
	handleToggleDetailsChat(){

		var dnode = ReactDOM.findDOMNode(this.refs.chat).style.display
		
		if (dnode === 'none') {
			
			this.setState({timerHandler: 'on'})
			ReactDOM.findDOMNode(this.refs.chat).style.display =''
			ReactDOM.findDOMNode(this.refs.details).style.display ='none'	
			
		} else {
			this.setState({timerHandler: 'off'})
			ReactDOM.findDOMNode(this.refs.chat).style.display ='none'
			ReactDOM.findDOMNode(this.refs.details).style.display =''			
			
		}
		
	}
	
	handleReturn(){
		browserHistory.push('/')
		
	}
	
	componentWillMount(){
//		console.log("Willmount Details",this.props.params.id)
		
		this.loadajax(this.props.params.id);
		
		
	}	
	
	componentDidMount(){		
//		console.log("mount Details")
		ReactDOM.findDOMNode(this.refs.chat).style.display ='none'

				   
	}
	
	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details")

	}
	
	componentWillUpdate(prevProps) {
//		console.log("componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("componentDidUpdate")
					
 }
				
  render() {

	  var data = this.state.data
	  
	  const meta = {
		      title: data.Moto,
	}
	  
	  let hostname = location.hostname
		
		if (hostname =='127.0.0.1') {
			hostname='www.test.com'
		}
	  var imglink ="http://"+hostname+":8000/img/"+data.ImgId+"/"+data.Img_file_name+"/250/350"
	  
    return (
      <div>
      <DocumentMeta {...meta} />
		<Button onClick={this.handleReturn}  className="bigclose" bsStyle="danger" bsSize="large" active>Palata</Button>
		
      	<div ref='details'>
      
      		<Label bsStyle="danger" bsClass="mbigphone"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> {data.Phone}</Label>
      		
      		<div className="media "><div className="media-left "><Image className="media-object boxImageSmall" src={imglink}  thumbnail></Image></div><div className="media-body"><p className="detailsname">{data.Name} {this.state.data.Age}v </p><p>{data.City}</p><Button onClick={this.handleToggleDetailsChat} bsStyle="primary" bsSize="large" active>Chatti</Button></div></div>   
      	</div>
      	
      	<div ref='chat'>
       	
  			<Chat data={data} timerHandler={this.state.timerHandler} />
  			
      	</div>
  		<p className="transparent">{data.Description}</p>
  		   	
      </div>
    )
  }

}

module.exports = Details