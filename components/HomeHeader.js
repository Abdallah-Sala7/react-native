import { Image, Text, TextInput, View } from 'react-native'
import { assets, COLORS } from '../constants'

const HomeHeader = ({searchText}) => {
  return (
    <View style={{marginVertical:40}}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
        <View style={{position:"relative"}}>
          <Image
            source={assets.person01}
            style={{width: 50, height: 50, resizeMode:"contain"}}
          />
          <Image
            source={assets.badge}
            style={{width: 20, height: 20, resizeMode:"contain", position:"absolute", bottom:-1, left:-1}}
          />            
        </View>

        <Image
          source={assets.logo}
          style={{width:100, height:30, resizeMode:"contain"}}
        />
      </View>

      <Text style={{color:COLORS.gray, fontSize:20, textTransform:"capitalize", marginBottom:5}}>
        hello sara
      </Text>

      <Text style={{color:COLORS.white, fontSize:22, textTransform:"capitalize", fontWeight:"bold", marginBottom:20}}>
        lets find masterpiece art
      </Text>

      <View style={{position:"relative"}}>
        <Image
          source={assets.search}
          style={{
            width: 20, 
            height: 20, 
            resizeMode:"contain", 
            position:"absolute", 
            top:"50%", right:10, 
            zIndex:1, 
            transform:[{translateY:-10}]
          }}
        />

        <TextInput 
          style={{
            backgroundColor:COLORS.gray, 
            borderRadius:10, 
            paddingEnd:40, 
            paddingStart:15,
          }} 
          placeholder="Search"
          onChangeText={searchText}
          caretHidden={true}
        />
      </View>
    </View>
  )
}

export default HomeHeader