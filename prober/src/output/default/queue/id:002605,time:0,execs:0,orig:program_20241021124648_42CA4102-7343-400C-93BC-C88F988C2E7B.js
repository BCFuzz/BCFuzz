function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
const v4 = new F0();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(F0); } catch (e) {}
    a7.e = a7;
}
const v10 = new F5(v3);
new F5(v3);
const v12 = new F5(v4);
class C13 {
    constructor(a15, a16, a17, a18) {
        this.toString = a17;
        const o19 = {
        };
        try { Proxy.call(); } catch (e) {}
        const v22 = new Proxy(v3, o19);
        v22.b = v22;
    }
}
const v23 = new C13(v3, v12, v3);
const t25 = v23.constructor;
const v25 = new t25(v4, v4, C13);
const t27 = v25.toString;
new t27(v10, v3);
gc();
