import { FC } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import sharedStyles from './sharedStyles'
import importedStyles from './importedStyles'

interface Props {
  week?: number
  closeModal: () => void
}

const Entry: FC<Props> = props => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.week !== undefined}
      onRequestClose={props.closeModal}
    >
      <View style={importedStyles.centeredView}>
        <View style={importedStyles.modalView}>
          <TouchableOpacity style={styles.x} onPress={props.closeModal}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text style={styles.weekTitle}>Week {props.week}</Text>
          <TextInput
            placeholder='Enter your weight'
            keyboardType='numeric'
            style={sharedStyles.textInput}
          />
          <TextInput
            placeholder='Enter your minutes of physical activity'
            keyboardType='numeric'
            style={sharedStyles.textInput}
          />
          <TouchableOpacity style={sharedStyles.button}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  weekTitle: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  x: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
})

export default Entry
