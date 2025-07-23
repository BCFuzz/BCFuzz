function f0() {
    return f0;
}
const v2 = [Reflect];
for (let i = 0; i < 5; i++) {
    function f3(a4, a5, a6, a7) {
        const v10 = new Uint8Array(1024);
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            a16(a13);
            this.d = v10;
        }
        const v18 = new F11(f0, f3, Uint8Array, a4);
        v2.filter(ensureArrayStorage);
        for (const v22 of v18.d) {
        }
        return f3;
    }
    f3(f3);
}
gc();
