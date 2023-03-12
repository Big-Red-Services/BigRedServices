import React, {Component} from "react";
import "./Post.css";
import Tags from "./Tags";
import "./Tags.css"
class Post extends Component {

    renderpaid(paid){
        if (paid === 'true') {return <span>paid - </span>}
        else{return <span>unpaid - </span>}
    }

    render(){
        const postHeader = {
            width: '450px', 
            height: '30px',
        };

        const monetaryHeader = {
            marginLeft: '10px',
            float: 'left',
            fontSize: '12px'
        }

        const timeHeader = {
            float: 'left',
            fontSize: '12px'
        }

        const expirationHeader = {
            float: 'right',
            fontSize: '12px',
            marginRight: "10px"
        }

        const discriptionHeader = {
            marginLeft: '10px',
            float: 'left',
            fontSize: '12px',
            width: '400px',
            textAlign: 'left'
        }

        const paid = this.props.paid;
        const time = this.props.time;
        const expiration = this.props.expiration;
        const description = this.props.description;

        return <article className="Post" ref = "Post">
            <header>
                <div style = {postHeader}>
                    <div className="Post-monetary-status" style = {monetaryHeader}>
                        {this.renderpaid(paid)}
                    </div>
                    <div className="Post-time-status" style = {timeHeader}>
                        <span>{time} hour</span>
                    </div>
                    <div className="Post-expiration-status" style = {expirationHeader}>
                        <span>Expires in {expiration} days</span>
                    </div>
                </div>
            </header>
            <body>
                <div className="Post-Job-Description" style = {discriptionHeader}>
                    <span> {description} </span>
                </div>
            </body>

            <body>
                <div className = 'TagLine' style = {discriptionHeader}>
                    <div><Tags tag={this.props.tag} color='green'></Tags></div>
                    <div><Tags tag = {this.props.tag2} color ='red'></Tags></div>
                </div>
                <div className="Payment">${this.props.payment}</div>
            </body>

            <body>
                
            </body>

        </article>
        
    }
}

export default Post;