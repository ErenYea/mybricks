import ApexCharts from 'apexcharts';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

const TravelDetailsView = (args) => {
    const chartData = {
        chart: {
            
            type: "line",
            toolbar: {
                show: false
              },
            dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
            },
            // stacked: false
          },
          grid: {
            show: true,
            yaxis: {
                lines: {
                    show: true
                }
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          colors: ["#ff795a", "#247BA0"],
          series: [
            {
              name: "Track Record",
              data: args.props
            },
          ],
          plotOptions: {
            bar: {
              columnWidth: "20%"
            }
          },
          xaxis: {
            categories: [
                "January",
                "Februaury",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ]
              , 
              axisBorder: {
                show: false,
                color: "#ff795a"
              },
            title: {
                text: "",
                style: {
                    fontFamily: 'Poppins,Helvetica, Arial, sans-serif',
                    fontSize:'14px',
                    fontWeight: 600,
                    color: "#002159"
                  }
              },
              labels: {
              style:{
                fontWeight: 600,
                fontSize: '12px',
                fontFamily: 'Poppins,Helvetica, Arial, sans-serif',
              }
              
            }
          },
          yaxis: [
            {
              tickAmount: 4,
              min: 0,
              max: 8,
              
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: false,
                color: "#ff795a"
              },
              labels: {
                formatter: function(val) {
                  return val + '%'
                },
                align: 'left',
                minWidth: 0,
                maxWidth: 360,
                style: {
                  colors: "#000000",
                  fontSize: '12px',
                  fontFamily: 'Poppins,Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  cssClass: 'apexcharts-yaxis-label',
                },
                // offsetX: -5,
                // offsetY: 10,
                // rotate: 0,
              },
              title: {
                text: "",
                style: {
                  fontFamily: 'Poppins,Helvetica, Arial, sans-serif',
                  fontSize:'14px',
                  fontWeight: 600,
                  color: "#002159"
                }
                ,
               
              }
            },
          ],
          tooltip: {
            enabled:true,
            followCursor: true,
          },
          legend: {
            horizontalAlign: "left",
            offsetX: 40
          },
          markers: {
            size: [4, 7]
          }
        };
  
  return <ReactApexChart options={chartData} series={chartData.series} class='w-full h-fit lg:w-full'/>;
};
export default TravelDetailsView;