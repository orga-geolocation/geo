import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PureChart from 'react-native-pure-chart';
            
            
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
            let nov = 0;
            let dec = 0;
            let month2;
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
                long =data[i].mode.length+1
                date2 = new Date(data[i].timestamp);
                month2 = date2.getMonth()+1; 
                console.log(month2);

                if (month2 === 1){
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
               }else if (month2 === 11)
               {
                 nov++
                 
               }else if(month2 === 12){
                dec++
                  
              }
                  
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
            let nov2 = 0;
            let dec2 = 0;
            for (let z = 0; z < play.length; z++) {
             // console.log( 'play mode ',play[z].points.length)
              name = play[z].info
              sub = play[z].mode.length+1
             /*  subPlay.push(play[z].timestamp)
            console.log('play mode time',subPlay); */
              playDate= new Date(play[z].timestamp)
              playMonth= playDate.getMonth()+1
                
               if (playMonth === 1){
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
              } else if(playMonth === 11){
                nov2++
              }else if(playMonth === 12){
                dec2++
              }

               }
               console.log('play in november : ', nov2);
               console.log('play in december : ', dec2);

               /////////////////////////////////////////////////////////////////////////
               console.log('---------------------CHARTS-----------------------');
            let sampleData = [
              {
                seriesName: 'Explore',
                data: [
                  {x: 'Jan', y: jan},
                  {x: 'Feb', y: feb},
                  {x: 'Mar', y: mar},
                  {x: 'Apr', y: apr},
                  {x: 'May', y: may},
                  {x: 'Jun', y: jun},
                  {x: 'Jul', y: jul},
                  {x: 'Aug', y: aug},
                  {x: 'Sep', y: sep},
                  {x: 'Oct', y: oct},
                  {x: 'Nov', y:nov},
                  {x: 'Dec', y: dec},
                ],
                color: '#297AB1'
              },
              {
                seriesName: 'Play',
                data: [
                  {x: 'Jan', y: jan2},
                  {x: 'Feb', y: feb2},
                  {x: 'Mar', y: mar2},
                  {x: 'Apr', y: apr2},
                  {x: 'May', y: may2},
                  {x: 'Jun', y: jun2},
                  {x: 'Jul', y: jul2},
                  {x: 'Aug', y: aug2},
                  {x: 'Sep', y: sep2},
                  {x: 'Oct', y: oct2},
                  {x: 'Nov', y: nov2},
                  {x: 'Dec', y: dec2},
                ],
                color: 'orange'
              }
            ]

            let newData = [
              {x: 'Jan', y: jan},
              {x: 'Feb', y: feb},
              {x: 'Mar', y: mar},
              {x: 'Apr', y: apr},
              {x: 'May', y: may},
              {x: 'Jun', y: jun},
              {x: 'Jul', y: jul},
              {x: 'Aug', y: aug},
              {x: 'Sep', y: sep},
              {x: 'Oct', y: oct},
              {x: 'Nov', y:nov},
              {x: 'Dec', y: dec},
              
          ]

          let playData = [
              {x: 'Jan', y: jan2},
              {x: 'Feb', y: feb2},
              {x: 'Mar', y: mar2},
              {x: 'Apr', y: apr2},
              {x: 'May', y: may2},
              {x: 'Jun', y: jun2},
              {x: 'Jul', y: jul2},
              {x: 'Aug', y: aug2},
              {x: 'Sep', y: sep2},
              {x: 'Oct', y: oct2},
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
    <Text> in November 2019: {nov} Quest/s</Text>
    <Text> in December 2019: {dec} Quest/s</Text>
    <Text> explore quest length is : {long}</Text>
    <Text> play quest length is : {sub}</Text>
   
        </View > 
       {/*  <View>
        <PureChart 
         width={'70%'} height={170} data={totalData} type='bar' /> 
         </View> */} 
        <View>
        <PureChart 
         width={'20%'} height={170}  data={sampleData} type='bar' /> 
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