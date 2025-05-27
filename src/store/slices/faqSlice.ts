import { ApiUrl } from '@/constants';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface FaqItem {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

interface FaqState {
  faq: FaqItem[];
  loading: boolean;
  error: string | null;
}

const initialState: FaqState = {
  faq: [],
  loading: false,
  error: null,
};

// ✅ API'den verileri getiren thunk
export const fetchFaqs = createAsyncThunk<FaqItem[]>(
  'faq/fetchFaqs',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${ApiUrl}/getQuestions`);
      return response.data as FaqItem[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqs.fulfilled, (state, action: PayloadAction<FaqItem[]>) => {
        state.faq = action.payload;
        state.loading = false;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default faqSlice.reducer;
