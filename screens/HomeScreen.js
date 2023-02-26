import { FlatList, StyleSheet, View } from 'react-native';
import { useState } from 'react';

import NFTCard from '../components/NFTCard';
import { COLORS, NFTData } from '../constants';
import HomeHeader from '../components/HomeHeader';
import BottomTapBar from '../components/BottomTapBar';

const HomeScreen = () => {

  const [nftData, setNftData] = useState(NFTData)

  const handelSearch = (text) => {
    const filterData = NFTData.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    setNftData(filterData)
  }

  return (
    <View style={{paddingHorizontal:10, minHeight:"100%"}}>
      <FlatList
        data={nftData}
        renderItem={({ item }) => <NFTCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader searchText={handelSearch} />}
      />

      <BottomTapBar />

      <View style={{...styles.bg, height: 350, backgroundColor:COLORS.primary, zIndex:-1}} />
      <View style={{...styles.bg, bottom:0, backgroundColor:COLORS.white, zIndex:-2}} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  bg:{
    position:"absolute" ,
    top:0, left:0, right:0 ,
  }
})