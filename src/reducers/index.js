import { INITIAL_QUERY, CREATE_EVENT, DELETE_EVENT, COMPLETE_EVENT} from "../actions"

// action = {
//  id: 1
//  type: "CREATE_EVENT"
//  body: "2020年に東京でオリンピックが開催されます"
//}
//#before
//state = []
//#after
//state = [{
// id: 1
//  type: "CREATE_EVENT"
//  body: "2020年に東京でオリンピックが開催されます"
//  status: 
//}]
//
const events = (state = [], action) => {
  switch(action.type) {
    case INITIAL_QUERY:
      return action.event;
    case CREATE_EVENT:
      const event = { body: action.body ,status: action.status}
      const length = state.length
      const id = length === 0 ? 1 : state[length -1].id + 1
      return [...state, {id, ...event }] //スプレッド演算子の一番後ろに要素を追加
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id)
    case COMPLETE_EVENT:
      return state.map((event) => {
        if (event.id === action.id) {
          event.status = "true";
        }
        return event;
        });

    default:
      return state
  }
}

export default events