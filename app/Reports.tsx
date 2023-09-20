import { FC, useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ReportUnit from './ReportUnit'
import { AppContext } from './appContext'
import Entry from './Entry'

const Reports: FC = () => {
  const [weekToEdit, setWeekToEdit] = useState<number>()
  const ctx = useContext(AppContext)

  return (
    <View style={styles.container}>
      {ctx.reports?.map((report, i) => (
        <TouchableOpacity key={i} onPress={() => setWeekToEdit(report.week_id)}>
          <Text>Week {report.week_id}</Text>
          <View style={styles.row}>
            <ReportUnit report={report} propertyName='weight' />
            <ReportUnit report={report} propertyName='physact_minutes' />
          </View>
        </TouchableOpacity>
      ))}
      <Entry week={weekToEdit} closeModal={() => setWeekToEdit(undefined)} />
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
