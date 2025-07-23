for (let i3 = -3, i4 = 10; i3 < i4; i4--) {
}
for (let i12 = 0, i13 = 21;
    i12 < i13;
    (() => {
        for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
        }
        for (let v27 = 0; v27 < 5; v27++) {
            function F28() {
                if (!new.target) { throw 'must be called with new'; }
                const v31 = new Uint32Array();
                const o34 = {
                    "maxByteLength": 16,
                };
                const v36 = new SharedArrayBuffer(1, o34);
                const v38 = new BigInt64Array(v36);
                const v39 = v38.sort();
                function f40(a41, a42) {
                    try { a42.constructor(F28, a41); } catch (e) {}
                    return a42.length;
                }
                v39.constructor = f40;
                const t17 = v39.constructor;
                t17(v31, v39);
            }
            new F28();
        }
        for (let i50 = -3, i51 = 10; i50 < i51; i51--) {
        }
        i13--;
    })()) {
}
gc();
