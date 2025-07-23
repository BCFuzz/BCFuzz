async function f2(a3, a4, a5) {
    function f6(a7, a8) {
        for (let i11 = 0, i12 = 10;
            (() => {
                const v13 = i11 < i12;
                let v14 = 200;
                const v15 = v14--;
                for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
                }
                const o28 = {
                    "maxByteLength": 3614,
                };
                const v30 = new SharedArrayBuffer(3614, o28);
                const v31 = new Int32Array(v30);
                createGlobalObject().Atomics.waitAsync(v31, v14, v31, v15);
                for (let i37 = 0, i38 = 10; i37 < i38; i38--) {
                }
                return v13;
            })();
            i12--) {
            Reflect.construct(BigInt64Array, [536870912]);
        }
        return f6;
    }
    a5.then = f6;
    return a5;
}
f2(f2, f2, f2);
for (let i58 = 0, i59 = 10; i58 < i59; i59--) {
}
gc();
