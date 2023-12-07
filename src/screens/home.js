import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity, ScrollView } from "react-native";
import Login from "../screens/login";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SwitchSelector from "react-native-switch-selector";

export default function Home() {

  const options = [
    { label: "Live Inventory", value: "1" },
    { label: "Completed", value: "2" },

  ];

  return (
    <ScrollView>
    <View style={styles.container} >
      
      <View style={styles.topView}>
        <View style={styles.appBarView}>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }}>
            <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#dadde3', alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="menu" size={18} style={{ color: '#000' }} />
            </View>
            <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#dadde3', alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons name="person" size={18} style={{ color: '#000' }} />
            </View>
          </View>

        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.textStyle}>Remaining Buying Limit</Text>
          <Text style={styles.textStyle}>Rs. 82,00,000</Text>
        </View>
      </View>
      <View style={{ marginVertical: 15, marginHorizontal: 15, backgroundColor: '#fff', padding: 5, elevation: 3, borderRadius: 5 }}>
        <SwitchSelector

          options={options}
          buttonColor={'#FFC527'}
          selectedColor={'#000'}
          borderRadius={10}
          bold={true}
          initial={0}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Auction Name:</Text>
          <Text style={{ fontFamily: 'Inter' }}>Yes Bank 4W CV Online North (54321)</Text>
          <Image source={require("../../assets/images/loveicon.png")} />
        </View>
        
        <View style={{elevation:2, borderWidth:1,borderColor:'#9A9EA7', borderTopLeftRadius:10,borderTopRightRadius:10}}>
        {/* image component start here */}
        
        <View style={{ position: 'relative' }}>

          <Image style={styles.imageStyle} source={require("../../assets/images/auctioncar.png")} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 0, right: 0 }}>
            <View style={{ height: '80%', paddingHorizontal: 16, paddingVertical: 5, backgroundColor: '#fff', marginTop: 8, marginHorizontal: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: '600' }} >View Inspection report</Text>
            </View>
            <View style={{ height: '80%', paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#fff', marginTop: 8, marginHorizontal: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{}} source={require("../../assets/images/eye.png")} />
            </View>

          </View>
          <View style={{  position: 'absolute', left: 0, right: 0, bottom: 10 }}>
          <View style={{ paddingHorizontal: 16, paddingVertical: 5, backgroundColor: '#fff', marginTop: 8, marginHorizontal: 10, borderRadius: 5,  }}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{ fontWeight: '600' }} >AP29BXXXXX</Text>
            <Text style={{ fontWeight: '600' }} >{'\u2B23'}    petrol</Text>
            <Text style={{ fontWeight: '600' }} >{'\u2B23'}    Car</Text>
            <Text style={{ fontWeight: '600' }} >38000kms</Text>
            </View>
          </View>


        </View>
        
        </View>
        {/* ends here */}
        <View style={{padding:20}}>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize:18, fontWeight:'700'}}>Maruthi Suzuki Swift Dzire VDi</Text>
          <Image source={require("../../assets/images/loveicon.png")} />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:10}}>
          
          <Image source={require("../../assets/images/caricon.png")} />
          <Text style={{fontWeight:'400', fontSize:14}}>4 Wheeler</Text>
          <Text style={{fontWeight:'400', fontSize:14,color:'#9A9EA7'}}>{'\u2B23'}  Banglore</Text>
          <Text style={{fontWeight:'400', fontSize:14, textDecorationLine:'underline',textDecorationColor:'#9A9EA7'}}>Remark</Text>
          <Image source={require("../../assets/images/thumbsup.png")} />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flexDirection:'column',marginTop:10}}>
          <Text style={{fontWeight:'700', fontSize:18,color:'#000'}}>02:24:22</Text>
          <Text style={{fontWeight:'500', fontSize:11,}}>10 March, 9:38PM</Text>
          <Text style={{fontWeight:'400', fontSize:12, color:'#9A9EA7'}}>End time</Text>

          </View>
          <View style={{flexDirection:'column',marginTop:10}}>
          
          <Text style={{fontWeight:'700', fontSize:14,}}>18 </Text>
          <Text style={{fontWeight:'400', fontSize:12, color:'#9A9EA7'}}>Bids</Text>

          </View>
          <View style={{flexDirection:'column',marginTop:10}}>
          <Text style={{fontWeight:'400', fontSize:12,color:'#00A541'}}>Reserve Met</Text>
          
          <Text style={{fontWeight:'500', fontSize:12, color:'#9A9EA7', textDecorationColor:"#9A9EA7",textDecorationLine:'underline'}}>Comments</Text>

          </View>
          </View>
          <Text style={{marginTop:10,fontSize:10,fontWeight:'600',color:'#707070'}}>Tip: Swift Dzire was approved @5 lakh in Previuos auctions</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity
                        style={styles.outLinedbutton}
                    // onPress={}
                    >
                        <Text style={styles.outLinedbuttonText}>Set Auto Bid</Text>
                    </TouchableOpacity>
                    <View style={{marginHorizontal:5}}></View>
          <TouchableOpacity
                        style={styles.button}
                    // onPress={}
                    >
                        <Text style={styles.buttonText}>Place Bid</Text>
                    </TouchableOpacity>
                    
                    
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <Text style={{fontSize:12, fontWeight:'600',color:"#666"}}>Heighest Bid- Rs 34,00,000</Text>
            <Text style={{fontSize:12, fontWeight:'600',color:"#666"}}>20 Bids remaining</Text>
          </View>
          </View>
          
        </View>
      
        
      </View>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding:16
    backgroundColor: '#fff',

  },
  topView: {
    height: '20%',
    backgroundColor: "#FFC527",

  },
  appBarView: {
    height: 80,
    width: "100%",
    backgroundColor: '#fff',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 16
  },
  textStyle: {

    fontWeight: 'bold',
    textAlign: 'center',
    // justifyContent:'center'
  },
  imageStyle: {
    width: '100%',
    height:220,
    borderRadius: 10
  },
  button: {
    backgroundColor: "#F7B40D",
    // borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 30,
    // borderColor: '#9A9EA7',
    flex:1
   
},
buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '700',

},

outLinedbutton: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 30,
    borderColor: '#979797',
    flex:1
},
outLinedbuttonText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    fontWeight: '700',

},
});