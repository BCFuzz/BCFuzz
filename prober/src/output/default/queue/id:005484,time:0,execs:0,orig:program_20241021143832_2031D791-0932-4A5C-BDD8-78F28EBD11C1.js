function f0() {
    const o9 = {
        "f": 0.10161815836853971,
        set g(a4) {
            a4 = 0.10161815836853971;
        },
        toString(a6) {
            a6 in a6;
            const t7 = -590037.0866013918;
            t7[1] = 0.10161815836853971;
            return -1.7976931348623157e+308;
        },
    };
    try { o9.toLocaleString(); } catch (e) {}
    return o9;
}
f0[Symbol.toPrimitive] = f0;
f0();
class C14 {
}
const v15 = `
    class C16 extends C14 {
    }
    const v17 = new C16();
    const v18 = v17.constructor;
    v18[2551994144] = v18;
`;
eval(v15);
gc();
