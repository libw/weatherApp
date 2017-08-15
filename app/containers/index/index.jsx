import Indexheader from "../../components/indexheader"
import Indexfooter from "../../components/indexfooter"
import Now from "./now";
import Hourly from "./hourly";
import "./index.less";
import Day from "./day";
import Xianginfo from "./xianginfo";
import Air from "./air";
import Life from "./life";
import $ from "./jquery";
class Index extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           data:"",
           daily:"",
           hourly:"",
           air:"",
           life:"",
           wd:"",
           city:"西安"
       }
   }
    render(){
        console.log("65465"+this.state.city)
        return (
            <div className="one-contain">
                <Indexheader left="<" center={this.state.city} right="+" link="/cityedit"/>
                  <div className="content-box">
                      <Now data={this.state.data.now} wd={this.state.wd}/>
                      <Hourly data={this.state.hourly} />
                      <Day data={this.state.data}/>
                      <Xianginfo data={this.state.data}/>
                      <Air data={this.state.air}/>
                      <Life data={this.state.life} />
                  </div>
                <Indexfooter/>
            </div>
        )
    }
    componentWillMount(){
        var that = this;
        var data = this.getData();
        var cityname = this.state.city;
        this.getApi(this.state.city,that);
        console.log(data)
        if(data==""){
            data.push({city:cityname,show:true});
            that.saveData(data);
        }
        data.forEach(function (v, i) {
            console.log(v.city)
            if(cityname!=v.city){
                data.push({city:cityname,show:true});
                that.saveData(data);
            }
            if(v.show){
                console.log("vvvv"+v.show)
                if(v.city=="西安"){
                    $.ajax({
                        type: "get",
                        url: `https://free-api.heweather.com/v5/weather?city=${v.city}&key=1be55058fdc0488b901fdee44f4e65c9`,
                        cache:false,
                        async:false,
                        success: function(data){
                            console.log("woshi"+v.city)
                            that.setState({
                                data:data.HeWeather5[1],
                                daily:data.HeWeather5[1],
                                hourly:data.HeWeather5[1].hourly_forecast,
                                air:data.HeWeather5[1].aqi,
                                life:data.HeWeather5[1]['suggestion'],
                                wd:30,
                                city:v.city
                            })
                        }
                    });
                }else{
                    $.ajax({
                        type: "get",
                        url: `https://free-api.heweather.com/v5/weather?city=${v.city}&key=1be55058fdc0488b901fdee44f4e65c9`,
                        cache:false,
                        async:false,
                        success: function(data){
                            console.log("woshi"+v.city)
                            that.setState({
                                data:data.HeWeather5[0],
                                daily:data.HeWeather5[0],
                                hourly:data.HeWeather5[0].hourly_forecast,
                                air:data.HeWeather5[0].aqi,
                                life:data.HeWeather5[0]['suggestion'],
                                wd:30,
                                city:v.city
                            })
                        }
                    });
                }

            }
        })
    };
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
    getApi (city,that) {
        $.ajax({
            type: "get",
            url: `https://free-api.heweather.com/v5/weather?city=${city}&key=1be55058fdc0488b901fdee44f4e65c9`,
            cache:false,
            async:false,
            success: function(data){
                that.setState({
                    data:data.HeWeather5[0],
                    daily:data.HeWeather5[1],
                    hourly:data.HeWeather5[1].hourly_forecast,
                    air:data.HeWeather5[1].aqi,
                    life:data.HeWeather5[1]['suggestion'],
                    wd:30
                })
            }
        });
    }
}
export default Index;