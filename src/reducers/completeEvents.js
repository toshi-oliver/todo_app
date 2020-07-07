import { COMPLETE_EVENT, DELETE_COMPLETE_EVENT } from "../actions/index"

const completeEvents = (state= [], action) => {
  switch(action.type) {
    case COMPLETE_EVENT:
      // const completeEvent = {
      // }
      return state
    case DELETE_COMPLETE_EVENT:
      return []
    default:
      return state
  }
}
export default completeEvents