function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        return a5;
    }
    Object.defineProperty(this, "POSITIVE_INFINITY", { set: f4 });
}
const v6 = new F0(F0, F0);
const v9 = new Int16Array(3681);
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (const v20 in v9) {
    class C21 {
    }
    const v22 = new C21();
    const v24 = this.constructor;
    v24.assign(v22, v24, v6);
}
gc();
