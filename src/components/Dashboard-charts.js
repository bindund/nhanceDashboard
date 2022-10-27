import React from "react";
import Card from 'react-bootstrap/Card';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DashboardCharts = (props) => {
   
    return(
        <Card>
                <HighchartsReact highcharts={Highcharts} options={props.options} />
        </Card>
    )
}
export default DashboardCharts