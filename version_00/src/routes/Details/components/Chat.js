import React from 'react'
import ReactDOM from 'react-dom'
import Uuid from 'node-uuid'
import {Button,Image,Alert,Badge,Input,Label,Row,Col } from 'react-bootstrap'


var t;
var data;
var chatID
var request

class Chat extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	count: 0,
	    	ask:'',
	    	nextask: '',
	    	answer:''	
	    	   	
	    }

	    this.toggle=this.toggle.bind(this)
	    this.timerOn=this.timerOn.bind(this)
	    this.timerOff=this.timerOff.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
	    this.handleNextAskChange = this.handleNextAskChange.bind(this)

	  }
	loadajax(url) {

		let hostname = location.hostname
		
		if (hostname =='127.0.0.1') {
			hostname='www.test.com'
		}
		
		request = new XMLHttpRequest();
//		request.open('GET', 'http://www.paljaat.fi:8000/chat/'+url, true);
		request.open('GET', 'http://'+hostname+':8000/chat/'+url, true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    // Success!			  
		    var data = JSON.parse(request.responseText);
//		    this.setState({data: data});
		    this.setState({answer: data.answer});
		    
		  } else {
		    // We reached our target server, but it returned an error

		  }
		}.bind(this);

		request.onerror = function() {
		  // There was a connection error of some sort
		};

		request.send();
	}

	 timerOff(){
		 clearInterval(t);
		 t = 0;
		 this.setState({count:0})
		 
	 }	  
	 timerOn(){
		 
		 var self = this;
		 t =setInterval(function() {
//		console.log(self.state.answer)	
		self.setState({count: self.state.count + 1});
			
		}, 3500); 
		 		 
	 }	  
	  toggle(){

			  var elem = ReactDOM.findDOMNode(this.refs.label_typing);
			  if (elem.style.visibility ==='hidden'){
				  
				  elem.style.visibility =''
			  } else {
				  elem.style.visibility ='hidden'
				  
			  }
			  
		}
		  
		componentWillReceiveProps(nextProps){
//			console.log("Chat componentWillReceiveProps",nextProps)
						
			data = nextProps.data
			this.setState({ask:'Hei '+data.Name+'!'})
			
			if (nextProps.timerHandler ==='on'){
				ReactDOM.findDOMNode(this.refs.answer).style.display ='none'
				chatID =Uuid.v4()
				let url =chatID+'/'+data.Phone+'/'+encodeURIComponent(this.state.ask)
//				console.log(url)
				this.loadajax(encodeURIComponent(url))				
				this.timerOn()
				
			} else {
				console.log("STOP timeR")
				this.timerOff()

			}

		}
		
		componentWillUpdate(prevProps) {
//			console.log("Chat componentWillUpdate")
			
			 if (this.state.count > 7 ){
				 
				 ReactDOM.findDOMNode(this.refs.label_typing).style.visibility ='hidden';				
				 ReactDOM.findDOMNode(this.refs.answer).style.display =''
				 this.timerOff()
	 
				 
			 } else if (this.state.count !== 0 ) {
				 
				 this.toggle() 
			 }
			
		}
				
		componentDidUpdate(prevProps, prevState) {
			
//			console.log("Chat componentDidUpdate",prevState)
//			this.toggle()
									
	 } 
	
	componentWillMount(){
//		console.log("willmount Chat")
		this.setState({nextask: ''});
		this.setState({ask: ''});
	
	}	
		
	componentDidMount(){
//		console.log("didmount Chat")
		data = this.props.data
		this.setState({ask:'Hei '+data.Name+'!'})
		var elem = ReactDOM.findDOMNode(this.refs.answer);
		elem.style.display ='none'
				
	}
	
	componentWillUnmount(){
		
//		console.log("componentWillUnmount Chat",request)
//		request.abort()
		this. timerOff()
		
	}
		
	 handleSubmit(e) {
		 if (this.state.nextask.length > 0) {
			 e.preventDefault();
			 this.state.ask = this.state.nextask.trim()
			 this.state.nextask =''
			 ReactDOM.findDOMNode(this.refs.answer).style.display ='none'
			 this.timerOn()
			 let url =chatID+'/'+data.Phone+'/'+encodeURIComponent(this.state.ask)
			 this.loadajax(encodeURIComponent(url))
		 }
	 }
	
	 handleNextAskChange(e) {
		    this.setState({nextask: e.target.value});
	 }
	 
	 
	 render() {
		 let data = this.props.data

		 var status = 'odotta'
		 var answer = this.state.answer
		 var ask = this.state.ask
		 	 			 
		 if (this.state.count > 2) {
			 
			 status = 'delivered'
		 }
		 
		 if (this.state.count > 5 ){
			 
			 status = 'seen'
			 
		 }
		 
		 if (this.state.count > 7 ){
			 
			 status = 'typing'			 
		 }
		 
//		 var imglink = "http://www.paljaat.fi:8000/img/"+data.ImgId+"/"+data.Img_file_name+"/250/350"
		  let hostname = location.hostname
			
			if (hostname =='127.0.0.1') {
				hostname='www.test.com'
			}
		  var imglink ="http://"+hostname+":8000/img/"+data.ImgId+"/"+data.Img_file_name+"/250/350"
		 return (
		
			<div>
	 			<Row>
	 				<Col xs={6} md={4}>
					<Label bsStyle="danger" bsClass="mbigphone"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> {data.Phone}</Label>
										
					<Image className="media-object boxImageSmall" src={imglink}  thumbnail><p className='chatunderphoto'>{data.Name} {data.Age}v </p><p>{data.City}</p></Image>
	 					 				
	 				</Col>
	 				<Col xs={12} md={8} >
	 					<Badge ref='label_typing' >{status}</Badge>
	 					<Alert>{ask}</Alert>
					
	 					<div ref='answer'> 
	 						<Alert bsStyle="danger">{answer}</Alert>
	 						<form onSubmit={this.handleSubmit}>
	 							<Input type="text" label="------------" placeholder="Kysyä jotain!" value={this.state.nextask} onChange={this.handleNextAskChange}/>
	 						</form>
	 						<Button bsStyle="primary" onClick={this.handleSubmit}>Jatkaa</Button>	
	 					</div>
	 				
	 				
	 				</Col>
	 			</Row>
			
		

			</div>		 
		 )
	 }
	 	 
}

module.exports = Chat