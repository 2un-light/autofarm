import { Component } from 'react';
import PlantsCheck from './components/PlantsCheck';

const title = {
  width : '1920px',
  height : '60px',
  margin : '10px 0px',
  color : '#1d1d1d',
  fontSize : '40px',
  fintWeight : '400',
  textAlign : 'center',
}


class App extends Component {

    state = {
      plantchecks:"",
    }
  

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({plantchecks: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/plantscheck');
    const body = await response.json();
    return body;
  }

  render() {                                      
    return(
    <div>
      <div style = {title}>
        농작물 실시간 모니터링 시스템
      </div>

      <div> 
      {this.state.plantchecks ? this.state.plantchecks.map((c) => {return <PlantsCheck soilHumidity={c.soilHumidity} Light={c.Light} humidity={c.humidity} plantsTemp={c.plantsTemp} led={c.led}/>
        }) : ""}
      </div>

    </div>
    );
  }
  
 

}
export default App;