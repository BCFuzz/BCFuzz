const v1 = new Uint8ClampedArray();
const v4 = /(?!a)?a\1pVabc|def|ghi/g;
for (let i = 0; i < 5; i++) {
    const o17 = {
        toString(a6, a7) {
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a11[97];
                for (let i = 0; i < 5; i++) {
                    for (let v14 = 0; v14 < 25; v14++) {
                    }
                }
            }
            new F8(4294967297, v1);
            new F8(F8, a6);
            return F8;
        },
    };
    const o18 = {
    };
    const v20 = new Proxy(o17, o18);
    v20.toString(v4);
    const t21 = o17.toString(v4);
    new t21(Uint32Array, v20);
}
gc();
