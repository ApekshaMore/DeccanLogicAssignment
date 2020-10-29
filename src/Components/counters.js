import React from 'react';
import First from './first';

class Counters extends React.Component {
    state = { 
        counters: [
            { id: 1 , value:0 },
            { id: 2 , value:0 },
            { id: 3 , value:0 },
            { id: 4 , value:0 }
        ]
     };


     handleReset = () => {
         const counters = this.state.counters.map(c => {
            c.value=0;
            return c;
         });
         this.setState({counters});
     }
     handleDelete = (counterId) => {
        //  console.log("inhandle Delete event",counterId);
         const counters = this.state.counters.filter(c => c.id !== counterId);
         this.setState({counters});
     }

     handleIncrement= first =>{
       const counters =[...this.state.counters]
       const index = counters.indexOf(first);
       counters[index] = {...first}
       counters[index].value++;
       this.setState({counters});
     }

     handleDecrement = first => {
        const counters =[...this.state.counters]
        const index = counters.indexOf(first);
        counters[index] = {...first}
        if(counters[index].value >0){
        counters[index].value--;
        this.setState({counters});   }
        else{
            this.setState({counters}); 
        }
      }



    render() { 
        return (
        <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(first =>(
                 <First key={first.id} first={first} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} selected={true}/>
            ))}
        </div> 
        );

    }
}
 
export default Counters;