const v1 = new Uint8Array(Uint8Array);
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        return v1;
    }
    this.toString = f4;
    const v6 = this.toLocaleString(Uint8Array, F2, F2);
    function F7() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = new F7();
    Object.defineProperty(v9, "g", { value: v6 });
    const v10 = v9.g;
    for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
        createGlobalObject().Atomics.or(v10);
    }
}
new F2();
gc();
