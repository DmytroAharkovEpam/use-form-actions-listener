import { spawn } from 'redux-saga/effects'

import { initUISagas } from './ui/sagas'

export default function* sagas() {
  yield spawn(initUISagas)
}
