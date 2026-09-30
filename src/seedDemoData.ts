import {emptyData,newWord} from './storageService';
export function seedDemoData(){if(!import.meta.env.DEV)throw new Error('Demo data is available only in development.');return {...emptyData(),words:[newWord('achievement','достижение'),newWord('environment','окружающая среда'),newWord('improve','улучшать')]};}
