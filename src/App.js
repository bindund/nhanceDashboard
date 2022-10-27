import React from "react";
import Reports from "./components/Reports";
import DashboardCharts from "./components/Dashboard-charts";
import Consumption from "./components/Consumption";
import { barOptions , lineOptions , areaOptions , optionsEnergySource , socialGovOptions } from './components/Options' 
import Alerts from "./components/Alerts";


function App() {
  
  return (
    // <Container>
    //   <Row>
    //     <Col sm={4}>
    //     <Card style={{height:"150px" , width: '200px'}}>
    //     <Card.Img  src="/img.png" />
    //     </Card>
    //     </Col>
    //     <Col>
    //     <Row>
    //     <Col sm={2}><Consumption /></Col>
    //     <Col sm={2}><Source /></Col>
    //     </Row>
    //     <Row>
    //       <Col sm={4}> <DashboardCharts options={areaOptions} /></Col>
    //     </Row>
    //     </Col>
    //     <Col sm={4}><Alerts /></Col>
    //   </Row>
    //   <Row>
    //     <Col sm={3}><DashboardCharts options={lineOptions} /></Col>
    //     <Col sm={3}><DashboardCharts options={barOptions} /></Col>
    //     <Col sm={3}><Governance /></Col>
    //     <Col sm={3}><Reports /></Col>
    //   </Row>
    //   <Row>
    //     <Col sm={3} ><Rooms /></Col>
    //     <Col sm={3} ><Index /></Col>
    //     <Col>
    //     <Row>
    //     <Col sm={2}><Washroom /></Col>
    //     <Col sm={2}><WashroomAqi /></Col>
    //     </Row>
    //     </Col>
    //     <Col sm={2}><Feedbacks /></Col>
    //   </Row>
    // </Container>
    <div>
      <div class="container">
  <div class="row">
    
    <div class="col-xs-12 col-sm-12 col-md-6">
      <div class="box">
        <img  src="/img.png" style={{height:"500px" , width:"500px" , background:"black"}}/>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-2 col-lg-2">
      <div class="row">
         <div class="box">
        <Consumption />
      </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-2">
      <div class="box">
      <DashboardCharts options={optionsEnergySource} />
      </div>
    </div>
    <div class="row">
      <div class="box">
      <DashboardCharts options={areaOptions} />
      </div>
    </div>
    
    <div class="col-xs-12 col-sm-6 col-md-2">
      <div class="box">
        <Alerts />
      </div>
    </div>
  </div>
</div>

<div class="container">
<div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="box">
            <DashboardCharts options={lineOptions} />
          </div>
        </div>
        
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="box">
            <DashboardCharts options={barOptions} />
          </div>
        </div>
        
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box">
            {/* {for(let i=0; i<3; i++){
              <DashboardCharts options={socialGovOptions[i]}/>
            }} */}
            {socialGovOptions.map((ele) => {
              return(<DashboardCharts options={ele}/>)
            })}
            {/* <Governance /> */}
          </div>
        </div>
        
        <div class="col-xs-12 col-sm-6 col-md-2">
          <div class="box">
            <Reports />
          </div>
        </div>
        </div>
        </div>
      </div>
  );
}

export default App;
