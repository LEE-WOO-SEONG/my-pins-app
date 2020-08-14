import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetPhotosActionCreator } from "../redux/modules/photo";
import PopularList from "../components/PopularList";
import LatestList from "../components/LatestList";

export default function PhotosContainer() {
  const photos = useSelector((state) => state.photos.photos);
  const _photos = photos.sort((a, b) => a.downloads > b.downloads);
  const popPhotos = _photos.slice(0, 10);
  const latPhotos = _photos.slice(10);
  // const latPhotos = _photos.slice(10).sort((a, b) => a.create_at > b.create_at);

  const dispatch = useDispatch();
  const getPhotos = React.useCallback(() => {
    dispatch(startGetPhotosActionCreator());
  }, [dispatch]);
  useEffect(() => {
    if (!photos.length) getPhotos();
  }, [getPhotos, photos.length]);
  return (
    <div>
      <PopularList popPhotos={popPhotos}></PopularList>
      <LatestList latPhotos={latPhotos}></LatestList>
    </div>
  );
}
