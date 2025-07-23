class C0 {
    constructor(a2) {
        for (let v6 = 0; v6 < 32; v6++) {
            function F7() {
                if (!new.target) { throw 'must be called with new'; }
                this.h = Symbol;
                function f9(a10) {
                    new Float64Array(58766);
                    return C0;
                }
                Object.defineProperty(this, "c", { configurable: true, set: f9 });
                this.h = F7;
                this.c = -256;
            }
            const v13 = new F7();
            const v14 = v13.h;
            new v14();
            const v16 = new F7();
            const v17 = v16.constructor;
            new v17(v14, F7, C0, C0, v17);
        }
    }
}
new C0();
gc();
