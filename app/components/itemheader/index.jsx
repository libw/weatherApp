import "./index.less"
class Itemheader extends React.Component{
    render(){
        return (
            <div className="item-header">
                <div className="inner">
                    <div>{this.props.title}</div>
                    <div className="right">
                        <span>{this.props.day}</span>
                        <span>{this.props.week}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Itemheader;