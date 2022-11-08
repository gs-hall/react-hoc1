// функция, которая делает дату "красивой"

import moment from "moment";

export default function getPrettyDate({ ...props }) {
  if (props.date) {
    var currentDate = moment();
    var date = moment(props.date);
    var diff = currentDate.diff(date, 'minutes');
    props.date = (diff < 60) ? diff+" минут назад" :
      (diff < 60) ? Math.floor(diff/60)+" часов назад" :
      Math.floor(diff/60/24)+" дней назад";
    };
  return (props);
};
