for (let i4 = 0, i5 = 10; Reflect.construct(Int32Array, [Reflect,Reflect,Reflect,Reflect]) < i5;) {
    i5--;
}
const v17 = new SharedArrayBuffer(64);
const v19 = new Uint32Array(v17);
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    const v24 = new Int8Array(v17);
    v24.set(v19);
}
for (let [i29, i30] = (() => {
        new F20();
        return [-3, 10];
    })();
    i29 < i30;
    i30--) {
}
gc();
