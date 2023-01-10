import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  message: [],
  initId: 0,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const generateId = state.initId + 1;
      state.initId = generateId;
      state.message.push({
        id: generateId,
        text: action.payload.text,
        type: action.payload.type,
      });
    },
    deleteMessage: (state, action) => {
      const indexDeleteMessage = state.message.findIndex(
        (item) => item.id === action.payload
      );
      console.log('indexDeleteMessage',indexDeleteMessage)
      if (indexDeleteMessage > -1) state.message.splice(indexDeleteMessage, 1);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(addToastMessage.fulfilled, (state, action) => {
  //     state.message.push({ name: "asdadad" });
  //     console.log("state", state.message);
  //   });
  // },
});

// Action creators are generated for each case reducer function
export const { deleteMessage, addMessage } = messageSlice.actions;

export default messageSlice.reducer;

export const addToastMessage = createAsyncThunk(
  "message/addToastMessage",
  async (message, { dispatch, getState }) => {
    const generateId = getState().message.initId + 1;
    await dispatch(addMessage(message));
    setTimeout(() => {
      dispatch(deleteMessage(generateId));
    }, 3000);
  }
);
