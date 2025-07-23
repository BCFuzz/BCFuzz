const v0 = [1.1484585443137076e+308,1000000000000.0,-759.2143138283236,4.660189360913718e+307,0.5170572936658544,1.7820081373882142e+308,1.0,2.909190355268726e+307,-3.0];
const v3 = new Uint8ClampedArray(1943);
for (const v5 in v3) {
    const o6 = {
    };
    function f7(a8) {
        [0.06324308555951319,-641.1409650618232,1.9892311991089322,915.9862635422414,-859810.5230951989,-1.0,-8.326442001082718,-1.2556201571593085e+307,1000000000000.0,3.0];
        return Int8Array;
    }
    o6.set = f7;
    function f10() {
        return v3;
    }
    function f11(a12) {
        class C13 {
            o(a15, a16) {
                const v18 = new Proxy(this, o6);
                v18.b = v0;
            }
        }
        const v19 = new C13();
        v19.o();
        return v19;
    }
    Object.defineProperty(o6, "a", { configurable: true, enumerable: true, get: f10, set: f11 });
    o6.a = v5;
}
gc();
