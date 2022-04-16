import { DepartmentContext } from '../../contexts/DepartmentContext'

import React, { useState, useContext, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const nhale = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];
// export default class PieChart extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nhale,
//     };
//   }

//   render() {
//     const { nhale: dataa } = this.state;

//     return (
//       <Paper>
//         <Chart
//           data={dataa}
//         >
//           <PieSeries
//             valueField="area"
//             argumentField="country"
//           />
//           <Title
//             text="Area of Countries"
//           />
//           <Animation />
//         </Chart>
//       </Paper>
//     );
//   }
// }

const PieChart = () => {
  const [dataChart, setdataChart] = useState([
    { country: 'Russia', area: 12 },
    { country: 'Canada', area: 7 },
    { country: 'USA', area: 7 },
    { country: 'China', area: 7 },
  ])
  const { departSate: { departments, departmentsLoading, }, getAllDepartments, deleteDepart } = useContext(DepartmentContext)
  useEffect(() => getAllDepartments(), [])
  return (
    <Paper>
      <Chart
        data={dataChart}
      >
        <PieSeries
          valueField="area"
          argumentField="country"
        />
        <Title
          text="Percent of Blogs in each Category"
        />
        <Animation />
      </Chart>
    </Paper>
  )
}
export default PieChart;