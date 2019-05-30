export const setTextFilter=(text="")=>{
    return {
    type:"setTextFilter",
    newFilters:text
    }
}

export const sortByAmount=()=>{
    return {
        type:"sortByAmount"
    }
}

export const sortByDate=()=>{
    return {
        type:"sortByDate"
    }
}
export const setStartDate=(date)=>{
    return {
        type:"setStartDate",
        startdate:date
    }
}

export const setEndDate=(date)=>{
    return {
        type:"setEndDate",
        endDate:date
    }
}