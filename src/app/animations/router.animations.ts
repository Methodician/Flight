import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
  return slideToRight();
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({}/*{position:'fixed', width:'100%'}*/)),
    state('*', style({}/*{position:'fixed', width:'100%'}*/)),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({ transform: 'translateX(-100%)', position: 'fixed' }),
      animate('380ms ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({ transform: 'translateX(0%)', position: 'fixed' }),
      animate('380ms ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
  ]);
}