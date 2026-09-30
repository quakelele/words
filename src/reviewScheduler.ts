import type {Word} from './storageService';
export type Rating='Forgot'|'Hard'|'Easy';
export const isDue=(w:Word,now=Date.now())=>!w.review.nextReviewAt||Date.parse(w.review.nextReviewAt)<=now;
export function scheduleReview(w:Word,rating:Rating,now=new Date()):Word{const repetitions=rating==='Forgot'?0:w.review.repetitions+1;const steps=[1,3,7,14,30,60];const interval=rating==='Forgot'?10/1440:rating==='Hard'?Math.max(.5,w.review.interval*.75):Math.max(steps[Math.min(repetitions-1,5)],w.review.interval*1.5);return {...w,status:rating==='Easy'&&repetitions>=4?'learned':'learning',updatedAt:now.toISOString(),review:{repetitions,interval,nextReviewAt:new Date(now.getTime()+interval*86400000).toISOString(),lastReviewedAt:now.toISOString()}};}
