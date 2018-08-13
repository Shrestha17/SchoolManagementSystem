import React,{Component} from 'react';

class Footer extends Component{
    constructor(){
        super();
        this.state={footer:"this is footer part..."};
    }

    render(){
        return(
            <div>{this.state.footer}</div>
        )
    }
}

export default Footer;