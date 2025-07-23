function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        for (let i11 = 0, i12 = 10; i11 !== i12; i12--) {
        }
        const v19 = new Int32Array(255);
        for (const v20 in v19) {
            const v22 = new WeakRef(WeakRef);
            v22.deref();
            function F26() {
                if (!new.target) { throw 'must be called with new'; }
                function f28(a29) {
                    const v30 = new Float64Array(58766);
                    return v30;
                }
                Object.defineProperty(this, "c", { configurable: true, set: f28 });
                this.c = -256;
            }
            new F26();
        }
    }
}
new C1(C1, f0, C1, f0);
gc();
