for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    const o27 = {
        "maxByteLength": 268435439,
    };
    const v29 = new SharedArrayBuffer(1000, o27);
    const v31 = new Uint16Array(v29);
    v31.sort(a23);
}
new F20();
gc();
