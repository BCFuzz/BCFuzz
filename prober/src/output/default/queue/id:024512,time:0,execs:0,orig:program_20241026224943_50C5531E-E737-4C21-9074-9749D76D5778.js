const v1 = new Map();
function f2(a3, a4) {
    const o5 = {
    };
    return o5;
}
const v7 = f2(v1, f2(v1, Map));
for (let i10 = 0, i11 = 10;
    i10 < i11;
    (() => {
        i11--;
        const o31 = {
            n(a17, a18, a19) {
                const v20 = this;
                const v21 = v20.Intl;
                v7.h = v21;
                const v28 = v21.Segmenter;
                const v29 = new v28(a17, v28, v28, v28, a18);
                return v29.segment();
            },
        };
        const t11 = o31.n;
        t11();
    })()) {
}
for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
    const o49 = {
        "maxByteLength": 268435456,
    };
    let v51 = 44485;
    for (; v51--;) {
    }
    const o53 = {
    };
    new Int8Array(255);
    const v57 = Uint8Array ^ o53;
    const v58 = new ArrayBuffer(255, o49);
    const v60 = new Uint32Array(v58);
    v57 in v60;
}
gc();
