import {trigger, state, transition, style, animate,animateChild, keyframes, group, sequence, query, stagger} from '@angular/animations';

export const animations =  [trigger('show', [
        transition('* => *', [
        
            style({ opacity:0 }),
            animate('.6s ease-out', style({ opacity:1})),
            query('@stagger', [
                animateChild() 
              ], {optional: true}),
              
            
        ])
    ]),trigger('switch', [
        transition('* => *', [
            style({ opacity:0 ,transform:"translateY(20px)"}),
            animate('.6s ease-out', style({ opacity:1,transform:"translateY(0px)"}))
            
        ])
    ]),trigger('stagger', [
        transition('* => *', [
            query(':enter', [
              style({ opacity: 0}),
              stagger('50ms', [
                animate('600ms ease', style({ opacity: 1 }))
              ])
            ])
          ])
    ])]

