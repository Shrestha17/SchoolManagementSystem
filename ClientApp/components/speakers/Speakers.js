import React,{Component} from 'react';
import axios from 'axios';

class Speakers extends Component{
    constructor()
    {
        super();
        this.state={
            appData:[],
            isLoading:true
        }
    }
   componentDidMount(){
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