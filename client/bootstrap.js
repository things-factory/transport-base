import { store } from '@things-factory/shell'
import transportBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    transportBase
  })
}
