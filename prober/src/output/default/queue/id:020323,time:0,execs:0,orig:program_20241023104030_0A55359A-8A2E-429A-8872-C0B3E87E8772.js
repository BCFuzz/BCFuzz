function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = 0.6195659885045093 + v2;
function f5() {
    return v4;
}
const v7 = String.prototype;
for (let i10 = 10, i11 = 10;
    (() => {
        const v12 = -13369 < i11;
        Object.defineProperty(v7, "e", { configurable: true, enumerable: true, set: f5 });
        return v12;
    })();
    i11--) {
}
gc();
