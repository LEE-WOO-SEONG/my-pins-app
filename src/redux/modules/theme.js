// import { createActions, handleActions } from 'redux-actions';

// const prefix = {
//   prefix: 'my-pins-app/theme',
// };

// export const { light, dark } = createActions('LIGHT', 'DARK', prefix);

// const lightMode = {
//   color: 'rgb(0 ,0, 0)',
//   bgColor: 'rgb(255, 255, 255)',
//   sideBtnColor: 'rgb(244, 93, 34)',
//   sideTabHover: 'rgba(244, 93, 34, 0.2)',
// };

// const darkMode = {
//   color: 'rgb(255, 255, 255)',
//   bgColor: 'rgb(21, 32, 43)',
//   sideBtnColor: 'rgb(29, 161, 242)',
//   sideTabHover: 'rgb(29, 161, 242, 0.2)',
// };

// const initialState = {
//   color: 'rgb(0 ,0, 0)',
//   bgColor: 'rgb(255, 255, 255)',
//   sideBtnColor: 'rgb(244, 93, 34)',
//   sideTabHover: 'rgba(244, 93, 34, 0.2)',
// };

// const themeReducer = handleActions({
//   LIGHT: (state, action) => ({
//     ...state,
//     lightMode,
//   }),
//   DARK: (state, action) => ({
//     ...state,
//     darkMode,
//   }),
//   initialState,
//   prefix,
// });

// export default themeReducer;
