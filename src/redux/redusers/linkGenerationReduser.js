import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const generationSlice = createSlice({
  name: "generation",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getLink.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLink.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getLink.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getLink = createAsyncThunk(
  "get/linkGenerator",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://messchat-service.onrender.com/room`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: window.location.href }),
        }
      );

      if (!response.ok) throw new Error("Failed to generate link");

      const { link } = await response.json();

      return link;
    } catch (error) {
      console.error("Failed to fetch:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const linkGenerationSlice = generationSlice.reducer;
