async function f0(a1, a2, a3) {
    function f4(a5, a6) {
        let v7 = 200;
        const v8 = v7--;
        const v11 = new Uint8ClampedArray(2989);
        const v12 = v11.toString;
        try { v12(2989); } catch (e) {}
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        const o26 = {
            "maxByteLength": 3614,
        };
        const v28 = new SharedArrayBuffer(3614, o26);
        const v30 = new Int32Array(v28);
        const v33 = createGlobalObject().Atomics;
        try { v33.waitAsync(v30, v7, v30, v8); } catch (e) {}
        for (let i37 = 0, i38 = 10; i37 / i37, i37 < i38; i38--) {
        }
        for (let i48 = 0, i49 = 10; i48 < i49; i49--) {
            Reflect.construct(BigInt64Array, [536870912]);
        }
        for (let i63 = 0, i64 = 10; i63 !== i64; i64--) {
        }
        const v71 = `
            async function* f72(a73, a74) {
                for (let i = 0; i < 10; i++) {
                    function F75(a77, a78) {
                        if (!new.target) { throw 'must be called with new'; }
                        let v79 = 200;
                        const v80 = v79--;
                        for (let i84 = 0, i85 = 10; i84 < i85; i85--) {
                        }
                        const o93 = {
                            "maxByteLength": 3614,
                        };
                        const v95 = new SharedArrayBuffer(3614, o93);
                        const v96 = new Int32Array(v95);
                        createGlobalObject().Atomics.waitAsync(v96, v79, v96, v80);
                        for (let i103 = 0, i104 = 10; i103 < i104; i104--) {
                        }
                    }
                    new F75(a2, f72);
                    for (let i114 = 0, i115 = 10; i114 != i115; i115--) {
                    }
                }
                return a74;
            }
            for (let i124 = 0, i125 = 10; i124 < i125; i125--) {
            }
            f72(f72, v12);
        `;
        for (let i135 = 0, i136 = 10;
            (() => {
                for (let i139 = 0, i140 = 10; i140; i140--) {
                }
                return i135 < i136;
            })();
            i136--) {
        }
        const v153 = eval(v71);
        v153.next(eval, a1, a2, v153);
        return f0;
    }
    a3.then = f4;
    return a3;
}
f0.then = f0;
f0(f0, f0, f0);
for (let i158 = 0, i159 = 10; i158 < i159; i159--) {
}
gc();
