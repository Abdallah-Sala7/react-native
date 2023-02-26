import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { assets, COLORS, SHADOWS } from '../constants'
import { CircButton, RecButtons } from '../constants/Buttons'
import EtcPrice from './EtcPrice'
import SubInfo from './SubInfo'

const NFTCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={item.image}
        style={{ width: "100%", height: 250, resizeMode: 'cover' }}
      />

      <CircButton icon={assets.heart} 
        style={{
          position:"absolute",
          top:20, 
          left:20,
          zIndex:1
        }} 
      />

      <View style={styles.cardBody}>
        <SubInfo  item={item} />

        <Text style={{color:COLORS.primary, fontSize:18, fontWeight:"bold", marginBottom:10}}>
          {item.name}
        </Text>

        <Text style={{color:COLORS.secondary, fontSize:14, fontWeight:"bold", marginBottom:5}}>
          by {item.creator}
        </Text>

        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <RecButtons src={'details'} id={item.id}>
            Place a bid
          </RecButtons>

          <EtcPrice item={item} />
        </View>
      </View>
    </View>
  )
}

export default NFTCard

const styles = StyleSheet.create({
  cardContainer:{
    position:"relative",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
    ...SHADOWS.medium,
  },

  cardBody: {
    padding: 20,
  },
})