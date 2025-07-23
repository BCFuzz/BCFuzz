const v4 = [44774n];
const v5 = [4096n];
class C6 {
    constructor(a8, a9, a10, a11) {
        function f12(a13) {
            for (let v14 = 0; v14 < 25; v14++) {
                function f15() {
                    return 44774n;
                }
                const v16 = [490.4264307705703,-195005.96089151688,-2.220446049250313e-16,1.0313758447661936e+308,980104.691805532,2.2250738585072014e-308,-0.0,-429.22112076774636,-1.0,1.6893125657306344e+308];
                const o17 = {
                };
                const v18 = new Proxy(v16, o17);
                v18.constructor = f15;
            }
            return a13;
        }
        Object.defineProperty(a11, Symbol.iterator, { configurable: true, value: f12 });
        const v21 = this[6];
        try { v21(v21, v21, a10, ...a11); } catch (e) {}
    }
}
const v23 = new C6(v4, 4096n, 44774n, v5);
const t23 = v23.constructor;
new t23(v23, Proxy, v5, Proxy);
const v26 = new C6(C6, 9n, 9n, v23);
new C6(v4, 44774n, 44774n, v26);
gc();
