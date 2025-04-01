import { configureStore } from '@reduxjs/toolkit'
import sellerNavbarSlice from '@/app/myslices'

export const store = configureStore({
  reducer: {
        sellerNavbar: sellerNavbarSlice,
  },
})


// export { store}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch