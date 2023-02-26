import { Image, Text, View } from 'react-native'
import { assets, COLORS } from '../constants'

const EtcPrice = ({item}) => {
  return (
    <View style={{flexDirection:"row"}}>
      <Text style={{color:COLORS.secondary, fontSize:14, fontWeight:"bold"}}>{item.price}</Text>

      <Image
        source={assets.eth}
        style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft:5 }}
      />
    </View>
  )
}

export default EtcPrice