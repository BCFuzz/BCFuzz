class C0 {
}
const v1 = new C0();
let v2 = v1.constructor;
const v3 = new v2();
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
const v12 = Symbol.toPrimitive;
v2 <<= ("symbol").__proto__;
v3[v12] = f4;
const t19 = v2.constructor;
t19(v3);
gc();
