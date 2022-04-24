import {
  count,
  debounceTime,
  delay,
  distinct,
  elementAt,
  filter,
  first,
  from,
  fromEvent,
  switchMap,
  interval,
  last,
  map,
  max,
  mergeMap,
  min,
  Observable,
  of,
  pluck,
  scan,
  skip,
  take,
  takeLast,
  takeWhile,
  tap,
  throttleTime,
} from "rxjs";

/* Click Event */
// fromEvent(document, "click").subscribe(() => console.log("Page clicked"));
// fromEvent(mybutton, "click").subscribe(() => console.log("Button Clicked !!!"));
// fromEvent(mybutton, "click").subscribe((data) => console.log(data));

/* Scan Operator = Reduce functionality */
// fromEvent(document, "click")
//   .pipe(scan((count) => count + 1, 0))
//   .subscribe((count) => console.log`Clicked ${count} times`);

/* Flow Operator */
// fromEvent(document, "click")
//   .pipe(
//     throttleTime(1000),
//     scan((count) => count + 1, 0)
//   )
//   .subscribe((count) => console.log(`You clicked ${count} times`));

/* Map Operator */
// fromEvent(document, "click")
//   .pipe(
//     throttleTime(1000),
//     map((event) => event.clientX),
//     scan((count, clientX) => count + clientX, 0)
//   )
//   .subscribe((count) => console.log(`You clicked ${count} times`));

/* Observables */
// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// console.log(`Before Subscribe`);
// observable.subscribe(
//   (x) => console.log`Received Value: ${x}`,
//   (err) => `Received error: ${err}`,
//   () => console.log`Just Completed`
// );
// console.log(`After Subscribe`);

/* Of Operator */
// of(1, 2, 3, 4, 5, 6)
//   .pipe(map((x) => x * 3))
//   .subscribe((x) => console.log(`Value - ${x}`));

/* First Operator */
// of(1, 2, 3, 4, 5, 6)
//   .pipe(first())
//   .subscribe((x) => console.log(`Value - ${x}`));

/* Multiple Subscriptions */
// const obs1 = interval(600);
// const obs2 = interval(400);
// const obs3 = interval(200);

// const subscription = obs1.subscribe((x) => console.log(`First: ${x}`));
// const childSubscriptionOne = obs2.subscribe((x) => console.log(`Second: ${x}`));
// const childSubscriptionTwo = obs3.subscribe((x) => console.log(`Third: ${x}`));

// childSubscriptionOne.add(childSubscriptionTwo);
// subscription.add(childSubscriptionOne);

// subscription.unsubscribe();

/* From Operator */
// from([10, 20, 30, 40])
//   .pipe(map((data) => data * 2))
//   .subscribe((data) => console.log(data));

/* debounceTime Operator */
// fromEvent(document, "click")
//   .pipe(debounceTime(3000))
//   .subscribe((data) =>
//     console.log(
//       `Example - debounceTime operator - executed after 3 sec - when page clicked`
//     )
//   );

/* Take Operator */
// from([10, 20, 30, 40])
//   .pipe(take(3))
//   .subscribe((data) => console.log(data));

/* takeWhile Operator */
// from([10, 20, 30, 40])
//   .pipe(takeWhile((data) => (data.length > 30 ? true : false)))
//   .subscribe((data) => console.log(data));

/* takeLast Operator */
// from([10, 20, 30, 40])
//   .pipe(takeLast(2))
//   .subscribe((data) => console.log(data));

/* first Operator */
// from([10, 20, 30, 40])
//   .pipe(first())
//   .subscribe((data) => console.log(data));

/* last Operator */
// from([10, 20, 30, 40])
//   .pipe(last())
//   .subscribe((data) => console.log(data));

/* elementAt Operator */
// from([10, 20, 30, 40])
//   .pipe(elementAt(3))
//   .subscribe((data) => console.log(data));

/* Filter Operator */
// from([10, 20, 30, 40])
//   .pipe(filter((data) => (data / 30 === 1 ? true : false)))
//   .subscribe((data) => console.log(data));

/* Distinct Operator */
// from([10, 10, 20, 20, 30, 40, 30, 50, 60, 70, 30, 10, 20, 80, 90])
//   .pipe(distinct())
//   .subscribe((data) => console.log(data));

/* Skip Operator */
// from([10, 20, 30, 40])
//   .pipe(skip(3))
//   .subscribe((data) => console.log(data));

/* Count Operator */
// from([10, 20, 30, 40])
//   .pipe(count())
//   .subscribe((data) => console.log(data));

/* Max Operator */
from([10, 20, 30, 40, 100])
  .pipe(max())
  .subscribe((data) => console.log(data));

/* Min Operator */
from([10, 20, 30, 40, 100])
  .pipe(min())
  .subscribe((data) => console.log(data));

/* Pluck Operator */
const testObj = [
  {
    name: "ABC",
    country: "IN",
  },
  {
    name: "DEF",
    country: "FR",
  },
  {
    name: "XYZ",
    country: "US",
  },
];
from(testObj)
  .pipe(
    pluck("name"),
    tap((data) => console.log(data))
  )
  .subscribe();

/*  mergeMap Operator */
// const savePosition = (position) => {
//   return of(position).pipe();
// };

// fromEvent(document, "click")
//   .pipe(
//     mergeMap((data) =>
//       savePosition({
//         x: data.clientX,
//         y: data.clientY,
//         time: new Date(),
//       })
//     )
//   )
//   .subscribe((data) => console.log(data));

/* switchMap Operator */
const clickBtn = document.querySelector("#click");
const obs1$ = fromEvent(clickBtn, "click");
const obs2$ = interval(1000);

/* Doesn't cancel the previous emit values (starts with another new emit values along with the old emited values) */
// obs1$.subscribe((data) => obs2$.subscribe((data) => console.log(data)));
obs1$.pipe(switchMap((data) => obs2$)).subscribe((data) => console.log(data));
