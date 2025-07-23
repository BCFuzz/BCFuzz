function f0() {
    function f4(a5) {
    }
    const v6 = f4(f0);
    const v7 = f4();
    function f8(a9, a10, a11, a12) {
        const o13 = {
            "f": v7,
        };
        return f8;
    }
    f8("string", v6);
    const v15 = f8();
    const v16 = `
        v15["string"];
    `;
    eval(v16);
    const o23 = {
        m(a21, a22) {
            return f8;
        },
    };
    return o23;
}
const v24 = f0();
[v24,v24];
gc();
