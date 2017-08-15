import "./index.less"
class Lifelist extends React.Component{
    render(){
        var d = this.props.data;
        var jian = this.props.jian;
        return (
            <li className="life-list-item">
                <div className="icon"><img src={require(`../../static/images/${this.props.jian}.png`)} alt=""/></div>
                <div className="info">
                    <div className="center-box">
                        <div className="info-title">
                            <span>{d[jian].brf}</span>
                            <span>{this.props.cnname[jian]}</span>
                        </div>
                        <div className="info-sug">{this.props.data.comf.txt}</div>
                    </div>
                </div>
            </li>
        )
    }
}
export default Lifelist;