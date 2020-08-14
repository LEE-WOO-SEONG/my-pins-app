// import { handleActions } from "redux-actions";
import { put, delay, call, takeLatest } from "redux-saga/effects";
import PhotoService from "../../services/PhotoService";

const prefix = "my-pins-app/photo";

export const START = `${prefix}/START`;
export const SUCCESS = `${prefix}/SUCCESS`;
export const FAIL = `${prefix}/FAIL`;
export const TOGGLE = `${prefix}/TOGGLE`;

const startGetPhotos = () => {
  return {
    type: START,
  };
};
const successGetPhotos = (photos) => {
  return {
    type: SUCCESS,
    photos,
  };
};
const failGetPhotos = (error) => {
  return {
    type: FAIL,
    error,
  };
};
export const togglePhotos = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};

const initialState = {
  loading: false,
  photos: [],
  error: null,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        loading: true,
        photos: [],
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        photos: action.photos,
        error: null,
      };
    case FAIL:
      return {
        loading: false,
        photos: [],
        error: action.error,
      };
    case TOGGLE:
      const _photos = [...state.photos];
      const targetIndex = _photos.findIndex((photo) => photo.id === action.id);
      _photos[targetIndex].didIliked = !_photos[targetIndex].didIliked;
      return {
        loading: false,
        photos: _photos,
        error: action.error,
      };
    default:
      return state;
  }
};

const START_GET_PHOTOS_SAGA = "START_GET_PHOTOS_SAGA";

export const startGetPhotosActionCreator = () => ({
  type: START_GET_PHOTOS_SAGA,
});

function* startGetPhotosSaga(action) {
  try {
    yield put(startGetPhotos());
    yield delay(2000);
    const photos = yield call(PhotoService.getPhotos);
    yield put(successGetPhotos(photos));
  } catch (error) {
    yield put(failGetPhotos(error));
  }
}

// saga
export function* photosSaga() {
  yield takeLatest(START_GET_PHOTOS_SAGA, startGetPhotosSaga);
}

export default photoReducer;
