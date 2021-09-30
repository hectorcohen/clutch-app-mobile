import {configureStore} from "@reduxjs/toolkit";
import userCards from './slices/UserCard/index'

export default configureStore({
	reducer: {
		userCards
	}
})