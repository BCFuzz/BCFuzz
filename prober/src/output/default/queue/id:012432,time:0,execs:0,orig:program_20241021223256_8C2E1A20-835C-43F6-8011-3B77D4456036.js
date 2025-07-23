const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    class C8 {
    }
    const v9 = new C8();
    const v11 = this.constructor;
    v11.assign(v11, v9);
    return C8;
}
v2.map(f3);
gc();
