import "./index.less"
import Lifelist from "../../../components/lifelist";
import Itemheader from "../../../components/itemheader";
class Life extends React.Component{
    render(){
        var cnname = {
            comf:'[舒适度指数]',
            cw:'[洗车指数]',
            drsg:'[穿衣指数]',
            flu:'[感冒指数]',
            sport:'[运动指数]',
            trav:'[旅游指数]',
            uv:'[紫外线指数]'
        }
        
        return (
            <div　className="life">
                <Itemheader title="生活指数"/>
                <div className="life-list">
                    {
                        Object.values(this.props.data).map((v,i)=>{
                            return <Lifelist jian={Object.keys(this.props.data)[i]} data={this.props.data} cnname={cnname} key={i}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Life;