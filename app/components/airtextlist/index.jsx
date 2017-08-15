import "./index.less"
class Airtextlist extends React.Component{
    render(){
        console.log(this.props.data)
        return (
                <li className="airtext-list">
                    <div className="center-box">
                        <div className="info">
                            <span>{this.props.dataename}</span>
                            <span>{this.props.data}</span>
                        </div>
                        <div className="info-title">{this.props.datacname}</div>
                    </div>
                </li>
        )
    }
}
export default Airtextlist;