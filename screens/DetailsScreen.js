import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { assets, COLORS, NFTData } from '../constants';
import SubInfo from '../components/SubInfo';
import EtcPrice from '../components/EtcPrice';
import { CircButton } from '../constants/Buttons';

const DetailsScreen = () => {
  const {params} = useRoute();

  const data = NFTData.find(item => item.id === params.itemId);
  return (
    <>
      <StatusBar hidden/>
      <ScrollView
        style={{backgroundColor:COLORS.white}}
        showsVerticalScrollIndicator={false}
      >
        <View style={{position:"relative"}}>
          <Image
            source={data?.image}
            style={{width: "100%", height: 350, resizeMode: "cover"}}
          />

          <View style={styles.header}>
            <CircButton icon={assets.heart} />
            <CircButton icon={assets.left} back />
          </View>
        </View>

        <View style={{padding:20}}>
          <SubInfo item={data} />

          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:15}}>
            <EtcPrice item={data} />

            <View>
              <Text style={{color:COLORS.primary, fontSize:18, fontWeight:"bold", marginBottom:10}}>
                {data.name}
              </Text>

              <Text style={{color:COLORS.secondary, fontSize:14, fontWeight:"bold", marginBottom:5}}>
                by {data.creator}
              </Text>
            </View>
          </View>

          <View style={{marginBottom:15}}>
            <Text style={styles.detailTitle}>
              Description
            </Text>

            <Text style={{color:COLORS.gray, fontSize:12}}>
              {data.description}
            </Text>
          </View>

          <View>
            <Text style={{...styles.detailTitle, marginBottom:10}}>
              current bid
            </Text>

            {data.bids.map((bid, index) => (
              <View key={index} 
                style={{
                  flexDirection:"row-reverse", 
                  alignItems:"center", 
                  justifyContent:"space-between",
                  marginTop: index === 0 ? 0 : 10,
                }}>
                <Image
                  source={bid.image}
                  style={{ width: 50, height: 50, resizeMode: 'cover', borderRadius:50}}
                />

                <View>
                  <Text style={{color:COLORS.primary, fontSize:14, fontWeight:"bold", marginBottom:5, textAlign:"center"}}>
                    Bid placed by {bid.name}
                  </Text>

                  <Text style={{color:COLORS.secondary, fontSize:12, textAlign:"center"}}>
                    {bid.date}
                  </Text>
                </View>

                <EtcPrice item={bid} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  header:{
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerBtn:{
    width:40, 
    height:40, 
    backgroundColor:COLORS.white, 
    borderRadius:50, 
    justifyContent:"center", 
    alignItems:"center" 
  },

  headerIcon:{
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },

  detailTitle:{
    color:COLORS.primary, 
    fontSize:16, 
    fontWeight:"bold", 
    marginBottom:5,
    textTransform:"capitalize"
  }
})