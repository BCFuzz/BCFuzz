const v0 = [3,268435441,-65537,64,58303,-1515118286,9,-1229636366,4];
for (let v2 = 0; v2 < 100; v2++) {
    function f3() {
        return v2;
    }
    Object.defineProperty(Array, "a", { configurable: true, enumerable: true, set: f3 });
}
for (let i = 0; i < 5; i++) {
    const v6 = new Uint8Array(1024);
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = v6;
    }
    const v13 = new F7();
    v0.filter(ensureArrayStorage);
    for (const v17 of v13.d) {
    }
}
gc();
