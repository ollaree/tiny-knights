import { Subject } from 'rxjs';


export const createInterval = (ms: number) => {
  const observable = new Subject<number>();

  function createTimeout() {
    setTimeout(() => {
      observable.next(Date.now());
      createTimeout();
    }, ms);
  }

  createTimeout();

  return observable.asObservable();
};

export const animationInterval$ = createInterval(12);
