require("./index.less")
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from "../index/jquery";
import Indexheader from "../../components/indexheader";
import Position from "../../components/position";
class Citylist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            citylist:[],
            data:[],
        }
        this.getApi = this.getApi.bind(this);
    }
    render(){
        console.log(this.state.data)
        return (
            <div className="city-bg">
               <div className="city-edit">
                   <Indexheader left="<" center="城市管理" right="+" link="/citylist"/>
                   <Position  data={{city:"xian"}} icon={this.state.data[0]} wd={0} pid="block" pbd="block" cid="none" md="none"/>
                   {
                       this.state.citylist.map((v,i)=>{
                           return <Position  key={i} md="block" pid="none" pbd="none" cid="block" data={v} icon={this.state.data[i]}/>
                       })
                   }
                   <div className="add-city"><Link to="/citylist">添加城市</Link></div>
               </div>
            </div>
        )
    }
    componentWillMount(){
        var data = this.getData();
        var that = this;
        this.setState ({
            citylist:data
        })
        data.forEach(function (v, i) {
            that.getApi(v.city)
        })
    }
    getData (str) {
        if(localStorage.event){
            // localStorage.event字符串  转化为  [{},{},{}]
            return JSON.parse(localStorage.event)
        }else {
            return [];
        }
    }
    getApi (city) {
        var that = this
        $.ajax({
            type: "get",
            url: `https://free-api.heweather.com/v5/weather?city=${city}&key=e53fc942fd424f3ba52a8e5ecc4b721c`,
            cache:false,
            async:false,
            success: function(data){
                var arr = that.state.data;
                arr.push(data.HeWeather5[0]);
                that.setState ({
                    data:arr
                })
            }
        });
    }
}
export default Citylist;