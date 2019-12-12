import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PureChart from 'react-native-pure-chart';
            

           /*  let row=''
            let row2=''  */
            let nov = 0;
            let dec = 0;
            let jan = 0;
            let feb = 0;
            let mar = 0;
            let apr = 0;
            let may = 0;
            let jun = 0;
            let jul = 0;
            let aug = 0;
            let sep = 0;
            let oct = 0;
            let month2;
            let arr =[]
            let long= ''
        
export default function Statistics(props) {
  const [data, setdata] = useState([])
  const [play, setPlay] = useState([])
  
  const fetchData =  () => {
    fetch("https://geo-app-server.herokuapp.com/getallexpquests")
        .then(res => res.json())
        .then(data => {
            setdata(data.doc)
        }).catch(err => {
            console.log(err.message)
        })
}
  useEffect(() => {
    fetchData()
    playMode()
   
  },[]) 
              for (let i =0; i < data.length; i++){
                //console.log('lengthhhhhhhhhhhhhh: ', data[i].points.length); 
                long =data[i].mode.length+1
                /* console.log(data[i].title) 
                row = data[0].title
                row2 = data[1].title */
                arr.push(data[i].timestamp)
                console.log('explore time : ',arr);
              
                date2 = new Date(data[i].timestamp);
                month2 = date2.getMonth()+1; 
                console.log(month2);

                if (month2 === 11)
                {
                  nov++
                  
                }else if(month2 === 12){
                  dec++
                    
                } else if (month2 === 1){
                  jan ++
                }
                else if (month2 === 2){
                  feb ++
                }
                else if (month2 === 3){
                  mar ++
                }
                else if (month2 === 4){
                  apr ++
                }
                else if (month2 === 5){
                   may++
                }else if (month2 === 6){
                  jun++
               }else if (month2 === 7){
                jul++
               }else if (month2 === 8){
                  aug++
               }else if (month2 === 9){
                  sep++
               }else if (month2 === 10){
                  oct++
               }
                
               /*   date = new Date(data[i].timestamp)
                month = date.getMonth(); 

                console.log(month); */
                
              // inner loop
                /* for(let j=0; j<data[i].points.length; j++){
                 console.log('this is innerloop',data[i].points[j].title);
                 
                  console.log('inner loop time',data[i].points[j].timestamp); 
                  pointsTime.push(data[i].points[j].timestamp)
                  splitPoints= pointsTime.join(' / ')
                  
                  info2 = data[i].points[j].title[2][]; 
                 info3 = data[3].points[j].title;
                 info4 = data[4].points[j].title;  
                }        */
              }

              console.log("November: ", nov);
              console.log('December: ', dec);
              console.log("January: ", jan);

  console.log("------------------------------");
  
              //  ******* play ******
              const playMode = async () => {
                await fetch("https://geo-app-server.herokuapp.com/getallplayquests")
                    .then(res => res.json())
                    .then(play => {
                      setPlay(play.doc)
                       
                    }).catch(err => {
                        console.log(err.message)
                    })
            }
            let playDate;
            let playMonth;
            let sub =''
            let subPlay= []
            let nov2=0
            let dec2=0
            let jan2= 0;
            let feb2 = 0;
            let mar2 = 0;
            let apr2 = 0;
            let may2 = 0;
            let jun2 = 0;
            let jul2 = 0;
            let aug2 = 0;
            let sep2 = 0;
            let oct2 = 0;
            for (let z = 0; z < play.length; z++) {
             // console.log( 'play mode ',play[z].points.length)
              name = play[z].info
              sub = play[z].mode.length+1
              subPlay.push(play[z].timestamp)
            console.log('play mode time',subPlay);
              playDate= new Date(play[z].timestamp)
              playMonth= playDate.getMonth()+1
                
                if(playMonth === 11){
                  nov2++
                }else if(playMonth === 12){
                  dec2++
                }else if (playMonth === 1){
                  jan2 ++
                }
                else if (playMonth=== 2){
                  feb2 ++
                }
                else if (playMonth === 3){
                  mar2 ++
                }
                else if (playMonth === 4){
                  apr2 ++
                }
                else if (playMonth === 5){
                  may2++
                }else if (playMonth === 6){
                  jun2++
                }else if (playMonth === 7){
                  jul2++
                }else if (playMonth === 8){
                  aug2++
                }else if (playMonth === 9){
                  sep2++
                }else if (playMonth === 10){
                  oct2++
              }

               }
               console.log('play in november : ', nov2);
               console.log('play in december : ', dec2);

               /////////////////////////////////////////////////////////////////////////
               console.log('---------------------CHARTS-----------------------');

               console.log('---------chart for total exp. and play----------');
/* 
              let totalData= [
                {x: [split][split2][playSplit][playSplit2 ] , y:[nov][dec][nov2][dec2]},
               ]
                */
              
            let sampleData = [
              {
                seriesName: 'Explore',
                data: [
                  {x: 'Jan', y: jan},
                  {x: 'feb', y: feb},
                  {x: 'mar', y: mar},
                  {x: 'apr', y: apr},
                  {x: 'may', y: may},
                  {x: 'jun', y: jun},
                  {x: 'jul', y: jul},
                  {x: 'aug', y: aug},
                  {x: 'sep', y: sep},
                  {x: 'Nov', y:nov},
                  {x: 'Dec', y: dec},
                ],
                color: '#297AB1'
              },
              {
                seriesName: 'Play',
                data: [
                  {x: 'Jan', y: jan2},
                  {x: 'feb', y: feb2},
                  {x: 'mar', y: mar2},
                  {x: 'apr', y: apr2},
                  {x: 'may', y: may2},
                  {x: 'jun', y: jun2},
                  {x: 'jul', y: jul2},
                  {x: 'aug', y: aug2},
                  {x: 'sep', y: sep2},
                  {x: 'oct', y: oct2},
                  {x: 'Nov', y: nov2},
                  {x: 'Dec', y: dec2},
                ],
                color: 'orange'
              }
            ]

            let newData = [
              {x: 'Jan', y: jan},
              {x: 'feb', y: feb},
              {x: 'mar', y: mar},
              {x: 'apr', y: apr},
              {x: 'may', y: may},
              {x: 'jun', y: jun},
              {x: 'jul', y: jul},
              {x: 'aug', y: aug},
              {x: 'sep', y: sep},
              {x: 'oct', y: oct},
              {x: 'Nov', y:nov},
              {x: 'Dec', y: dec},
              
          ]

          let playData = [
              {x: 'Jan', y: jan2},
              {x: 'feb', y: feb2},
              {x: 'mar', y: mar2},
              {x: 'apr', y: apr2},
              {x: 'may', y: may2},
              {x: 'jun', y: jun2},
              {x: 'jul', y: jul2},
              {x: 'aug', y: aug2},
              {x: 'sep', y: sep2},
              {x: 'oct', y: oct2},
              {x: 'Nov', y: nov2},
              {x: 'Dec', y: dec2},
            
        ]
 return (
    <ScrollView style={{ flex: 1 }}>
      <Headers
        name='Statistics'
        navigation={props.navigation}
      />
   <View>
    
  {/*  <Text> Quest 1 : {row}</Text> */}
  <Text> in November 2019: {nov} Quest/s</Text>
  <Text> in December 2019: {dec} Quest/s</Text>
   
     {/*  <Text> Quest 2 : {row2}</Text> */}
    {/* <Text> Quests time : {jo}</Text>
    <Text> points time :  {splitPoints}</Text> */}
    <Text> explore quest length is : {long}</Text>
    <Text> play quest length is : {sub}</Text>
   
        </View > 
       {/*  <View>
        <PureChart 
         width={'70%'} height={170} data={totalData} type='bar' /> 
         </View> */} 
        <View>
        <PureChart 
         width={'70%'} height={170}  data={sampleData} type='bar' /> 
         </View>
         <View>
        <PureChart 
         width={'70%'} height={170}  data={newData} type='line' /> 
         </View>
         <View>
        <PureChart 
         width={'70%'} height={170} data={playData} type='line' /> 
         </View>
        
   </ScrollView>
 )
}
Statistics.navigationOptions = {
  drawerIcon: () => (
    <View style={styles.icon}>
      <Ionicons
        name="md-trending-up"
        size={24}
        style={styles.iconcolor}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  icon: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconcolor: {
    color: "white",
  }
})