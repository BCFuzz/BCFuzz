const v2 = [4096n,4096n,4096n,4096n];
const v3 = [4096n,4096n];
class C4 {
    constructor(a6, a7, a8, a9) {
        const v10 = [-128,2147483649,9007199254740990,268435441,16];
        function f11(a12) {
            function f13() {
                return C4;
            }
            const v14 = [490.4264307705703,-195005.96089151688,-2.220446049250313e-16,1.0313758447661936e+308,980104.691805532,2.2250738585072014e-308,-0.0,-429.22112076774636,-1.0,1.6893125657306344e+308];
            const o15 = {
            };
            function f16() {
                return v10;
            }
            Object.defineProperty(o15, "getOwnPropertyDescriptor", { enumerable: true, get: f16 });
            const v18 = new Proxy(v14, o15);
            v18.constructor = f13;
            return v10;
        }
        Object.defineProperty(a9, Symbol.iterator, { configurable: true, value: f11 });
        const v21 = this[6];
        try { v21(v21, v21, a8, ...a9); } catch (e) {}
    }
}
new C4(v2, 4096n, 44774n, v3);
gc();
