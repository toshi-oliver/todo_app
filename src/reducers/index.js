import { combineReducers } from "redux"

import events from "./events"
// combineReducersによりReducerを複数管理する。
export default combineReducers({ events })