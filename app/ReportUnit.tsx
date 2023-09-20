import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Report } from './appContext'
import colors from './colors'

interface Props {
  report: Report
  propertyName: keyof Report
}

const ReportUnit: FC<Props> = props => (
  <View style={styles.container}>
    <Text style={styles.title}>{getDisplayName(props.propertyName)}</Text>
    <Text>{props.report[props.propertyName]}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.purple,
  },
  title: {
    fontWeight: 'bold',
  },
})

const getDisplayName = (propertyName: keyof Report) => {
  switch (propertyName) {
    case 'weight':
      return 'Weight'
    case 'physact_minutes':
      return 'Physical Activity Minutes'
    default:
      return ''
  }
}

export default ReportUnit
