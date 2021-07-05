import { MediaCardList } from "./MediaCardList";
import { MediaDataHomens } from "./MediaData/MediaDataHomens";
import { MediaDataMulheres } from "./MediaData/MediaDataMulheres";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

export const MediaCardDress = ({ type }) => {
  let list = MediaDataMulheres;
  if (type === 'men') {
    list = MediaDataHomens;
  }
  return <MediaCardList list={list}/>;
};
