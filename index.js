const canvasAPI = require('node-canvas-api')
const writeToCSV = require('./writeToCSV')

const getPageViewsForUsers = (studentIds, startTime, endTime) => {
  Promise.all(
    studentIds.map(studentId => canvasAPI
      .getUserPageViews(studentId, `start_time=${startTime}`, `end_time=${endTime}`, 'per_page=100')
      .then(pageViews => writeToCSV(pageViews, `${studentId}-pageviews.csv`))
    )
  )
}

getPageViewsForUsers([/* add Canvas user IDs */], /* add start date */, /* add end date */)
