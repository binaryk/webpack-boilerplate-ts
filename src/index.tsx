import * as React from "react";
import * as ReactDOM from "react-dom";


class Cat extends React.Component<any, any>{
    constructor(){
        super();
    }


    render(){
        return <div>
            Hi from react component.
        </div>
    }
}

const mountNode = document.querySelector('#app');

ReactDOM.render(
    <Cat/>,
    mountNode
);