import "./index.less"
import Airtextlist from "../../../../components/airtextlist"
class Airtext extends React.Component{
    render(){
        var arr = ["入肺颗粒物","可吸入颗粒物","二氧化硫","二氧化氮","臭氧","一氧化碳"];
        var arr1 = ["PM2.5","PM10","SO2","NO2","O3","CO"];
        return (
            <div className="airtext-bottom">
                <ul className="item item1">
                    <Airtextlist data={this.props.data.pm25} datacname={arr[0]} dataename={arr1[0]} />
                    <Airtextlist data={this.props.data.pm10} datacname={arr[1]} dataename={arr1[1]} />
                    <Airtextlist data={this.props.data.so2} datacname={arr[2]} dataename={arr1[2]} />
                    <Airtextlist data={this.props.data.no2} datacname={arr[3]} dataename={arr1[3]} />
                    <Airtextlist data={this.props.data.o3} datacname={arr[4]} dataename={arr1[4]} />
                    <Airtextlist data={this.props.data.co} datacname={arr[5]} dataename={arr1[5]} />
                </ul>
            </div>
        )
    }
}
export default Airtext;