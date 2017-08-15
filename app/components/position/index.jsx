require("./index.less")
class Position extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div className="pos-box" onClick={this.showcity.bind(this)}>
                <div className="mask" style={{dispaly:this.props.md}}>{this.props.data.city}</div>
                <div className="position-auto">
                    <div className="left">
                        <div className="icon" ref="citynow"><img src={require(`../../static/images/${this.props.icon.now.cond.code}.png`)} alt=""/></div>
                        <div className="cityname" ref="citynow2">{this.props.data.city}</div>
                        <div className="citypos" ref="citypos">自动定位</div>
                    </div>
                    <div className="right">
                        <div className="pos-icon" ref="icon" style={{display:this.props.pid}}><img src={require(`../../static/images/pos.png`)} alt=""/></div>
                        <div className="pos-btn" ref="btn" style={{display:this.props.pbd}}>
                            <span className="circle" onClick={this.posCircle.bind(this)}></span>
                        </div>
                        <div className="crumbs" style={{display:this.props.cid}} onClick={this.showCity}>
                            <img src={require(`../../static/images/crumbs.png`)} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    showcity(e){
        var cityname = e.target.innerHTML;
        console.log(e.target.innerHTML)
        var data = this.getData();
        data.forEach(function (v, i) {
            if(v.city == cityname){
                v.show = true;
            }else {
                v.show = false;
            }
        })
        this.saveData(data);
        location.href = "/";
        console.log(data)
    }
    getData (str) {
        if(localStorage.event){
            // localStorage.event字符串  转化为  [{},{},{}]
            return JSON.parse(localStorage.event)
        }else {
            return [];
        }
    }
    saveData(data) {
        localStorage.event=JSON.stringify(data);
    }
    posCircle(e){
        if(e.target.style.right=="0px"||e.target.style.right==0){
            e.target.style.right="0.36rem";
            this.refs.btn.style.background="#bbb";
            this.refs.icon.style.left="0.7rem";
            this.refs.citynow.style.display="none";
            this.refs.citynow2.style.display="none";
            this.refs.citypos.style.display="block"
        }else{
            e.target.style.right="0px";
            this.refs.btn.style.background="";
            this.refs.icon.style.right="1.2rem";
            this.refs.icon.style.left="";
            this.refs.citynow.style.display="block";
            this.refs.citynow2.style.display="block";
            this.refs.citypos.style.display="none"
        }
        console.log(this.refs.citynow.style)
    }
}
export default Position;