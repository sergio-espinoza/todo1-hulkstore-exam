import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [
  transition('ToTop <=> *', [
    query(':enter, :leave', [
      style({
        position: 'relative',
        overflow: 'hidden',
      })
    ]),
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      style({ top: '0%' })
    ], { optional: true }),
    group([
      query(':enter', [
        animate('1000ms ease-out', style({ opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        animate('1000ms ease-out', style({ top: '-100%' }))
      ], { optional: true })
    ]),
  ]),
]);

