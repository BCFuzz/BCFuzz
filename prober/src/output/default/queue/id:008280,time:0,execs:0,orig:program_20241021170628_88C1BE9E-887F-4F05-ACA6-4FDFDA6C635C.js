class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
const v3 = new v2(v2, v1, v1, v2, v1);
function f4(a5) {
    let v6 = 6881n;
    const o16 = {
        p(a8) {
            v6 <<= v6;
            for (let i10 = 0; i10 < 21768; i10++) {
            }
            return v3;
        },
    };
    o16.p();
}
v3[Symbol.toPrimitive] = f4;
const t18 = v2.constructor;
t18(v3);
gc();
