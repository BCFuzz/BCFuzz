function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v7 = new Int16Array(3681);
for (const v8 in v7) {
    class C9 {
    }
    const v10 = new C9();
    const v12 = this.constructor;
    v12.assign(v10, v12, v4);
}
gc();
