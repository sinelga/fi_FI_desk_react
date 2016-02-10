import React from 'react'
import ObjList from './ObjList'
import {Grid} from 'react-bootstrap'
import DocumentMeta from 'react-document-meta'


class App extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
	    		data: []
	    	
	    }
	    
	  }
			
	componentWillUpdate(){
		
//		console.log("componentWillUpdate App ")
//		global.OPERATORS_OBJS =this.state.data;
	}
	
	componentDidMount(){
		
//		console.log("mount App ")
				   
	}
	componentWillReceiveProps(){
//		console.log("App  receive props")
//		console.log(this.props)
	}
	
	
  render() {
	  
	  const meta = {
		      title: 'Sex Pillu',
		      }
	  	  
    return (
      <div>
      <DocumentMeta {...meta} />	 
      <Grid>
      	{this.props.children || <ObjList />} 
     </Grid>   
     </div>
    )
  }
}

module.exports = App
