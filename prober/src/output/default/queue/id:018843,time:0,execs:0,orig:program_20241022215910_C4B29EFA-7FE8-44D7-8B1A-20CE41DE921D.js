const v1 = new Int32Array(Int32Array, Int32Array);
const v4 = [Int32Array,Int32Array,Int32Array,Int32Array,Int32Array];
const v5 = [44774n,44774n,44774n,44774n];
class C6 {
    constructor(a8, a9, a10, a11) {
        function f12(a13) {
            function f14() {
                return f14;
            }
            const v15 = [490.4264307705703,-195005.96089151688,-2.220446049250313e-16,1.0313758447661936e+308,980104.691805532,2.2250738585072014e-308,-0.0,-429.22112076774636,-1.0,1.6893125657306344e+308];
            const o16 = {
            };
            function f17() {
                v1.buffer = a11;
                return v4;
            }
            Object.defineProperty(o16, "getOwnPropertyDescriptor", { enumerable: true, get: f17 });
            const v19 = new Proxy(v15, o16);
            v19.constructor = f14;
            return Proxy;
        }
        Object.defineProperty(a11, Symbol.iterator, { configurable: true, value: f12 });
        const v22 = this[6];
        try { v22(v22, v22, a10, ...a11); } catch (e) {}
    }
}
new C6(v4, 4096n, 44774n, v5);
gc();
