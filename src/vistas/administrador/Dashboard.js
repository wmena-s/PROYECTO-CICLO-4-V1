import './dashboard.css';
import {Bar, Pie, Doughnut} from 'react-chartjs-2'

const Darboars = () => {

  return (
    <div className="contenedorDb">
      <h1 className="titulosBb">INFORMACIÓN DE EQUIPOS</h1>
      <div className="db1">
      <Bar
      data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
          label:'Store 1',
          data:[100,200,300,400,500,600],
          backgroundColor:'red',
          barThickness:12
        },
        {
          label:'Store 2',
          data:[321,212,344,332,223,566],
          backgroundColor:'green',
          barThickness:12
        },
        {
          label:'Store 3',
          data:[123,200,232,400,232,23],
          backgroundColor:'orange',
          barThickness:12
        },
        {
          label:'Store 4',
          data:[100,500,300,343,43,343],
          backgroundColor:'purple',
          barThickness:12
        },
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
                labelString:'Months',
                display:true,
                fontColor:'blue',
                fontSize:20
              },
              ticks:{
                fontColor:'green'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'cyan'
            },
            scaleLabel:{
                labelString:'Revenue',
                display:true,
                fontColor:'blue',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'green',
              
            }
          }
          ]
        }
      }}
      >

      </Bar>
      </div>
      <div className="db2">
        <h1 className="tituloBb"> ESTADISTICOS 1</h1>
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
      </div>
      <div className="db3">
      <h1 className="tituloBb"> ESTADISTICOS 2</h1>
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

      </Doughnut>
      </div>
    </div>
  );
}


export default Darboars
