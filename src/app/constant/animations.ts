import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const FADE = trigger('fade', [
  state('false', style({ opacity: 0 })),
  state('true', style({ opacity: 1 })),
  transition('false => true', animate('2000ms ease-in')),
  transition('true => false', animate('2000ms ease-out')),
]);
export const INOUT = trigger('inOut', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('1s ease-out', style({ height: 300, opacity: 1 })),
  ]),
  transition(':leave', [
    style({ height: 0, opacity: 1 }),
    animate('1s ease-in', style({ height: 0, opacity: 0 })),
  ]),
]);
export const leave = trigger('animation', [
  transition(':enter', [
    style({ height: '0px', 'padding-top': '0', 'padding-bottom': '0' }), // initial
    animate(
      '0.5s',
      style({ height: '*', 'padding-top': '*', 'padding-bottom': '*' })
    ), // final
  ]),
  transition(':leave', [
    style({
      height: '*',
      'padding-top': '*',
      'padding-bottom': '*',
      opacity: 1,
    }), // initial
    animate(
      '0.5s',
      style({
        height: '0px',
        'padding-top': '0',
        'padding-bottom': '0',
        opacity: 0,
      })
    ), // final
  ]),
]);
// prettier-ignore
export const left = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
        optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
        optional: true,
      }),
    ]),
  ];

// prettier-ignore
export const right = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
        optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
        optional: true,
      }),
    ]),
  ];

