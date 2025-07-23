const v1 = new Float32Array();
const v2 = /(?!a)?a\1pVabc|def|ghi/g;
const v4 = new Uint8Array(v1, v2, Uint8Array);
for (let i = 0; i < 5; i++) {
    const o18 = {
        toString(a6, a7) {
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i = 0; i < 5; i++) {
                    a11[25] &= 102;
                    for (let v14 = 0; v14 < 50; v14++) {
                    }
                }
            }
            const v15 = new F8(F8, a6);
            const t15 = v15.constructor;
            new t15(Float32Array, v1);
            return this;
        },
    };
    o18.toString(v2);
    o18.toString(v4);
}
gc();
