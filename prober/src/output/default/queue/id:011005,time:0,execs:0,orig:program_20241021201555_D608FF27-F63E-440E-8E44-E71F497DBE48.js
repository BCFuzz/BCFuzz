const o0 = {
};
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Proxy(a4, a4);
    class C10 {
        constructor(a12, a13, a14) {
            a14 in v9;
        }
    }
    const v16 = new C10(a7, "string", a7);
    const v17 = v16.constructor;
    new v17(this, "string", "string");
    new v17("string", F2, "string");
}
new F2(o0);
gc();
