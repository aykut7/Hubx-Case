import { configureStore } from "@reduxjs/toolkit";
import faqSlice from "./slices/faqSlice";
import  categoriesSlice  from "./slices/categoriesSlices";

export const store = configureStore({
  reducer: {
    faq: faqSlice,
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
