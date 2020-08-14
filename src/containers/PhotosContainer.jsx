import React from "react";
import LatestList from "../components/LatestList";
import { useDispatch, useSelector } from "react-redux";
import { startGetPhotosActionCreator } from "../redux/modules/photo";
import PopularList from "../components/PopularList";
import { useEffect } from "react";

export default function PhotosContainer() {
  const photos = useSelector((state) => state.photos.photos);

  const dispatch = useDispatch();
  const getPhotos = React.useCallback(() => {
    dispatch(startGetPhotosActionCreator());
  }, [dispatch]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  const _photos = photos.sort((a, b) => a.downloads > b.downloads);
  const popPhotos = _photos.slice(0, 10);
  const latPhotos = _photos.slice(10).sort((a, b) => a.create_at > b.create_at);
  return (
    <div>
      <PopularList popPhotos={popPhotos}></PopularList>
      <LatestList latPhotos={latPhotos}></LatestList>
    </div>
  );
}
