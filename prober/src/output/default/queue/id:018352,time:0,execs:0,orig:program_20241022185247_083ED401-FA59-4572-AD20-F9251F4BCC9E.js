const v2 = new Int8Array();
const v4 = new Uint8Array();
for (let i = 0; i < 5; i++) {
    const o17 = {
        toString(a6, a7) {
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i = 0; i < 5; i++) {
                    a11[25] &= 1024;
                    for (let v13 = 0; v13 < 100; v13++) {
                    }
                }
            }
            const v14 = new F8(F8, a6);
            const v15 = v14.constructor;
            new v15(a7, v2);
            return v15;
        },
    };
    o17.toString(v4);
}
gc();
