const v2 = new SharedArrayBuffer(64);
const v5 = new Uint32Array(v2);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new Uint16Array(v2);
    v10.set(v5);
}
for (let [i15, i16] = (() => {
        new F6();
        return [-3, 10];
    })();
    i15 < i16;
    i16--) {
}
gc();
