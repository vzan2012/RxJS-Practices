import {
  first,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  scan,
  throttleTime,
} from "rxjs";

// Click Event
// fromEvent(document, "click").subscribe(() => console.log("clicked"));

// Scan Operator = Reduce functionality
// fromEvent(document, "click")
//   .pipe(scan((count) => count + 1, 0))
//   .subscribe((count) => console.log`Clicked ${count} times`);

// Flow Operator
// fromEvent(document, "click")
//   .pipe(
//     throttleTime(1000),
//     scan((count) => count + 1, 0)
//   )
//   .subscribe((count) => console.log(`You clicked ${count} times`));

// Map Operator
// fromEvent(document, "click")
//   .pipe(
//     throttleTime(1000),
//     map((event) => event.clientX),
//     scan((count, clientX) => count + clientX, 0)
//   )
//   .subscribe((count) => console.log(`You clicked ${count} times`));

// Observables
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

// Creation of Observables
// of(1, 2, 3, 4, 5, 6)
//   .pipe(map((x) => x * 3))
//   .subscribe((x) => console.log(`Value - ${x}`));

// First Operator
// of(1, 2, 3, 4, 5, 6)
//   .pipe(first())
//   .subscribe((x) => console.log(`Value - ${x}`));

// Multiple Subscriptions
const obs1 = interval(600);
const obs2 = interval(400);
const obs3 = interval(200);

const subscription = obs1.subscribe((x) => console.log(`First: ${x}`));
const childSubscriptionOne = obs2.subscribe((x) => console.log(`Second: ${x}`));
const childSubscriptionTwo = obs3.subscribe((x) => console.log(`Third: ${x}`));

childSubscriptionOne.add(childSubscriptionTwo);
subscription.add(childSubscriptionOne);

subscription.unsubscribe();
