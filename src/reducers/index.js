import { combineReducers } from "redux"

import events from "./events"
import completeEvents from "./completeEvents"
// combineReducersによりReducerを複数管理する。
export default combineReducers({ events, completeEvents})