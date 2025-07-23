class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
const v3 = new v2(v2, v1, v2);
function f4(a5) {
    let v6 = 6881n;
    const o9 = {
        p(a8) {
            v6 <<= v6;
            return a8;
        },
    };
    o9.p();
    return v6;
}
v3[Symbol.toPrimitive] = f4;
const t17 = v2.constructor;
t17(v3);
gc();
