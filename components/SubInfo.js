import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS } from '../constants'

const SubInfo = ({item}) => {
  return (
    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:-45, marginBottom:5}}>
      <View style={{
        backgroundColor:COLORS.white,
        paddingHorizontal:20, 
        paddingVertical:10,
        ...SHADOWS.dark, 
        borderRadius:15,
      }}>
        <Text style={{fontSize: 14, color:COLORS.gray, textAlign:"center", textTransform:"capitalize"}}>ending in</Text>
        <Text style={{fontSize: 16, fontWeight:"bold", color:COLORS.secondary, textAlign:"center"}}>12h 30m</Text>
      </View>

      <View>
        <FlatList
          data={item.bids}
          renderItem={({ item, index }) => (
            <Image
              source={item.image}
              style={{ width: 50, height: 50, borderRadius: 50, marginLeft: index === 0 ? 0 : -20 }}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default SubInfo