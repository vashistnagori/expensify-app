

export const auth_reducer = (ps={},action)=>{
    switch(action.type){
    case 'login':
    return {
    uid:action.uid
    };
    break;
    case 'logout':
    return {};
    break;
    default:
    return ps;
    break;
    }
};