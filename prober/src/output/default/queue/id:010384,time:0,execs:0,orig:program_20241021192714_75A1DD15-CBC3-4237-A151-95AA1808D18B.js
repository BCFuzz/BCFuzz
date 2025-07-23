const v0 = `
    const v2 = new Int16Array();
    function f3(a4, a5) {
        let {"byteLength":v6,"byteOffset":v7,} = v2;
        return v6;
    }
    class C8 {
        valueOf(a10, a11) {
            a10[3] = a10;
            const v12 = (a13, a14) => {
                const o16 = {
                    "maxByteLength": a10,
                };
                new ArrayBuffer(25, o16);
            };
            v12(a11, v2);
        }
    }
    const v20 = new C8();
    try { v20.valueOf(v20); } catch (e) {}
`;
eval(v0);
gc();
