async function f0(a1, a2, a3) {
    function f4(a5, a6) {
        let v7 = 200;
        const v8 = v7--;
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
        const o21 = {
            "maxByteLength": 3614,
        };
        const v23 = new SharedArrayBuffer(3614, o21);
        const v25 = new Int32Array(v23);
        const v28 = createGlobalObject().Atomics;
        try { v28.waitAsync(v25, v7, v25, v8); } catch (e) {}
        for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
        }
        for (let i42 = 0, i43 = 10; i42 < i43; i43--) {
            Reflect.construct(BigInt64Array, [536870912]);
        }
        for (let [i60, i61] = (() => {
                for (let v55 = 0; v55 < 5; v55++) {
                    v55 < 4;
                }
                return [0, 10];
            })();
            i60 !== i61;
            i61--) {
        }
        const v68 = `
            async function* f69(a70, a71) {
                for (let i = 0; i < 10; i++) {
                    function F72(a74, a75) {
                        if (!new.target) { throw 'must be called with new'; }
                        createGlobalObject();
                        for (let i79 = 0, i80 = 10; i79 < i80; i80--) {
                        }
                    }
                    new F72();
                    for (let i90 = 0, i91 = 10; i90 != i91; i91--) {
                    }
                }
            }
            for (let i100 = 0, i101 = 10; i100 < i101; i101--) {
            }
            f69();
        `;
        for (let i111 = 0, i112 = 10;
            (() => {
                for (let i115 = 0, i116 = 10; i116; i116--) {
                }
                return i111 < i112;
            })();
            i112--) {
        }
        eval(v68).next();
    }
    a3.then = f4;
    return a3;
}
f0(f0, f0, f0);
for (let i134 = 0, i135 = 10; i134 < i135; i135--) {
}
gc();
