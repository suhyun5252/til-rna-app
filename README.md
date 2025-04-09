# Component

- https://reactnative.dev/docs/0.72/components-and-apis
- 참고사항 scss 및 css 는 사용하지 않는다.
- emotion 은 별도의 적용 과정이 필요하다.

## 실행하기

- `npm start`
- `a`

## View

- html 은 div의 역할을 수행함.
- View 는 css로 style 등을 셋팅
- View 는 옵션으로 style 이 있음.
- 아래는 인라인 스타일

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 20,
          backgroundColor: 'green',
          margin: 10,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#ff0000',
          width: 100,
          height: 200,
        }}
      />
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AboutScreen;
```

- 아래는 객체 변수 정의 스타일

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle} />
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    padding: 20,
    backgroundColor: 'green',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ff0000',
    width: 100,
    height: 200,
  },
});
export default AboutScreen;
```

- 일반적인 구성 : flex 를 많이 활용합니다.

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text>Hello </Text>
        <Text>Hello2 </Text>
      </View>
      <View style={styles.viewStyle2} />
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
export default AboutScreen;
```

## TEXT

- numberOfLines : 글의 행수
- ellipsizeMode : 말줄임 표현 (기본 tail)
- ellipsizeMode 는 numberOfLines 이 1인 경우 정상 작동함.
- ellipsizeMode 는 numberOfLines 이 2이상인 경우 tail.

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          officia?
        </Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: '#333',
    fontWeight: 'bold',
  },
});
export default AboutScreen;
```

- onPress : 클릭 이벤트를 처리

```tsx
<Text
  style={styles.text}
  numberOfLines={2}
  ellipsizeMode="tail"
  onPress={() => Alert.alert('클릭')}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officia?
</Text>
```

- selectable : 드래그 복사 가능 여부

```tsx
<Text
  style={styles.text}
  numberOfLines={2}
  ellipsizeMode="tail"
  selectable={true}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officia?
</Text>
```

- Text 중첩 가능

```tsx
<Text>
  Lorem ipsum dolor sit<Text style={{color: 'green'}}>야호</Text> amet
  consectetur adipisicing elit. Repudiandae, officia?
</Text>
```

## TextInput

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <TextInput style={styles.textInput} />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: '#333',
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    margin: 20,
  },
});
export default AboutScreen;
```

- placeholder : 안내문
- value : 값
- `onChangeText` : 텍스트 변경시 처리

```tsx
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, TextInput, Text} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInput}
          placeholder="이름을 입력하세요."
          value={name}
          onChangeText={setName}
        />
        <Text>{name}</Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: '#333',
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    margin: 20,
  },
});
export default AboutScreen;
```

- secureTextEntry : 비밀번호 입력 시 별표 표시

```tsx
<TextInput
  style={styles.textInput}
  placeholder="비밀번호를 입력하세요."
  secureTextEntry={true}
/>
```

- keyboardType 키패드 타입 정의

```bash
keyboardType="numeric" : 숫자 키패드
keyboardType="default" : 기본 키패드
keyboardType="email-address" : 이메일 키패드
keyboardType="phone-pad" : 전화번호 키패드
keyboardType="url" : url 키패드
keyboardType="number-pad" : 숫자 키패드
```

```tsx
<View style={styles.viewStyle}>
  <TextInput
    style={styles.textInput}
    placeholder="숫자를 입력하세요."
    keyboardType="numeric"
  />
</View>
```

- multiline : 여러 줄 입력 가능 여부

```tsx
<SafeAreaView style={styles.container}>
  <View style={styles.viewStyle}>
    <TextInput
      style={styles.textInput}
      placeholder="일반 키패드를 입력하세요."
      keyboardType="default"
      multiline={true}
    />
  </View>
</SafeAreaView>
```

- maxLength : 최대 입력 길이

```tsx
<TextInput style={styles.textInput} placeholder="10자 제한" maxLength={10} />
```

- autoCapitalize : 자동 대문자 변환

```tsx
<TextInput
  style={styles.textInput}
  placeholder="대문자 시작(Capitalize)"
  autoCapitalize="words"
/>
```

- returnKeyType : 엔터키 타입
- onSubmitEditing : 엔터키 타입 클릭 시 이벤트

```tsx
<TextInput
  style={styles.textInput}
  placeholder="대문자 시작"
  autoCapitalize="words"
  returnKeyType="done"
  onSubmitEditing={() => Alert.alert('엔터키')}
/>
```

## Button

### ! 버튼은 style Props 가 존재하지 않으므로 css 적용 불가

### ! CSS 적용을 한 버튼은 다른 컴포넌트로 대체(`TouchableOpacity, Pressable`)

- 기본 버튼
- title : 버튼 텍스트
- onPress : 이벤트 처리
- color : 버튼 색상 (ios 에서는 글자 색상)
- disabled : 버튼 비활성화 여부

```tsx
<Button
  title="클릭"
  onPress={() => Alert.alert('클릭')}
  color={'red'}
  disabled={true}
/>
```

## Image

- 기본형
- http 경로로 이미지 출력

```tsx
<Image
  style={{width: 200, height: 200}}
  source={{uri: 'https://picsum.photos/200/300?random=1'}}
/>
```

- 로컬 이미지 출력
- /assets 폴더에서 이미지 출력하기 : require 사용

```tsx
<Image source={require('../assets/images/logo.png')} />
```

- resizeMode : 이미지 크기 조정
- cover : 비율 유지 채우기 (이미지 잘림)
- cotain: 비율 유지 이미지 넘침 없음 (공백 있음)
- stretch : 비율 무시 이미지 넘침 있음
- repeat : 반복
- center : 가운데 정렬

```tsx
<Image
  style={{width: 200, height: 200}}
  source={{uri: 'https://picsum.photos/200/300?random=1'}}
  resizeMode="cover"
/>
```

- onError : 이미지 로딩 실패
- onLoadStart : 이미지 로딩 시작
- onLoad : 이미지 로딩 진행중
- onLoadEnd : 이미지 로딩 완료

```tsx
<Image
  style={{width: 200, height: 200}}
  source={{uri: 'https://picsum.photos/200/300?random=1'}}
  resizeMode="cover"
  onError={() => {
    Alert.alert('이미지 로딩 실패');
  }}
  onLoadStart={() => console.log('이미지로딩 시작')}
  onLoad={() => console.log('이미지로딩 진행중')}
  onLoadEnd={() => console.log('이미지로딩완료')}
/>
```

- blurRadius : 블러 효과

```tsx
<Image
  style={{width: 200, height: 200}}
  source={{uri: 'https://picsum.photos/200/300?random=1'}}
  resizeMode="cover"
  blurRadius={10}
/>
```

## ScrollView

- 내용이 너무 길어서 한 화면에 다 보여지지 않는 경우 스크롤 활용

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 100, backgroundColor: '#777'}}>
        <ScrollView>
          <Text>내용입니다.</Text>
          <Text>내용입니다.</Text>
          <Text>내용입니다.</Text>
          <Text>내용입니다.</Text>
          <Text>내용입니다.</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
```

- horizontal : 가로 스크롤

```tsx
<ScrollView horizontal={true}>
  <Text>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio deleniti ab
    a maiores, omnis
  </Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
</ScrollView>
```

- scrollEnabled : 스크롤 가능 여부

```tsx
<ScrollView scrollEnabled={false}>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
</ScrollView>
```

- onScroll : 스크롤 이벤트 처리
- scrollEventThrottle : 이벤트 발생 빈도 조절

```tsx
<ScrollView
  onScroll={event => console.log(event.nativeEvent.contentOffset.y)}
  scrollEventThrottle={16}>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
</ScrollView>
```

- contentContainerStyle : 스크롤 안쪽 스타일시트 설정

```tsx
<ScrollView
  contentContainerStyle={{
    padding: 20,
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  }}>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
  <Text>내용입니다.</Text>
</ScrollView>
```

- refreshing/onRefresh : 새로고침 가능

```tsx
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  RefreshControl,
} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 100, backgroundColor: '#bbb'}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                setTimeout(() => setRefreshing(false), 2000);
              }}
            />
          }>
          <Text>아래로 당기면 새로고침 실행</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
```

- showsVerticalScrollIndicator : 스크롤바 숨기기

```tsx
<ScrollView showsVerticalScrollIndicator={false} />
```

## `TouchableOpacity`

- style props 가 없어서 Button css 작업이 불가함.
- 다양한 css 용 Button 은 TouchableOpacity 로 대체

- 기본형

```tsx
<View>
  <TouchableOpacity onPress={() => Alert.alert('버튼클릭')}>
    <Text>버튼이야!</Text>
  </TouchableOpacity>
</View>
```

- style, activeOpacity : 스타일 작업

```tsx
<View>
  <TouchableOpacity
    onPress={() => Alert.alert('버튼클릭')}
    style={{
      backgroundColor: 'skyblue',
      padding: 15,
      borderRadius: 10,
      margin: 20,
    }}
    activeOpacity={0.75}>
    <Text>버튼이야!</Text>
  </TouchableOpacity>
</View>
```

- onPress : 클릭 이벤트
- onLongPress : 길게 눌렀을 때 이벤트

```tsx
<TouchableOpacity
  onPress={() => Alert.alert('버튼클릭')}
  onLongPress={() => Alert.alert('버튼 길게 클릭')}>
  <Text>버튼이야!</Text>
</TouchableOpacity>
```

- hitSlop : 터치 영역을 강제로 넓히기

```tsx
<TouchableOpacity
  onPress={() => Alert.alert('버튼클릭')}
  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
  <Text style={{backgroundColor: 'red'}}>버튼입니다</Text>
</TouchableOpacity>
```

- disabled : 버튼 비활성화

```tsx
<TouchableOpacity disabled={true}>
  <Text style={{backgroundColor: 'red'}}>버튼입니다</Text>
</TouchableOpacity>
```

## FlatList

- FlatList 는 화면에 보이는 목록만 갱신, 훨씬 성능이 좋다.
  - ScrollView 는 전체 데이터를 한번에 랜더링 한다.
- 많은 목록에서 효율적으로 관리가 가능

- data : 보여줄 데이터 `배열`
- renderItem : `함수`로서 각 아이템의 형태를 지정한다.
- keyExtractor : `함수`로서 각 항목에 고유 키를 지정한다.

```tsx
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const data = [
    {id: 1, title: '딸기'},
    {id: 2, title: '바나나'},
    {id: 3, title: '배'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
```

- horizontal : 가로 스크롤

```tsx
<FlatList
  horizontal={true}
  data={data}
  renderItem={({item}) => <Text>{item.title}</Text>}
  keyExtractor={item => item.id.toString()}
/>
```

- ListHeaderComponent : 헤더
- ListFooterComponent : 푸터
- ItemSeparatorComponent 구분선
- ListEmptyComponent : 자료가 없을 때

```tsx
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const data = [
    {id: 1, title: '딸기'},
    {id: 2, title: '바나나'},
    {id: 3, title: '배'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                backgroundColor: '#ddd',
              }}>
              과일 목록
            </Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: '#333',
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          )}
          ListFooterComponent={() => (
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                backgroundColor: '#ccc',
              }}>
              하단
            </Text>
          )}
          ListEmptyComponent={() => (
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              데이터가 없습니다.
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
```

- numColumns : 그리드 리스트 : 재실행하여서 확인 필요

```tsx
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const data = [
    {id: 1, title: '딸기'},
    {id: 2, title: '바나나'},
    {id: 3, title: '배'},
    {id: 4, title: '참외'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          numColumns={4}
          data={data}
          renderItem={({item}) => (
            <View style={{flex: 1, backgroundColor: '#ddd', margin: 10}}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
```

- refreshing/onRefresh : 새로 고침

```tsx
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const data = [
    {id: 1, title: '딸기'},
    {id: 2, title: '바나나'},
    {id: 3, title: '배'},
    {id: 4, title: '참외'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{flex: 1, margin: 10}}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => setRefreshing(false), 2000);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
```

## SafeAreaView

- 화면상의 안전한 공간, 즉, 상단 노치, 하단 홈바 등을 제외한 영역에 배치
- SafeAreaView 로 배치되지 않으면 상단, 하단, 기본 영역이 겹침
- 옵션은 style

## Alert

- 알림창

```tsx
<View>
  <Button
    title="버튼"
    onPress={() => {
      Alert.alert('반가워요');
    }}
  />
</View>
```

- 기본형식

```tsx
Alert.alert(
  title: string,  // 알림 제목
  message?: string // 알림 본문 (생략가능)
  buttons?: AlertButton[], // 버튼들의 배열
  options?: AlertOptions  // 추가 설정
)
```

```tsx
<Button
  title="버튼"
  onPress={() => {
    Alert.alert('반가워요', '메시지입니다.', [
      {text: '확인', onPress: () => console.log('반가워')},
    ]);
  }}
/>
```

- 일반적인 Alert 확인과 취소 버튼

```tsx
import React, {useState} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const data = [
    {id: 1, title: '딸기'},
    {id: 2, title: '바나나'},
    {id: 3, title: '배'},
    {id: 4, title: '참외'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="버튼"
          onPress={() => {
            Alert.alert('반가워요', '메시지입니다.', [
              {
                text: '확인',
                style: 'default',
                onPress: () => console.log('확인이에요'),
              },
              {
                text: '등록',
                style: 'destructive',
                onPress: () => console.log('등록이에요'),
              },
              {
                text: '취소',
                style: 'cancel',
                onPress: () => console.log('취소입니다'),
              },
            ]);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
```

## Modal

- 팝업창
- visible : 팝업창 보여줄지 말지 결정(useState 활용)
- transparent : 투명도
- animationType : 애니메이션 타입

```tsx
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="버튼"
          onPress={() => {
            Alert.alert('모달창', '모달창보기 예제입니다.', [
              {
                text: '모달보기',
                style: 'default',
                onPress: () => setIsVisible(true),
              },
            ]);
          }}
        />
      </View>

      <Modal visible={isVisible} transparent={false} animationType="fade">
        <View>
          <Text>안녕하세요.</Text>
          <Button title="창닫기" onPress={() => setIsVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

## StatusBar

- 상단 상태바의 스타일 조정
- backgroundColor, barStyle : 배경색과 아이콘 색상(dark-content, light-content, default)
- iOS 는 제외

```tsx
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'hotpink'} barStyle={'default'} />
      <View>
        <Text>About 내용</Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

## Pressable

- 사용자 터치관련한 기능 (관련기능 Button, TouchableOpacity)
- onPress, onPressIn, onPressOut, style : 누를때, 누르기 시작시, 손을 뗄때, 스타일

```tsx
import React from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>About 내용</Text>
        <Pressable
          onPress={() => console.log('onPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          style={({pressed}) => ({
            backgroundColor: pressed ? 'red' : 'green',
            padding: 10,
          })}>
          <Text>버튼</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

## ActivityIndicator

- 로딩 컴포넌트
- size, color : 크기는 "large", "small"

```tsx
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = (): JSX.Element => {
  // 로딩 플래그
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // 클린업
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>About 내용</Text>
        {loading ? (
          <>
            <ActivityIndicator size={'large'} color={'hotpink'} />
            <Text>로딩중....</Text>
          </>
        ) : (
          <Text>로딩완료</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

## Switch

- 토글기능
- value : 현재 useState 의 값(true, false)
- onValueChange : 토글이 될 때마다 실행됨
- thumbColor : 버튼 색상
- trackColor : 토글 배경 색상

```tsx
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  // 토글에서 관리될 state
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isEnabled ? '#000000' : '#ffffff'},
      ]}>
      <View style={styles.viewContainer}>
        <Text style={[styles.text, {color: isEnabled ? '#ffffff' : '#000000'}]}>
          {isEnabled ? '다크 모드입니다' : '라이트 모드입니다.'}
        </Text>
        <Switch
          value={isEnabled}
          onValueChange={setIsEnabled}
          thumbColor={isEnabled ? '#bbb' : '#fff'}
          trackColor={{
            true: '#eee',
            false: '#333',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default AboutScreen;
```

## Picker

- 드롭다운(리스트)
- https://docs.expo.dev/versions/latest/sdk/picker/

```bash
npm i @react-native-picker/picker
```

- 실행 : `npm start` -> `a`

- selectedValue : 선택값
- onValueChange : 값이 바뀔때 마다실행
- mode : 스타일 ("dialog : 모달, "dropdown" : 드롭다운)
- enabled : 비활성화 여부
- `<Picker.Item label="사과" value={'apple'} />` : 아이템 추가

```tsx
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  // 초기 선택된 목록관련 state
  const [selected, setSelected] = useState<string>('banana');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>목록에서 선택하시오.</Text>
        <View>
          <Picker
            selectedValue={selected}
            onValueChange={itemValue => setSelected(itemValue)}
            mode="dialog">
            <Picker.Item label="사과" value={'apple'} />
            <Picker.Item label="바나나" value={'banana'} />
            <Picker.Item label="배" value={'bae'} />
            <Picker.Item label="참외" value={'melon'} />
          </Picker>
        </View>
        <Text style={{color: 'red'}}>선택한 과일: {selected}</Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AboutScreen;
```

# 상식

## `i18n` 에 대한 상식

- 국제화를 의미하는 약어
- 앱이나 웹사이트에서 여러 언어를 지원하기 위한 기술/방식
- Internationalization → I + 18글자 + N = i18n
- react-i18next i18next i18next-browser-languagedetector 등
- react-native-localize (기기 언어 감지용)
