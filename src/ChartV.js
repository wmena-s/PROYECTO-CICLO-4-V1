import 'chart.js/auto';
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';

function ChartV({x, y, titulo, namex, namey}) {

  return (
    <div className="App">
      <h1>Edad de los jugadores</h1>
      <Bar
      data={{
        labels: x,
        datasets:[{
          label: titulo,
          data: y,
          backgroundColor:'red',
          barThickness:12
        }
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Revenue: $"+toolTipItem.value)
            }
          }

        },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'cyan'
            },
              scaleLabel:{
                labelString: namex,
                display:true,
                fontColor:'white',
                fontSize:20
              },
              ticks:{
                fontColor:'red'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'cyan'
            },
            scaleLabel:{
                labelString:namey,
                display:true,
                fontColor:'white',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'red',
              
            }
          }
          ]
        }
      }}
      >

      </Bar>

{/*
      <Pie
      data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
          data:[100,200,300,400,500,600],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        },
        {
          data:[20,44,300,33,500,600],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        },
        {
          data:[22,200,444,400,500,30],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        }]
      }
      }
      >

      </Pie>

      <Doughnut
      data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
          data:[100,200,300,400,500,600],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        },
        {
          data:[20,44,300,33,500,600],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        },
        {
          data:[22,200,444,400,500,30],
          backgroundColor:['red','green','orange','purple','cyan','blue'],
        }]
      }
      }
      >

      </Doughnut>*/}

    </div>
  );
}

export default ChartV;