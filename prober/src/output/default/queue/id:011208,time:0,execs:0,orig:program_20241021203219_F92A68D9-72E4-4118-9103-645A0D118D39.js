function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    for (let i6 = 0, i7 = 10;
        (() => {
            const v8 = i6 < i7;
            try { JSON.stringify(44110n); } catch (e) {}
            return v8;
        })();
        i7--) {
    }
}
Object.defineProperty(v2, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f3 });
class C19 {
    static [v2] = v2;
}
gc();
