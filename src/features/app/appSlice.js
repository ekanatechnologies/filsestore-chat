import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channelId: null,
  channelName: null,
  
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId=action.payload.channelId;
      state.channelName=action.payload.channelName
      
     
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selecctChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
