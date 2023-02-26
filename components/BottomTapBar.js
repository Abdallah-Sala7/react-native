import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { assets, COLORS, SHADOWS } from '../constants'
import { useRoute } from '@react-navigation/native'

const BottomTapBar = () => {
  const {name} = useRoute();

  return (
    <View style={styles.navTap}>
      <TouchableOpacity 
        activeOpacity={0.7} 
        style={{
          opacity:name === 'home' ? 1 : 0.5
        }}
      >
        <Image
          source={assets.heart}
          style={styles.btnIcon} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        activeOpacity={0.7} 
        style={{
          opacity:name === 'details' ? 1 : 0.5
        }}
      >
        <Image
          source={assets.heart}
          style={styles.btnIcon} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        activeOpacity={0.7} 
        style={{
          opacity:name === 'status' ? 1 : 0.5
        }}
      >
        <Image
          source={assets.heart}
          style={styles.btnIcon} 
        />
      </TouchableOpacity>

      <TouchableOpacity 
        activeOpacity={0.7} 
        style={{
          opacity:name === 'heart' ? 1 : 0.5
        }}
      >
        <Image
          source={assets.heart}
          style={styles.btnIcon} 
        />
      </TouchableOpacity>
    </View>
  )
}

export default BottomTapBar

const styles = StyleSheet.create({
  navTap:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:35,
    paddingVertical:17,
    backgroundColor:COLORS.primary,
    borderRadius:50,
    position:"absolute",
    bottom:30,
    left:30,
    right:30,
    ...SHADOWS.medium
  },
  btnIcon:{
    width: 30, 
    height: 30, 
    resizeMode:"contain"
  }
})