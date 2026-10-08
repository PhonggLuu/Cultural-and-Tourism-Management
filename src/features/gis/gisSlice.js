// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   activeLayers: {
//     diTich: true,
//     quyHoach: false,
//     moiTruong: false,
//   },
//   selectedFeature: null,
// };

// const gisSlice = createSlice({
//   name: "gis",
//   initialState,
//   reducers: {
//     toggleLayer: (state, action) => {
//       const layerKey = action.payload;
//       state.activeLayers[layerKey] =
//         !state.activeLayers[layerKey];
//     },

//     setSelectedFeature: (state, action) => {
//       state.selectedFeature = action.payload;
//     },
//   },
// });

// export const {
//   toggleLayer,
//   setSelectedFeature,
// } = gisSlice.actions;

// export default gisSlice.reducer; mặc định

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDiTich } from "@/services/diTichService";

export const fetchDiTichs = createAsyncThunk(
  "gis/fetchDiTichs",
  async () => {
    return await getAllDiTich();
  }
);

const initialState = {
  activeLayers: {
    diTich: true,
    quyHoach: false,
    moiTruong: false,
  },

  selectedFeature: null,

  diTichData: [],

  loading: false,

  error: null,
};

const gisSlice = createSlice({
  name: "gis",

  initialState,

  reducers: {
    toggleLayer: (state, action) => {
      const layerKey = action.payload;
      state.activeLayers[layerKey] =
        !state.activeLayers[layerKey];
    },

    setSelectedFeature: (state, action) => {
      state.selectedFeature = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchDiTichs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchDiTichs.fulfilled, (state, action) => {
        state.loading = false;
        state.diTichData = action.payload;
      })

      .addCase(fetchDiTichs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  toggleLayer,
  setSelectedFeature,
} = gisSlice.actions;

export default gisSlice.reducer;