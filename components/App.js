

import React from "react";  // we need it for JSX 

export function App() {
    const firstName = "Monkey"
    const lastName = "Type"
    const now = new Date();

    let message;

    if (now.getHours()> 12) message =`It's afternoon!`
    else  message =`It's before noon!`



    return (
    <div>
        <h1>Hello {firstName}</h1>
        <h2>{ message }</h2>
    </div>
            
    )
} 


{/* <div className="maindiv" style={style}>
<h1 className="todo-titleh1">TO-DO LIST</h1>
<ul className="todo-ul">
    <li className="todo-li"><input type="checkbox" className="checkbox"/>Take out the trash</li>
    <li className="todo-li"><input type="checkbox" className="checkbox"/>Learn React</li>
    <li className="todo-li"><input type="checkbox" className="checkbox"/>Refresh ES6</li>
    <li className="todo-li"><input type="checkbox" className="checkbox"/>Buy food</li>
</ul>
<p> {hours>12? 'afternoon': 'beforenoon'}</p>
<p>Time: {hours}:{mins}</p>
</div> */}