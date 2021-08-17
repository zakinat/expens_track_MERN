export default (state,action)=>{
switch(action.type){
    case 'GET_TRANSACTIONS':
        return {
            ...state,
            loading:false,
            transactions:action.payload
        }
    case 'GET_TRANSACTIONS_ERROR':
        return {
            ...state,
            error:action.payload
       }
    case 'DELET_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
        }
        case 'ADD_TRANSACTION':
        return {
            ...state,
            transactions: [...state.transactions, action.payload]
        }
    default:
        return state
}
}