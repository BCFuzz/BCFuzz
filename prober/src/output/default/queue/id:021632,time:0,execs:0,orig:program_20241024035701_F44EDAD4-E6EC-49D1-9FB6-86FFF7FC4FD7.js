const v3 = new ArrayBuffer();
const o9 = {
    "a": 15809n,
    "c": 1073741824n,
    [ArrayBuffer](a5, a6, a7, a8) {
    },
    "d": v3,
    "b": v3,
    [v3]: v3,
    "e": 1073741824n,
};
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = new Int32Array(209);
    const v17 = [1073741824n];
    function f18() {
        const o19 = {
        };
        o19.constructor.assign(o19, a12);
        return o9;
    }
    const v23 = [f18];
    const v24 = v17.toSorted;
    for (let i27 = -3, i28 = 10; i27 < i28; i28--) {
    }
    Reflect.apply(v24, v16, v23);
}
const v36 = new F10(o9, v3);
const t28 = v36.constructor;
new t28(o9);
gc();
