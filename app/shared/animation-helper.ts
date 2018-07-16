import { View } from 'ui/core/view';
import { AnimationDefinition } from 'ui/animation';
import { AnimationCurve } from 'ui/enums';

const duration: number = 250;
const scaleFactor: number = 1.8;

export function fadeZoom(view: View) {
    return view.animate({
        opacity: 1.0,
        duration: 3000,
        scale: { x: 1.0, y: 1.0 }
    });
}

export function popAnimate(view: View) {
    const definitionPopUp: AnimationDefinition = {
        duration: duration,
        scale: { x: scaleFactor, y: scaleFactor },
        curve: AnimationCurve.easeIn
    };

    const definitionPopDown: AnimationDefinition = {
        duration: duration,
        scale: { x: 1.0, y: 1.0 },
        curve: AnimationCurve.easeInOut
    };

    return view.animate(definitionPopUp).then(() => view.animate(definitionPopDown));
}
