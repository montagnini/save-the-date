import { MediaCardList } from "./MediaCardList";
import { MediaDataHomens } from "./MediaData/MediaDataHomens";
import { MediaDataMulheres } from "./MediaData/MediaDataMulheres";

export const MediaCardDress = ({ type }) => {
  let list = MediaDataMulheres;
  if (type === 'men') {
    list = MediaDataHomens;
  }
  return <MediaCardList list={list}/>;
};
