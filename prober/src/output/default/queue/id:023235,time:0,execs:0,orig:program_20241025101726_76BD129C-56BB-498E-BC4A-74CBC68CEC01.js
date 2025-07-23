const v1 = new Uint8Array(Uint8Array);
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        return v1;
    }
    this.toString = f4;
    const v6 = this.toLocaleString();
    function F7() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = new F7();
    Object.defineProperty(v9, "g", { value: v6 });
    const v10 = v9.g;
    v10.subarray(v10, v1, v1);
    for (let i14 = 0, i15 = 10; i15--, i14 < i15;) {
        createGlobalObject().Atomics.or(v10);
    }
}
new F2();
gc();
