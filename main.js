// 色の設定
var colorSet = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

// 色のRGB変換
  var color = Chart.helpers.color;

/*
 * チャートの初期設定
 */

var drawGraph = function(energyData){
  // 色のRGB変換

  var ctx = document.getElementById('graph').getContext('2d');
  var config = {
    type: 'radar',
      data: {
        labels:energyData[0],
        datasets: [{
          label: 'ビタミン',
          backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
          borderColor: colorSet.red,
          pointBackgroundColor: colorSet.red,
          data: energyData[1]
        }]
      },
    options: {
      animation:false,
      showTooltips: false,
      legend: { position: 'bottom' },
      title: {
        display: true,
        fontSize:20,
        fontColor:'#666',
        text: 'ビタミン表示！'
      },
      scale: {
        display: true,
        pointLabels: {
          fontSize: 15,
          fontColor: colorSet.yellow
        },
        ticks: {
          display: true,
          fontSize: 12,
          fontColor: colorSet.green,
          min: 0,
          max: 5,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          color: colorSet.yellow
        }
      }
    }
  }
  var myRadar = new Chart(ctx, config);

};

var energyData =[  ['A','E','K','B1','B2','B6','C'],
                [0.221, 2.2,   0.017,  0.32, 0.36, 0.35, 33  ], //一色
                [0.945, 5.67,  0.7290, 0.3,  0.54, 0.38, 94.5], //ほうれん草
                [0.663, 2.3,   0.5355, 0.23, 0.33, 0.31, 99.45], //小松菜
                [0.004, 0.45,  0.0,    0.05, 0.04, 0.34, 14.4 ], //バナナ
                [0.005, 0.51,  0.0,    0.05, 0.03, 0.08, 10.2] //リンゴ

          ]

function calc(arr1,arr2){
  var newarr=[];
  for (var i=0;i<arr1.length;i++){
    newarr[i]=arr1[i]/arr2[i];
  }
  return newarr;
}


// ウィンドウが読み込まれる際にデータをロード
window.onload = function(){
  var displayData = [energyData[0], calc(energyData[2], energyData[1])]
  //var energyData_test = [energyData[0], energyData[2]];
  alert(displayData);
  drawGraph(displayData);
}
