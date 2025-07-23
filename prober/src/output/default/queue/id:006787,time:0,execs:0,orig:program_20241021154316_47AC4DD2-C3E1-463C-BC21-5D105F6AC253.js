const v1 = [Reflect];
for (let i = 0; i < 5; i++) {
    function f2(a3, a4, a5, a6) {
        const v9 = new Uint8Array(1024);
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = v9;
        }
        const v16 = new F10(v1, f2, v1, f2);
        v1.filter(ensureArrayStorage);
        for (const v20 of v16.d) {
        }
        return a5;
    }
    f2(Reflect, f2, v1, Reflect);
}
gc();
