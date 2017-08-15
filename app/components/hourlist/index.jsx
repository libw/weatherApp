import "./index.less";
class Hourlist extends React.Component{
    render(){

        return (
            <div className="hour-list">
                <div className="top">{this.props.data.date.substr(11)}</div>
                <div className="center"><img src={require(`../../static/images/${this.props.data.cond.code}.png`)} alt=""/></div>
                <div className="bottom">{this.props.data.tmp}°</div>
            </div>
        )
    }
}
export default Hourlist;