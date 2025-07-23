const v2 = new Float64Array(2948);
new Uint16Array();
new Uint8ClampedArray(129);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
}
new F10(10000n);
new F10(10000n, 2948);
for (const v17 of [-2.0,-1.0,0.19795010264126411,1.2076363296656204e+308,229318.16947127413,1.3439790166549788,1000000.0,1000000.0,-166.13863760403774,Infinity]) {
    let v18 = 2;
    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    }
    function F29(a31, a32) {
        if (!new.target) { throw 'must be called with new'; }
        let v33 = 200;
        const v34 = v33--;
        for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
        }
        const o47 = {
            "maxByteLength": 3614,
        };
        const v49 = new SharedArrayBuffer(3614, o47);
        const v51 = new Int32Array(v49);
        createGlobalObject().Atomics.waitAsync(v51, v33, v51, v34);
        for (let i58 = 0, i59 = 10; i58 < i59; i59--) {
        }
    }
    new F29(v2, Uint16Array);
    for (let i69 = 0, i70 = 10; i69 != i70; i70--) {
    }
    for (let i = 0; i < 5; i++) {
        function F77(a79, a80) {
            if (!new.target) { throw 'must be called with new'; }
            const v82 = v18--;
            for (let i86 = 0, i87 = 10; i86 < i87; i87--) {
            }
            const o95 = {
                "maxByteLength": 3614,
            };
            const v97 = new SharedArrayBuffer(3614, o95);
            const v99 = new Int32Array(v97);
            createGlobalObject().Atomics.waitAsync(v99, 200, v99, v82);
            for (let i106 = 0, i107 = 10; i106 < i107; i107--) {
            }
        }
        new F77();
        for (let i117 = 0, i118 = 10; i117 != i118; i118--) {
        }
    }
}
gc();
