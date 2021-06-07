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
      style({ top: '100%', opacity: 0.5 })
    ], { optional: true }),
    query(':leave', [
      style({ visibility: 'hidden' })
    ], { optional: true }),
    group([
      query(':enter', [
        animate('1000ms ease-out', style({ top: '-100%', opacity: 1 }))
      ], { optional: true })
    ]),
  ]),
]);

