/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function YAY(){
    var image = ("https://upload.wikimedia.org/wikipedia/commons/4/42/10R_Apr_6_2013_0905Z.jpg");
    var downloadSize = 29786384*8;
    var startTime = [];
    var endTime = [];
    var download = new Image();
    var speeds = [];
    var inc = 0;
    var avgSpeed = 0;
    var attempts = 6;
    
    recursion(inc);
    
    function recursion(x){
startTime[x] = new Date().getTime()/1000;
download.src = image+"?nnn=" + Math.random();
var st = (startTime[x]);
//alert(st+"\n Start \n"+
//       +downloadSize+"\n BYTES \n");   
    }

download.onload = function() { 
 
endTime[inc] = new Date().getTime()/1000;
var ed= (endTime[inc]);
//alert(ed+"\n END \n");
var duration = (endTime[inc]-startTime[inc]);
var dr = duration;
var speedBps =parseFloat( downloadSize / duration);
var speedKbps = (speedBps / 1024).toFixed(2) ;
var speedMbps = ((speedKbps / 1024).toFixed(2));  
//alert ("Start Time \n" +
//startTime[inc]+"\n End Time \n"+        
//endTime[inc]+"\n bytes Loaded \n"+
//downloadSize  +" \n Duration \n" +
//dr +   "\n"+     
//speedBps + " bps\n" +
//speedKbps + " kbps\n" +
//speedMbps + " Mbps\n");
speeds[inc]= parseFloat(speedMbps);

if (inc<attempts){
    avgSpeed = 0;
    for(i=0;i<inc;i++){
        avgSpeed = avgSpeed+parseFloat(speeds[i]);
    }
    if(inc!==0){ 
    avgSpeed = avgSpeed/inc;
    }
    inc = inc+1;
    recursion(inc);
}
alert("\n Speed 1:\n "+speeds[0]+
        "\n Speed 2:\n"+ speeds[1]+
        "\n Speed 3:\n"+ speeds[2]+
        "\n Speed 4:\n"+ speeds[3]+
        "\n Speed 5:\n"+ speeds[4]+
        "\n Average Mbps:\n"+avgSpeed);

};
    
}