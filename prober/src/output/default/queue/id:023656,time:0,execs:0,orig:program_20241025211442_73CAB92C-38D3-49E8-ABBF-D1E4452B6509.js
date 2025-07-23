const v1 = new Map();
function f2(a3, a4) {
    const o5 = {
    };
    return o5;
}
const v7 = f2(v1, f2(v1, Map));
f2(f2, v7);
for (let i11 = 0, i12 = 10;
    i11 < i12;
    (() => {
        i12--;
        const o32 = {
            n(a18, a19, a20) {
                const v21 = this;
                const v22 = v21.Intl;
                v7.h = v22;
                const v29 = v22.Segmenter;
                const v30 = new v29(a18, v29, v29, v29, a19);
                return v30.segment();
            },
        };
        const t11 = o32.n;
        t11();
    })()) {
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    const o50 = {
        "maxByteLength": 268435456,
    };
    const o52 = {
    };
    const v53 = Uint8Array ^ o52;
    const v54 = new ArrayBuffer(255, o50);
    const v56 = new Uint32Array(v54);
    v53 in v56;
}
gc();
