function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    for (let [i11, i12] = (() => {
            const v5 = `
                new SharedArrayBuffer();
            `;
            eval(v5);
            return [0, 10];
        })();
        i11 < i12;
        i12--) {
    }
}
Object.defineProperty(v2, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f3 });
class C21 {
    static [v2] = v2;
}
gc();
