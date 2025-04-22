import { Chart } from "react-google-charts";
import './App.css';

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Time with kids", 12],
    ["Eat", 1],
    ["Study", 3],
    ["Sleep", 8],
  ];

  const options = {
    title: "My Daily Activities",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
