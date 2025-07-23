function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    for (let [i8, i9] = (() => {
            gc();
            return [0, 10];
        })();
        (() => {
            const v10 = i8 < i9;
            JSON.parse(44110n);
            return v10;
        })();
        i9--) {
    }
}
Object.defineProperty(v2, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f3 });
class C21 {
    static [v2] = v2;
}
gc();
