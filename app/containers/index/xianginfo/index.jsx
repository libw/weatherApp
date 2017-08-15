import Itemheader from "../../../components/itemheader";
import "./index.less";
class Xianginfo extends React.Component{
    render(){
        var now = this.props.data.now;
        return (
            <div className="information">
                <Itemheader title="详细信息" day="" week=""/>
                <div className="content">
                    <div className="left"><img src={require(`../../../static/images/${now.cond.code}.png`)} alt=""/></div>
                    <ul className="right">
                        <li>
                            <span>今日预报</span>
                            <span>{now.cond.txt}</span>
                        </li>
                        <li>
                            <span>体感温度</span>
                            <span>{now.fl}</span>
                        </li>
                        <li>
                            <span>空气湿度</span>
                            <span>{now.hum}%</span>
                        </li>
                        <li>
                            <span>风向风力</span>
                            <span>{now.wind.dir+now.wind.sc}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Xianginfo;