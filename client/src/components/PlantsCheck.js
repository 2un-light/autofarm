import React from 'react';
import { RiTempHotLine } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import { BiWater } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdLightMode } from 'react-icons/md';

const contents = {
    width : '1880px',
    height : '900px',
    margin : '0px 20px',
    overflow : 'hidden'
}

const minbox = {
    width : '1780px',
    height : '250px',
    margin : '35px 50px'
}

const leftbox = {
    width : '600px',
    height : '250px',
    backgroundColor : '#00ED81',
    float : 'left',
    borderRadius : '20px',
    margin : '0px 0px 0px 170px',
    background : 'linear-gradient(to bottom, #00ED81, lightgreen)'
}

const humi = {
    width : '600px',
    height : '250px',
    backgroundColor : '#ffa800',
    float : 'left',
    borderRadius : '20px',
    margin : '0px 0px 0px 170px',
    background : 'linear-gradient(to bottom, #ffa800, gold)',
}

const rightbox = {
    width : '600px',
    height : '250px',
    backgroundColor : '#00ED81',
    float : 'right',
    borderRadius : '20px',
    margin : '0px 170px 0px 0px',
    background : 'linear-gradient(to bottom, #00ED81, lightgreen)'
}

const righttxtbox = {
    width : '600px',
    height : '250px',
    float : 'right',
    borderRadius : '20px',
    margin : '0px 170px 0px 0px'
}


const soil = {
    width : '600px',
    height : '250px',
    backgroundColor : '#fe0000',
    float : 'right',
    borderRadius : '20px',
    margin : '0px 170px 0px 0px',
    background : 'linear-gradient(to bottom, #fe0000, #F15F5F)'
}

const icon = {
    width : '210px',
    height : '210px',
    margin : '20px',
    float : 'left',
    borderRadius : '20px',
    textAlign : 'center'
}

const text = {
    width : '280px',
    height : '60px',
    margin : '20px 10px 0px 20px',
    float : 'left',
    fontSize : '50px',
    textAlign : 'center',
    color : '#ffffff',
    fontWeight : '700'
}

const engtext = {
    width : '280px',
    height : '30px',
    float : 'left',
    margin : '0px 20px',
    fontSize : '20px',
    textAlign : 'center',
    color : '#ffffff',
    fontWeight : '500',
    borderBottom : '2px solid'
}

const data = {
    width : '280px',
    height : '90px',
    margin : '20px',
    float : 'left',
    fontSize : '60px',
    textAlign : 'center',
    color : '#ffffff',
    fontWeight : '800'
}

const datainfo1 = {
    width : '50px',
    height : '50px',
    backgroundColor : '#fe0000',
    margin : '10px',
    float : 'left',
    borderRadius : '10px'
}

const datainfo2 = {
    width : '50px',
    height : '50px',
    backgroundColor : '#ffa800',
    margin : '10px',
    float : 'left',
    borderRadius : '10px'
}

const datainfo3 = {
    width : '50px',
    height : '50px',
    backgroundColor : '#00ed81',
    margin : '10px',
    float : 'left',
    borderRadius : '10px'
}

const datatxt = {
    width : '500px',
    height : '50px',
    margin : '10px',
    float : 'left',
    fontSize : '30px',
    fontWeight:'500',
    color : '#1d1d1d'
}


class PlantsCheck extends React.Component {
    render(){
        return(
        <div style={contents}>
            <div style={minbox}>

            <div style={leftbox}>
                <div style={icon}><RiTempHotLine size="210" color="#ffffff"/></div>
                <div style={text}>온도</div>
                <div style={engtext}>Temperature</div>
                <div style={data}>{this.props.plantsTemp} °C</div>
            </div>
            <div style={soil}>
                <div style={icon}><BiWater size="210" color="#ffffff"/></div>
                <div style={text}>토양 습도</div>
                <div style={engtext}>SoilHumidity</div>
                <div style={data}>{this.props.soilHumidity} kPa</div>
            </div>
            
            </div>

            <div style={minbox}>
            <div style={humi}>
                <div style={icon}><WiHumidity size="210" color="#ffffff"/></div>
                <div style={text}>습도</div>
                <div style={engtext}>Humidity</div>
                <div style={data}>{this.props.humidity} %</div>
            </div>
            <div style={rightbox}>
                <div style={icon}><HiOutlineLightBulb size="210" color="#ffffff"/></div>
                <div style={text}>LED</div>
                <div style={engtext}>Light-emitting diode</div>
                <div style={data}>{this.props.led}</div>
            </div>
            </div>

            <div style={minbox}>
            <div style={leftbox}>
                <div style={icon}><MdLightMode size="210" color="#ffffff"/></div>
                <div style={text}>조도</div>
                <div style={engtext}>Illuminance</div>
                <div style={data}>{this.props.Light} lx</div>
            </div>
            <div style={righttxtbox}>
                <div style={datainfo1}></div>
                <div style={datatxt}>위험(Dangerous) 상태</div>
                

                <div style={datainfo2}></div>
                <div style={datatxt}>경고(Warning) 상태</div>

                <div style={datainfo3}></div>
                <div style={datatxt}>안전(safety) 상태</div>
            </div>
            </div>         
            {/* <div>
                <p>{this.props.soilHumidity} %</p>
                <p>{this.props.Light} lx </p>
                <p>{this.props.humidity} % </p>
                <p>{this.props.plantsTemp} °C </p>
                <p>{this.props.led}</p>

            </div> */}


            
        </div>
        )              
    }
    
}
export default PlantsCheck;