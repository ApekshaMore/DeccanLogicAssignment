import React from 'react'

export class First extends React.Component{
    state = {
        value : this.props.first.value
        // values: ['val1','val2','val3','val4']

    }
    // styles={
    //     fontSize : 20,
    //     fontWeight :"bold"
    // }

    // handleChange(){
    //     // console.log(event.target.value)
    //     // this.setState({
    //     //     name:event.target.value
    //     // })
    //     // console.log("in fun"+this.state.name);

    // }
    // renderVal(){
    //     if( this.state.values.length === 0) return <p>there are no values present..!</p>;
    //     return  <ul>{this.state.values.map(val=> <li key={val}>{val}</li>)}</ul>;
    // }
    render(){

        return(
            // // <a style={{color:'green', textTransform:'capitalize'}}>hello</a>
            // <div>
            //     <input type="text" placeholder="NAme pls" onChange={this.handleChange}></input>
            // </div>
            <div>
                <span style={{fontSixe:10}} className={this.getBadgeClasses()}>{this.formatcount()}</span>
                <button className="btn btn-secondary btn-sm m-2" onClick={()=> this.props.onIncrement(this.props.first)}>Increment</button>
                <button className="btn btn-primary btn-sm m-2"   onClick={()=> this.props.onDecrement(this.props.first)}>Decrement</button>
                <button onClick={ () => this.props.onDelete(this.props.first.id)} className="btn btn-danger btn-sm m-2" >Delete</button>

            
                  {/* {this.state.values.length === 0 && 'Please add some values'}
                  {this.renderVal()} */}
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.first.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatcount(){
        return this.props.first.value === 0 ? "zero" : this.props.first.value;
    }
}

export default First; 



