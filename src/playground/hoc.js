import React from 'react';
import ReactDOM from "react-dom";


const Message= (Props)=>(<div><p>This is a important information{}</p></div>);

const bodymaker=(Comp)=>{
    return (props)=>{
        return (<div><p>This is a body</p>
           <Comp /></div>);
    };
}

const Body=bodymaker(Message);


ReactDOM.render(<Body name="vasu" />, document.querySelector("#app"));

