function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        const v8 = `
            const o11 = {
                "maxByteLength": 268435440,
            };
            const v13 = new SharedArrayBuffer(8, o11);
            new Uint8ClampedArray(v13);
        `;
        const v17 = eval(v8);
        function f18() {
            return delete v17.h;
        }
        v17.valueOf = f18;
        v17[1] = v17;
        return f18;
    }
    Object.defineProperty(this, "c", { configurable: true, set: f6 });
    this.c = a2;
}
new F0();
gc();
