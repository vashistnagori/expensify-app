import moment from 'moment';


const defaultFilterState={
    text:"",
    SortBy:'date',
    startDate:moment().startOf("month"),
    endDate:moment().endOf("month")
}

export const filter_reducer=(ps=defaultFilterState,action)=>{
    switch(action.type){
        case("setTextFilter"):
        return {...ps,text:action.newFilters};
        break;
        case("sortByAmount"):
        return {...ps, SortBy:'amount'};
        break;
        case("sortByDate"):
        return {...ps, SortBy:'date'};
        break;
        case("setStartDate"):
        return {...ps, startDate:action.startdate};
        break;
        case("setEndDate"):
        return {...ps, endDate:action.endDate};
        break;
        default:
        return ps;
    }
    }