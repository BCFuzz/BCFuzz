function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v8 = 0; v8 < 10; v8++) {
        for (let v9 = 0; v9 < 100; v9++) {
        }
        v2[this] ^= 1;
    }
}
const v10 = new F4(1, F0);
const v11 = v10.constructor;
new v11(F4, v11, 1, v11, F0);
gc();
