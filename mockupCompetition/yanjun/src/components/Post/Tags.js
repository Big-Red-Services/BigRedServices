import React, {Component} from "react";
import "./Tags.css";
class Tags extends Component {
    

    render(){
        const tag = this.props.tag
        const color = this.props.color

            
        const BlueTag = {
        backgroundColor: 'rgb(23, 172, 235)'
        }

        const GreenTag ={
        backgroundColor: 'greenyellow'
        }

        const RedTag= {
        backgroundColor: 'red'
        }

        if (color === 'blue'){
        return <article className = 'Tag' style = {BlueTag}>
            <span>{tag}</span>
        </article>
        }
        else if(color === 'green'){
            return <article className = 'Tag' style = {GreenTag}>
                <span>{tag}</span>
            </article>
        }
        else{
            return <article className = 'Tag' style = {RedTag}>
                <span>{tag}</span>
            </article>
        }
    }
}



export default Tags;