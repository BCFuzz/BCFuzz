function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -9007199254740992;
    this.b = -9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o16 = {
        65535: F0,
        n(a10, a11, a12, a13) {
            const v14 = a12 instanceof F0;
            let v15;
            try { v15 = a8(v14, a11, a11); } catch (e) {}
            v4[v3] &&= v15;
            return F0;
        },
        [a8]: a7,
        "b": v5,
        10: F0,
        ...a7,
        __proto__: a7,
    };
    return o16;
}
f6(v4, v4);
f6(v3, v3);
const v19 = [-1678211200,2147483649,-1128729375,60640,-40463];
do {
    v3[3974] = v19;
    break;
} while (0 < 6)
gc();
