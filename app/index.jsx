require("./static/css/config/base.less")
import "normalize.css";
import Routers from "./router"

ReactDOM.render(<Routers/>,document.querySelector(".weather-box"));
