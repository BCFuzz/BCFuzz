for (let i = 0; i < 10; i++) {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        let v4 = 200;
        const v5 = v4--;
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        }
        const o18 = {
            "maxByteLength": 3614,
        };
        const v20 = new SharedArrayBuffer(3614, o18);
        const v22 = new Int32Array(v20);
        createGlobalObject().Atomics.waitAsync(v22, v4, v22, v5);
        for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
        }
    }
    new F0();
    for (let i40 = 0, i41 = 10; i40 != i41; i41--) {
    }
}
gc();
