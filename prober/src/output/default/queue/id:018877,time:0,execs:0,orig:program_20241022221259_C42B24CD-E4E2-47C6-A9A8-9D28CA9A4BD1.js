const v0 = /(?!a)?a\1pVabc|def|ghi/g;
const v2 = new Uint8Array();
for (let i = 0; i < 5; i++) {
    const o14 = {
        toString(a4, a5) {
            function F6(a8, a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i = 0; i < 5; i++) {
                    a9[25] &= 102;
                    for (let v12 = 0; v12 < 100; v12++) {
                    }
                }
            }
            const v13 = new F6(F6, a4);
            return v13;
        },
    };
    o14.toString(v0);
    o14.toString(v2);
}
gc();
