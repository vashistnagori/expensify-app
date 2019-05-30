
import moment from 'moment';

export const test_filters={
    text:"",
    SortBy:'date',
    startDate:null,
    endDate:null
}

export const test_filters2={
    text:"bill",
    SortBy:'amount',
    startDate:moment(0),
    endDate:moment(0).add(2,"days")
}
