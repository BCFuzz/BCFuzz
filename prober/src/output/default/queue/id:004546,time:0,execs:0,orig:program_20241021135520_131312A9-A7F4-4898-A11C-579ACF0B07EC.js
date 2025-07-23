function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    for (let i6 = 0, i7 = 10;
        (() => {
            const v9 = new Int32Array(i6, i6);
            new Uint8ClampedArray(v9);
            return i6 < i7;
        })();
        i7--) {
    }
}
Object.defineProperty(v2, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f3 });
const v20 = /C^xxx$/vgis;
class C21 {
    static [v2] = v2;
    [v2] = v20;
}
gc();
