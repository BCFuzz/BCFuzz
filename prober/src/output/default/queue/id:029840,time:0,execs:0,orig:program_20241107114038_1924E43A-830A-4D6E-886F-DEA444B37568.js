function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = a3--;
    for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
    }
    const o18 = {
        "maxByteLength": 3614,
    };
    const v20 = new SharedArrayBuffer(3614, o18);
    const v22 = new Int32Array(v20);
    createGlobalObject().Atomics.waitAsync(v22, 200, v22, v5);
    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    }
}
new F0(F0, F0);
for (let i40 = 0, i41 = 10; i40 != i41; i41--) {
}
gc();
