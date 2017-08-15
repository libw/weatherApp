import "./index.less"
class Airinfoimg extends React.Component{
    render(){
        return (
            <div className="air-img">
                <div className="top">
                    <div className="center-box">
                        <div className="sj"><img ref="sjx" src={require("../../static/images/sj.png")} alt=""/></div>
                        <ul className="color-block">
                            <li>优</li>
                            <li>良</li>
                            <li>轻度</li>
                            <li>中度</li>
                            <li>重度</li>
                            <li>严重</li>
                        </ul>
                        <div className="num">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                            <span>150</span>
                            <span>200</span>
                            <span>300</span>
                            <span>500</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var sj = ReactDOM.findDOMNode(this.refs.sjx);
        var left = (this.props.data.aqi/500)*100+"%";
        sj.style.marginLeft = left;
    }
}
export default Airinfoimg;