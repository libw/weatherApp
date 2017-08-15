require("./index.less");
class Now extends React.Component{
    render(){
        var now = this.props.data;
        var wd = this.props.wd;
          return (
              <div className="now">
                  <div className="inner">
                      <div className="item">{now&&now.tmp}<span></span></div>
                      <div className="item">
                          <div className="icon"><img src={require(`../../../static/images/${(now&&now.cond&&now.cond.code||100)}.png`)} alt=""/></div>
                           <div className="status">{now&&now.cond&&now.cond.txt}</div>
                          <div className="tmp">{wd&&wd.min}°~{wd&&wd.max}°</div>
                      </div>
                  </div>
              </div>
          )
    }

}
export default Now;