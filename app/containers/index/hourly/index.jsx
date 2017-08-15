import Itemheader from "../../../components/itemheader";
import Hourlist from "../../../components/hourlist";
import "./index.less";
class Hourly extends React.Component{
    render(){
        return (
            <div className="hour-box">
                <Itemheader title="小时预报" day="今日" week="星期五"/>
                <div className="hour-list-box">
                    {
                        this.props.data.map((item,i)=>{
                            return <Hourlist data={item} key={i}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Hourly;