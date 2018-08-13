import React,{Component} from 'react';
import axios from 'axios';
///import { connect } from 'tls';

import {connect} from 'react-redux';
import {speakersFetchData} from '../../../redux/actions/speakers';



class Speakers extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            appData:[],
            isLoading:true
        }
    }
   componentDidMount(){
//this.props.speakersFetchData();

       axios.get('/data/speakers.json')
       .then(result=>{
         this.setState({
             appData:result.data,
             isLoading:false
         })
       })
    .catch(error=>{
        if(error.response){
            console.log(error.responderEnd);
        }
    })    
};


    render()
    {
        if(this.state.isLoading==true)
        {
        return <span><i>Loading...</i></span>
        }
        else{
        return(
<table>
    <thead>
<tr>   
<th>Id</th>
<th>FirstName</th>
<th>LastName</th>
    </tr>
        </thead>
        <tbody>
            {this.state.appData.map(ad=>
            <tr key={ad.id}>
            <td>{ad.id}</td>
            <td>{ad.fName}</td>
            <td>{ad.lName}</td>
            </tr>            
            )}
            </tbody>
    </table>

            // <div> 
                
            //     <span>{JSON.stringify(this.state.appData)}</span>
            // </div>
        )
    }
}
}

export default Speakers;


// const mapStateToProps=(state)=>{
//     return{
//         speakers:state.speakers.data,
//         hasErrored:state.speakers.hasErrored,
//         isLoading:state.speakers.isLoading,
//         errorMessage:state.speakers.errorMessage
//     };
// };

// export default connect(mapStateToProps,
//     {speakersFetchData})(Speakers)