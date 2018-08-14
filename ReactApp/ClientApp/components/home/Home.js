import React,{Component} from 'react';

class Home extends Component{
    constructor(){
    super();
    this.state={value:"this is value notation displayed from home page."}
    }

    render()
    {
        return(
            <div>{this.state.value}</div>
        );
    }
}

export default Home;