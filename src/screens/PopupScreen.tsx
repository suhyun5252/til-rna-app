import React, {useState} from 'react';
import {
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function PopupScreen() {
  // modal 보이기 state
  const [modalVisible, setModalVisble] = useState(false);
  //  확인가능
  const handleConfirm = () => {
    setModalVisble(false);
    Alert.alert('확인', '확인 버튼을 눌렀습니다.');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.view]}>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => setModalVisble(true)}>
          <Text style={styles.openButtonText}>안내보기</Text>
        </TouchableOpacity>

        <Modal transparent visible={modalVisible}>
          <View style={styles.modalBackground}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>🎉개인정보 안내</Text>
              <Text style={styles.modalContent}>
                이 앱은 사용자 정보를 저장하지 않습니다.
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisble(false);
                  }}
                  style={[styles.modalButton, {backgroundColor: '#b62424'}]}>
                  <Text style={{color: '#fff'}}>닫기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleConfirm();
                  }}
                  style={[styles.modalButton, {backgroundColor: '#4caf50'}]}>
                  <Text style={{color: '#fff'}}>확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  view: {
    width: '100%',
    backgroundColor: 'white',
  },
  openButton: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 10,
  },
  openButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalContent: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
});
