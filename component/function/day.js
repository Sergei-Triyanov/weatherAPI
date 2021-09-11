const day = (format, next = 0) => {

    let date = new Date();
    let day = date.getDay() + next;

    const daysArr = {
        0 : ['Sun.', 'Sunday'],
        1 : ['Mon.','Monday'],
        2 : ['Tue.', 'Tuesday'],
        3 : ['Wed.', 'Wednesday'],
        4 : ['Thu.', 'Thursday'],
        5 : ['Fri.','Friday'],
        6 : ['Sat.', 'Saturday'],
    }

    if(format === 'short') {
        return day !== 7 ? daysArr[day][0] : daysArr[0][0]
    }
    return day !== 7 ? daysArr[day][1] : daysArr[0][1]
}

export default  day;