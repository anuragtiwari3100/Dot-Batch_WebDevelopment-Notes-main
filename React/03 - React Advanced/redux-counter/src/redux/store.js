import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

export const store = configureStore({
    reducer: {                // <- Ye object hai jo batata hai kaunsa reducer kis state ko handle karega
    counter: CounterSlice    // // "counter" state ko counterReducer manage karega
  },
})
