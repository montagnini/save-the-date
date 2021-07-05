import { MediaCardList} from './MediaCardList';
import {MediaDataGifts} from './MediaData/MediaDataGifts';

export const MediaCardGifts = (fundo) => {
    return(<MediaCardList fundo={fundo} list={MediaDataGifts}/>);
}