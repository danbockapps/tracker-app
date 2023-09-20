import { FC, Fragment, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppContext } from './appContext'

const Reports: FC = () => {
  const ctx = useContext(AppContext)

  return (
    <View style={styles.container}>
      {ctx.reports &&
        ctx.reports.map((report, i) => (
          <Fragment key={i}>
            <Text>Week {report.week_id}</Text>
            <Text>{JSON.stringify(report)}</Text>
          </Fragment>
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
})

export default Reports
