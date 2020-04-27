import moment from 'moment'

const timeWithUTC = (time) => {
  const date = moment().utcOffset(time).format('HH:mm')
  return date
}

export default timeWithUTC
