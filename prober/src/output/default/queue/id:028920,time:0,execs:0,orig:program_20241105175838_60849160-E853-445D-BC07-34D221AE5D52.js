const v2 = new Float32Array(89);
function f3() {
    return 89;
}
const v4 = [-4294967297,12,13,1073741823,-3,-3,11,-128,-9007199254740991,-970364385];
const v5 = [-40966,-1,4294967295,23650];
function f7(a8, a9, a10, a11) {
    a9[1] = a9;
    const o12 = {
        __proto__: v5,
    };
    return o12;
}
const v13 = f7(-4096, v4);
for (let i16 = -3, i17 = 10; i17--, i16 < i17;) {
}
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a28(a29, v13); } catch (e) {}
    for (let v31 = 0; v31 < 5; v31++) {
        Object.defineProperty(v13, v31, { configurable: true, get: f7, set: f3 });
    }
    v2.toLocaleString(a28);
}
new F25(196.25100004624983, F25);
gc();
