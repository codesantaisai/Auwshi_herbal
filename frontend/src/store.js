import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/productsSlice";
import productReducer from './slices/productSlice';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';
import userReducer from './slices/userSlice'
import {
    createBlogReducer,
    getAllBlogsReducer,
    getBlogByIdReducer,
    deleteBlogReducer,
  } from "./reducer/blogReducer";
import {
createReportReducer,
getAllReportsReducer,
getReportByIdReducer,
deleteReportReducer
} from "./reducer/reportReducer"

const reducer = combineReducers({
    productsState: productsReducer,
    productState: productReducer ,
    authState: authReducer,
    cartState: cartReducer,
    orderState: orderReducer,
    userState: userReducer,
    AllBlogs: getAllBlogsReducer,
  creatBlog: createBlogReducer,
  deletBlog: deleteBlogReducer,
  BlogById: getBlogByIdReducer,

  AllReports: getAllReportsReducer,
  creatReport: createReportReducer,
  deletReport: deleteReportReducer,
  ReportById: getReportByIdReducer,

})


const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;