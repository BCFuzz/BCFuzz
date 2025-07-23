for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
async function f10(a11, a12, a13) {
    function f14(a15, a16) {
        for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
            new Int8Array(4294967296);
        }
        for (let [i43, i44] = (() => {
                const o34 = {
                    "maxByteLength": 3614,
                };
                const v36 = new SharedArrayBuffer(3614, o34);
                const v38 = new Int32Array(v36);
                createGlobalObject().Atomics.waitAsync(v38);
                return [0, 10];
            })();
            i43 < i44;
            i44--) {
        }
        return a12;
    }
    a13.then = f14;
    return a13;
}
f10(f10, f10, f10);
for (let i54 = 0, i55 = 10; i54 < i55; i55--) {
}
gc();
