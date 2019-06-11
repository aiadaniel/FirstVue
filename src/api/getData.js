import {fetch} from './fetch'

export const getHotTag = data => fetch('/tag/hot');

export const getBlogList = data => fetch('/blog/list');

export const getLastRecentUser = data => fetch('/user/lastrecent');
