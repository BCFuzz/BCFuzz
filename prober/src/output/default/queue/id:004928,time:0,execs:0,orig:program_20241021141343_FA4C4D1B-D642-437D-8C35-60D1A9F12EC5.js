const v3 = [44774n,44774n,44774n];
const v4 = [v3];
class C5 {
    constructor(a7, a8, a9, a10) {
        function f11(a12) {
            for (let v13 = 0; v13 < 25; v13++) {
                function f14() {
                    return 9n;
                }
                const v15 = [490.4264307705703,-195005.96089151688,-2.220446049250313e-16,1.0313758447661936e+308,980104.691805532,2.2250738585072014e-308,-0.0,-429.22112076774636,-1.0,1.6893125657306344e+308];
                const o16 = {
                };
                const v18 = new Proxy(v15, o16);
                v18.constructor = f14;
            }
            return v4;
        }
        Object.defineProperty(a10, Symbol.iterator, { configurable: true, value: f11 });
        const v21 = this[6];
        try { v21(v21, v21, a9, ...a10); } catch (e) {}
    }
}
const v23 = new C5(v3, 4096n, 44774n, v4);
const v24 = new C5(C5, 9n, 9n, v23);
new C5(v3, 44774n, 44774n, v24);
gc();
