class C0 {
    constructor(a2, a3) {
        function F4() {
            if (!new.target) { throw 'must be called with new'; }
            function f6() {
                return this;
            }
            function f7(a8) {
                const o9 = {
                };
                function f10(a11, a12) {
                    return o9;
                }
                o9.get = f10;
                const v14 = new Proxy(F4, o9);
                try { new v14(); } catch (e) {}
                return a2;
            }
            Object.defineProperty(this, "h", { configurable: true, get: f6, set: f7 });
            this.h = 129;
            for (let i18 = 0, i19 = 129; i18 < i19; i19--) {
            }
        }
        new F4();
    }
}
const v27 = new C0(C0, C0);
const v28 = new C0(v27, v27);
new C0(v28, v27);
gc();
