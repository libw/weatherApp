import "./index.less"
import Airinfoimg from "../../../components/airinfoimg";
import Airtext from "./airtext";
import Itemheader from "../../../components/itemheader";
class Air extends React.Component{
    render(){
        console.log(this.props.data.city)
        return (
            <div className="air-box">
                <Itemheader title="空气质量" week={this.props.data.city.qlty+"·"+this.props.data.city.aqi}/>
                <Airinfoimg data={this.props.data.city} />
                <Airtext data={this.props.data.city}/>
            </div>
        )
    }
}
export default Air;

