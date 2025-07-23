const v2 = [4096n,4096n,4096n,4096n,4096n];
const v3 = [v2,v2,v2,v2,v2];
class C4 {
    constructor(a6, a7, a8, a9) {
        function f10(a11) {
            function f12() {
                return v3;
            }
            const v13 = [490.4264307705703,-195005.96089151688,-2.220446049250313e-16,1.0313758447661936e+308,980104.691805532,2.2250738585072014e-308,-0.0,-429.22112076774636,-1.0,1.6893125657306344e+308];
            const o14 = {
            };
            o14.set = f10;
            const v16 = new Proxy(v13, o14);
            v16.constructor = f12;
            return a11;
        }
        Object.defineProperty(a9, Symbol.iterator, { configurable: true, value: f10 });
        const v19 = this[6];
        try { v19(v19, v19, a8, ...a9); } catch (e) {}
    }
}
new C4(v2, 4096n, 44774n, v3);
gc();
