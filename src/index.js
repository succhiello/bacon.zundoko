import _ from 'lodash';
import Bacon from 'baconjs';

const zun = 'ズン',
      doko = 'ドコ',
      kiyoshi = 'キ・ヨ・シ！';

export function run(items=[zun, doko], terminator=[zun, zun, zun, zun, doko], endMessage=kiyoshi) {

    if (!_.every(terminator, _.includes.bind(null, items))) {
        throw new Error(`invalid argument: items=[${items}] / terminator=[${terminator}].`);
    }

    Bacon.repeat(() => Bacon.once(_.sample(items)))
    .doLog()
    .slidingWindow(terminator.length)
    .takeWhile((xs) => !_.isEqual(xs, terminator))
    .onEnd(console.log.bind(console, endMessage));
}