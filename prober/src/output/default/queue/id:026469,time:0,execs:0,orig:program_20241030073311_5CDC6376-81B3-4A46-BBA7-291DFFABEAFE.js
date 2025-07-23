class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
function f3() {
    const v5 = `
        const o6 = {
        };
        /\u{12345}/myvis;
    `;
    return v5.repeat(13085);
}
v2[Symbol.toPrimitive] = f3;
function f11(a12, a13, a14, a15) {
    return a13;
}
const v16 = f11.constructor;
try { v16(v2); } catch (e) {}
gc();
