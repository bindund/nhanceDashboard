import React from "react";
import DashboardCharts from "./components/Dashboard-charts";
import Consumption from "./components/Consumption";
import {
  barOptions,
  lineOptions,
  areaOptions,
  optionsEnergySource,
  socialGovOptions,
} from "./components/Options";
import Alerts from "./components/Alerts";

function App() {
  return (
    <div>
      <div class="container m-0">
        <div class="row">
          {/* <div class="col-md-10">
            <div class="row"> */}
          <div class="col-md-6">
            <div
              style={{
                height: "30rem",
              }}
            >
              <img
                src="/img.png"
                style={{
                  height: "30rem",
                  width: "550px",
                  background: "black",
                }}
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="box"
                  style={{
                    height: "13rem",
                  }}
                >
                  <Consumption />
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="box"
                  style={{
                    height: "13rem",
                  }}
                >
                  <DashboardCharts options={optionsEnergySource} />
                </div>
              </div>
              <div class="col-md-12">
                <div
                  class="box"
                  style={{
                    height: "16rem",
                  }}
                >
                  <DashboardCharts options={areaOptions} />
                </div>
              </div>
            </div>
          </div>
          {/* </div>
          </div> */}
          <div class="col-md-3">
            <div
              class="box"
              style={{
                height: "30rem",
              }}
            >
              <Alerts />
            </div>
          </div>

          <div class="col-md-3">
            <div class="box">
              <DashboardCharts options={lineOptions} />
            </div>
          </div>
          <div class="col-md-3">
            <div class="box">
              <DashboardCharts options={barOptions} />
            </div>
          </div>
          <div class="col-md-3">
            <div class="box">
              {/* <DashboardCharts /> */}
              {socialGovOptions.map((ele) => {
                return <DashboardCharts options={ele} />;
              })}
            </div>
          </div>
          <div class="col-md-3">
            <div class="box">
              <DashboardCharts />
            </div>
          </div>
          <div class="col-md-3">
            <div class="box">
              <DashboardCharts />
            </div>
          </div>
          <div class="col-md-3">
            <div class="box">
              {/* <DashboardCharts options={optionsEnergySource} /> */}
            </div>
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="box"
                  style={{
                    height: "12rem",
                  }}
                >
                  {/* <Consumption /> */}
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="box"
                  style={{
                    height: "12rem",
                  }}
                >
                  <DashboardCharts />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="box">
              <DashboardCharts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
