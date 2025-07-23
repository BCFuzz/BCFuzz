let v0 = 2;
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i = 0; i < 5; i++) {
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        const v16 = v0--;
        for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
        }
        const o29 = {
            "maxByteLength": 3614,
        };
        const v31 = new SharedArrayBuffer(3614, o29);
        const v33 = new Int32Array(v31);
        createGlobalObject().Atomics.waitAsync(v33, 200, v33, v16);
        for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
        }
    }
    new F11();
    for (let i51 = 0, i52 = 10; i51 != i52; i52--) {
    }
}
gc();
