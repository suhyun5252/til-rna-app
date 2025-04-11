import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';

// 현재 화면의 가로너비를 가져오기
const {width} = Dimensions.get('window');

// 외부에서 데이터를 가져옮
const datas = [
  {id: '1', uri: 'https://i.pravatar.cc/400'},
  {id: '2', uri: 'https://i.pravatar.cc/400'},
  {id: '3', uri: 'https://i.pravatar.cc/400'},
];

export default function FlatListScreen() {
  // 몇번째 이미지가 보여지는 관리 state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 필요에 의해서 만약 FlatList 에 접근하는 경우라면
  const flatListRef = useRef<FlatList>(null);

  // 목록 표현(사진을 한개, 한개씩 어떻게 보여줄지를 정의한다.)
  const renderItem = ({item}: {item: {uri: string; id: string}}) => (
    <Image source={{uri: item.uri}} style={styles.image} />
  );
  // 스크롤 할때 마다 처리 됨.
  const handleScroll = (event: any) => {
    // 몇번째 슬라이드인지 파악하기 위한 용도로 활용
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {width: '100%'}]}>
        <FlatList
          ref={flatListRef}
          data={datas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        />

        <View style={styles.indicateRow}>
          {datas.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width, // 사진은 화면 가로 크기만큼
    height: 300, // 높이는 300으로 고정
    resizeMode: 'cover', // 사진이 잘 안리게 채워요
  },
  indicateRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'hotpink',
  },
});
