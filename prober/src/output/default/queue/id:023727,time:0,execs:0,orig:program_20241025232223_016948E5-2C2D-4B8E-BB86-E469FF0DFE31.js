class C1 extends Object {
}
const o7 = {
    toString(a3) {
        const v4 = this.toString;
        try { new v4(); } catch (e) {}
        new C1();
    },
};
const v10 = new Int8Array(681);
function f11(a12, a13, a14, a15) {
    return o7;
}
v10.map(f11);
gc();
