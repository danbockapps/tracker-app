import { FC, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ReportUnit from './ReportUnit'
import { AppContext } from './appContext'

const Reports: FC = () => {
  const ctx = useContext(AppContext)

  return (
    <View style={styles.container}>
      {ctx.reports?.map((report, i) => (
        <View key={i}>
          <Text>Week {report.week_id}</Text>
          <View style={styles.row}>
            <ReportUnit report={report} propertyName='weight' />
            <ReportUnit report={report} propertyName='physact_minutes' />
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 15,
  },
  row: {
    flexDirection: 'row',
    display: 'flex',
  },
})

export default Reports
