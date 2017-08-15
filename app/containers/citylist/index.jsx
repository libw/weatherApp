import "./index.less";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Citylist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            citys:{
                beijing:"北京",
                shanghai:"上海",
                guangzhou:"广州",
                shenzhen:"深圳",
                wuhan:"武汉",
                chengdu:"成都",
                chongqing:"重庆",
                xian:"西安",
                nanjing:"南京",
                suzhou:"苏州",
                hangzhou:"杭州",
                qingdao:"青岛",
                jinan:"济南",
                fuzhou:"福州",
                xiamen:"厦门",
                zhengzhou:"郑州",
                changsha:"长沙",
                kunming:"昆明",
                guiyang:"贵阳",
                nanning:"南宁"
            },
            cityname:"/cityedit"
        }
    }
    render(){
        return (
            <div className="city-list">
                <div className="city-list-head">
                    <input type="text" defaultValue="搜索城市" autoFocus="true"/>
                </div>
                <div className="city-item-box">
                    <div className="title">热门城市</div>
                    <ul　className="city-item" onClick={this.getcity.bind(this)}>
                        {
                            Object.values(this.state.citys).map((v,i)=>{
                                return <li id={Object.keys(this.state.citys)[i]}  key={i}><Link to={this.state.cityname}>{v}</Link></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    getcity(e){
        var cityname = e.target.innerHTML;
        console.log(e.target.innerHTML)
        var data = this.getData();
        data.push({city:cityname,show:false});
        this.saveData(data);
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
}
export default Citylist;