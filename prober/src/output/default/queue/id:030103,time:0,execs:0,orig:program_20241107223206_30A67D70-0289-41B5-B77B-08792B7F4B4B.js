async function f0(a1, a2, a3) {
    function f4(a5, a6) {
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
            Reflect.construct(BigInt64Array, [536870912]);
        }
        for (let i24 = 0, i25 = 10; i24 !== i25; i25--) {
        }
        const v32 = `
            async function* f33(a34, a35) {
                for (let i = 0; i < 10; i++) {
                    function F36(a38, a39) {
                        if (!new.target) { throw 'must be called with new'; }
                        let v40 = 200;
                        const v41 = v40--;
                        for (let i45 = 0, i46 = 10; i45 < i46; i46--) {
                        }
                        const o54 = {
                            "maxByteLength": 3614,
                        };
                        const v56 = new SharedArrayBuffer(3614, o54);
                        const v58 = new Int32Array(v56);
                        createGlobalObject().Atomics.waitAsync(v58, v40, v58, v41);
                        for (let i65 = 0, i66 = 10; i65 < i66; i66--) {
                        }
                    }
                    new F36(a2, f33);
                    for (let i76 = 0, i77 = 10; i76 != i77; i77--) {
                    }
                }
                return a35;
            }
            for (let i86 = 0, i87 = 10; i86 < i87; i87--) {
            }
            f33();
        `;
        for (let i97 = 0, i98 = 10;
            (() => {
                for (let i101 = 0, i102 = 10; i102; i102--) {
                }
                return i97 < i98;
            })();
            i98--) {
        }
        const v115 = eval(v32);
        v115.next(eval, a1, a2, v115);
        return v115;
    }
    a3.then = f4;
    return a3;
}
f0(f0, f0, f0);
for (let i120 = 0, i121 = 10; i120 < i121; i121--) {
}
gc();
