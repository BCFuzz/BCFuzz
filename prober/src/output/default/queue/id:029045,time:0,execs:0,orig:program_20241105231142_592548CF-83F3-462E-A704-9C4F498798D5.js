for (let i4 = 0, i5 = 10; Reflect.construct(Int32Array, [i5,i5]) < i5;) {
    i5--;
}
const v16 = new SharedArrayBuffer();
const v18 = new Uint32Array(v16);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const v23 = new Int8Array(v16);
    v23.set(v18);
}
for (let [i28, i29] = (() => {
        new F19(Int8Array, Int32Array);
        return [-3, 10];
    })();
    i28 < i29;
    i29--) {
}
gc();
