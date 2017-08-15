import "./index.less"
import Daylist from "../../../components/daylist";
class Day extends React.Component{
    render(){
        return (
            <div className="day-box">
                <div className="day-list-box">
                    {
                        this.props.data.daily_forecast.map((item,i)=>{
                           return <Daylist data={item} key={i}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Day;