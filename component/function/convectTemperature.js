//convert temperature and return an array of objects of these
// values [{'format' : 'F', 'value' : number}]

const temperatureCovert= (result) => {
    return [
        {'format' : 'F', 'value' : Math.floor(result)},
        {'format' : 'C', 'value' : Math.floor((result -32) * (5/9)) },
        {'format' : 'K', 'value' : Math.floor(((result -32) * (5/9) + 273)) }
    ]
}

export default  temperatureCovert;