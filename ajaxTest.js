
//https://upload.wikimedia.org/wikipedia/commons/f/fd/Chicken_mania.jpg
//https://upload.wikimedia.org/wikipedia/commons/7/7d/01-W_Feb_20_2012_0310Z.jpg
//https://upload.wikimedia.org/wikipedia/commons/2/28/Catedral_de_Santa_Mar%C3%ADa%2C_Sig%C3%BCenza%2C_Espa%C3%B1a%2C_2015-12-28%2C_DD_129-131_HDR.JPG
//https://upload.wikimedia.org/wikipedia/commons/4/42/10R_Apr_6_2013_0905Z.jpg
//https://upload.wikimedia.org/wikipedia/commons/e/e5/112.Tuolumnne180Panorama.jpg
function TEST() {

var images = [("https://upload.wikimedia.org/wikipedia/commons/7/7d/01-W_Feb_20_2012_0310Z.jpg" +"?nnn=" + Math.random(22)*10000),("https://upload.wikimedia.org/wikipedia/commons/f/fd/Chicken_mania.jpg" + "?nnn=" + Math.random(22)*10000),("https://upload.wikimedia.org/wikipedia/commons/2/28/Catedral_de_Santa_Mar%C3%ADa%2C_Sig%C3%BCenza%2C_Espa%C3%B1a%2C_2015-12-28%2C_DD_129-131_HDR.JPG"+"?nnn=" + Math.random(22)*10000),("https://upload.wikimedia.org/wikipedia/commons/4/42/10R_Apr_6_2013_0905Z.jpg"+"?nnn=" + Math.random(22)*10000),("https://upload.wikimedia.org/wikipedia/commons/e/e5/112.Tuolumnne180Panorama.jpg"+"?nnn=" + Math.random(22)*10000)] ;
var startTime= [];
var endTime=[];
var downloadSizes = [8941568*8,3894764*8,11128832*8,29786384*8,16706082*8];
var download1 = new Image() ; 
var download2 = new Image();
var download3 = new Image();
var download4 = new Image();
var download5 = new Image();
var speeds = [];



startTime[0] = new Date().getTime()/1000;
download1.src = images[0];
var st = (startTime[0]);
alert(st+"\n Start \n"+
       +downloadSizes[0]+"\n BYTES \n");





         
   



download1.onload = function() { 
 
endTime[0] = new Date().getTime()/1000;
var ed= (endTime[0]);
alert(ed+"\n END \n");
var duration = (endTime[0]-startTime[0]);
var dr = duration;
var speedBps =parseFloat( downloadSizes[0] / duration);
var speedKbps = (speedBps / 1024).toFixed(2) ;
var speedMbps = ((speedKbps / 1024).toFixed(2));  
alert ("Start Time \n" +
startTime[0]+"\n End Time \n"+        
endTime[0]+"\n bytes Loaded \n"+
downloadSizes[0]  +" \n Duration \n" +
dr +   "\n"+     
speedBps + " bps\n" +
speedKbps + " kbps\n" +
speedMbps + " Mbps\n");
speeds[0]= parseFloat(speedMbps);    




startTime[1]= new Date().getTime()/1000;
download2.src = images[1];
var st2 = (startTime[1]);
alert(st2+"\n Start \n"+
        +downloadSizes[1]+"\n BYTES \n");
};


download2.onload = function() { 
 
endTime[1] = new Date().getTime()/1000;
var ed= (endTime[1]);
alert(ed+"\n END \n");
var duration = (endTime[1]-startTime[1]);
var dr = duration;
var speedBps = parseFloat(downloadSizes[1] / duration);
var speedKbps = (speedBps / 1024).toFixed() ;
var speedMbps = ((speedKbps / 1024).toFixed(2));  
alert ("Start Time \n" +
startTime[1]+"\n End Time \n"+        
endTime[1]+"\n bytes Loaded \n"+
downloadSizes[1]  +"\n Duration \n"+
dr + "\n " +       
speedBps + " bps\n" +
speedKbps + " kbps\n" +
speedMbps + " Mbps\n");
speeds[1]= parseFloat(speedMbps);




startTime[2]= new Date().getTime()/1000;
download3.src = images[2];
var st3 = (startTime[2]);
alert(st3+"\n Start \n"+
        +downloadSizes[2]+"\n BYTES \n"); 


};

download3.onload = function() { 
 
endTime[2] = new Date().getTime()/1000;
var ed= (endTime[2]);
alert(ed+"\n END \n");
var duration = (endTime[2]-startTime[2]);
var dr = duration;
var speedBps = parseFloat(downloadSizes[2] / duration);
var speedKbps = (speedBps / 1024).toFixed() ;
var speedMbps = ((speedKbps / 1024).toFixed(2));  
alert ("Start Time \n" +
startTime[2]+"\n End Time \n"+        
endTime[2]+"\n bytes Loaded \n"+
downloadSizes[2]  +"\n Duration \n"+
dr + "\n " +       
speedBps + " bps\n" +
speedKbps + " kbps\n" +
speedMbps + " Mbps\n");
speeds[2]= parseFloat(speedMbps); 

startTime[3]= new Date().getTime()/1000;
download4.src = images[3];
var st4 = (startTime[3]);
alert(st4+"\n Start \n"+
        +downloadSizes[3]+"\n BYTES \n"); 

};



download4.onload = function() { 
 
endTime[3] = new Date().getTime()/1000;
var ed= (endTime[3]);
alert(ed+"\n END \n");
var duration = (endTime[3]-startTime[3]);
var dr = duration;
var speedBps = parseFloat(downloadSizes[3] / duration);
var speedKbps = (speedBps / 1024).toFixed() ;
var speedMbps = ((speedKbps / 1024).toFixed(2));  
alert ("Start Time \n" +
startTime[3]+"\n End Time \n"+        
endTime[3]+"\n bytes Loaded \n"+
downloadSizes[3]  +"\n Duration \n"+
dr + "\n " +       
speedBps + " bps\n" +
speedKbps + " kbps\n" +
speedMbps + " Mbps\n");
speeds[3]= parseFloat(speedMbps); 


startTime[4]= new Date().getTime()/1000;
download5.src = images[4];
var st4 = (startTime[4]);
alert(st4+"\n Start \n"+
        +downloadSizes[4]+"\n BYTES \n"); 

};
download5.onload = function() { 
 
endTime[4] = new Date().getTime()/1000;
var ed= (endTime[4]);
alert(ed+"\n END \n");
var duration = (endTime[4]-startTime[4]);
var dr = duration;
var speedBps = parseFloat(downloadSizes[4] / duration);
var speedKbps = (speedBps / 1024).toFixed() ;
var speedMbps = ((speedKbps / 1024).toFixed(2));  
alert ("Start Time \n" +
startTime[4]+"\n End Time \n"+        
endTime[4]+"\n bytes Loaded \n"+
downloadSizes[4]  +"\n Duration \n"+
dr + "\n " +       
speedBps + " bps\n" +
speedKbps + " kbps\n" +
speedMbps + " Mbps\n");
speeds[4]= parseFloat(speedMbps); 
var avgSpeed = (speeds[0]+speeds[1]+speeds[2]+speeds[3]+speeds[4])/5;
alert("\n Speed 1:\n "+speeds[0]+
        "\n Speed 2:\n"+ speeds[1]+
        "\n Speed 3:\n"+ speeds[2]+
        "\n Speed 4:\n"+ speeds[3]+
        "\n Speed 5:\n"+ speeds[4]+
        "\n Average Mbps:\n"+avgSpeed);
};
}



