function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 458127070;
    this.c = 458127070;
}
new F0();
new F0();
const v5 = new F0();
v5.h;
try { new WeakMap(); } catch (e) {}
new WeakMap();
function f10() {
    return WeakMap;
}
const v15 = new Map();
const v16 = v15.constructor;
const v17 = new v16();
for (let [i21, i22] = (() => {
        0 >> 0;
        return [0, 10];
    })();
    (() => {
        i21 % i21;
        const v24 = i21 < i22;
        v24 && v24;
        return v24;
    })();
    i22 != i22, i22--) {
    const v33 = new Uint8ClampedArray(v16);
    const v34 = v17.set(v33);
    try { v34.set(i21, i21); } catch (e) {}
    v34.delete(v33);
}
gc();
