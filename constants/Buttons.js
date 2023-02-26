import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { COLORS } from './theme'

const RecButtons = ({children, src, id}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableHighlight 
      onPress={() => navigate(src,{itemId:id})}
      style={{
        backgroundColor:COLORS.primary, 
        paddingVertical:10, 
        paddingHorizontal:20, 
        borderRadius:30
      }}>
      <Text 
        style={{
          color:COLORS.white, 
          fontSize:16, 
          fontWeight:"bold", 
          letterSpacing:1
        }}>
        {children}
      </Text>
    </TouchableHighlight>
  )
}

const CircButton = ({icon, style, back}) =>{
  const nav = useNavigation();

  return(
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={()=> 
       back && nav.goBack()
      }
      style={{
        width:40, 
        height:40, 
        backgroundColor:COLORS.white, 
        borderRadius:50, 
        justifyContent:"center", 
        alignItems:"center",
        ...style
      }}>
      <Image
        source={icon}
        style={{ width: 25, height: 25, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  )
}

export {RecButtons, CircButton}