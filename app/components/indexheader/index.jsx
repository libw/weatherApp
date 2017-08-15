require("./index.less")
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Indexheader extends React.Component{
    render(){
        return (
            <header className="indexhead" ref="indexHeader">
                <div className="right"><Link to="/">{this.props.left}</Link></div>
                <div className="top-city">{this.props.center}</div>
                <div className="top-btn"><Link to={this.props.link}>{this.props.right}</Link></div>
            </header>
        )
    }
   componentDidMount(){
       var ele = ReactDOM.findDOMNode(this.refs.indexHeader);
       window.onscroll = function() {
           var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
               if(scrollTop>80){
                   ele.style.background = "#0f3043";
                   ele.style.color = "#fff"
               }else {
                   ele.style.background = "";
                   ele.style.color = ""
                   ele.style.borderBottom ="";
           }
       }
   }
}
export default Indexheader;