import moment from 'moment';

export const filterExpense=(exp, { text, SortBy, startDate, endDate})=>{
    const filtered_expences=exp.filter((c)=>{
        const createdAtMoment= moment(c.createdAt);
        const match_start_date= startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true ;
        const match_end_date= endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
        const match_text= text==="" || c.description.toLowerCase().indexOf(text.toLowerCase()) > -1;
    return match_text && match_start_date && match_end_date;
    }).sort((a,b)=>{
    if(SortBy=='date'){
        return a.createdAt>=b.createdAt? -1 : 1;
    }else if(SortBy=='amount'){
        return a.amount>=b.amount? -1: 1;
    }
    });
    return filtered_expences;
    }