const v4 = [4096n,4096n,4096n];
const v5 = [44774n,44774n,44774n,44774n,44774n];
class C6 {
    constructor(a8, a9, a10, a11) {
        for (let i14 = 10, i15 = 10; -13369 < i15; i15--) {
        }
        function f22(a23) {
            return 4096n;
        }
        Object.defineProperty(a11, Symbol.iterator, { configurable: true, value: f22 });
        const v28 = new SharedArrayBuffer();
        const v30 = new DataView(v28);
        try { v30.getUint16(v30, 0); } catch (e) {}
    }
}
const v32 = new C6(v4, 4096n, 44774n, v5);
const t16 = v32.constructor;
new t16(v32, Proxy, v5, Proxy);
new C6(C6, 9n, 9n, v32);
gc();
