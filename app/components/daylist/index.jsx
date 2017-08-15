import "./index.less";
class Daylist extends React.Component{
    render(){
        var d = this.props.data;
        return (
            <div className="day-list">
                <div className="top">{d.date.substr(6,5)}</div>
                <div className="center"><img src={require(`../../static/images/${d.cond.code_d}.png`)} alt=""/></div>
                <div className="bottom">{d.cond.txt_d}</div>
            </div>
        )
    }
}
export default Daylist;