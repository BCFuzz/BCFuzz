function f0() {
    return f0;
}
const v2 = [Reflect];
v2.constructor = f0;
for (let i = 0; i < 5; i++) {
    function f3(a4, a5, a6, a7) {
        const v10 = new Uint8Array(1024);
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = v10;
        }
        const v17 = new F11(f0, f3, Uint8Array, a4);
        v2.filter(ensureArrayStorage);
        for (const v21 of v17.d) {
        }
        return a4;
    }
    f3(f3, f0, v2, f0);
}
gc();
