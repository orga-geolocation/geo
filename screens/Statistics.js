import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PureChart from 'react-native-pure-chart';
            let row=''
            let row2=''  
            let playTime =''

            let newData = [   
          ]
            
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
  let arr =[]
  let jo= ''
  let pointsTime= []
  let splitPoints =''
  let long= ''
              for (let i =0; i < data.length; i++){
                console.log('lengthhhhhhhhhhhhhh: ', data[i].points.length); 
                long =data[i].mode.length
                console.log(data[i].title) 
                row = data[0].title
                row2 = data[1].title
                arr.push(data[i].timestamp)
                jo = arr.join(' / ')
                
                
              // inner loop 
                for(let j=0; j<data[i].points.length; j++){
                 console.log('this is innerloop',data[i].points[j].title);
                 /* info =  data[0].points[j].title;
                 info1 = data[i].points[j].title; */
                  console.log('inner loop time',data[i].points[j].timestamp); 
                  pointsTime.push(data[i].points[j].timestamp)
                  splitPoints= pointsTime.join(' / ')
                  
                  /* info2 = data[i].points[j].title[2][]; */
                 /* info3 = data[3].points[j].title;
                 info4 = data[4].points[j].title;  */
                }       
              }
             /*  let newData= []
           for (let x = 0; x <data.length; x++){
                let item= {x: data[x].timestamp , y: 4}
                newData.push(item)
              }   */
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
            //let name =''
            let sub =''
            let subPlay= ''
            //let inf =''
            let counter = 0
            for (let z = 0; z<play.length; z++) {
              console.log( 'play mode ',play[z].points.length)
              name = play[z].info
              sub = play[z].mode.length
              subPlay= play[z].timestamp
              let sub2 = {x: play[z].timestamp, y: 20}
              newData.push(sub2)
             /* for(let y = 0; y<play[z].length; y++){
                console.log('play mode time ',play[z].points[y].timestamp);
                inf= play[z].points[y].info
              } */
            }
 return (
    <View style={{ flex: 1 }}>
      <Headers
        name='Statistics'
        navigation={props.navigation}
      />
   <View>
    
   <Text> Quest 1 : {row}</Text>
  
      <Text> Quest 2 : {row2}</Text>
    <Text> Quests time : {jo}</Text>
    <Text> points time :  {splitPoints}</Text>
    <Text> explore quest length is : {long}</Text>
    <Text> play quest length are : {sub}</Text>
    <Text> time for play quest {subPlay}</Text>
        </View >  
        <View>
        <PureChart 
         width={'100%'} height={200}  data={newData} type='line' /> 
         </View>
   </View>
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