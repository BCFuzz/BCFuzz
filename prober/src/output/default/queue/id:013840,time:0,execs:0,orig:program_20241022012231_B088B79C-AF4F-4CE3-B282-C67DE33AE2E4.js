const v2 = new Uint8ClampedArray(255);
for (const v3 in v2) {
    const o4 = {
    };
    function f5() {
        return 255;
    }
    function f6(a7) {
        class C8 {
            o(a10) {
            }
        }
        const v11 = new C8();
        Reflect.apply(v11.o, v11, v2);
        return C8;
    }
    Object.defineProperty(o4, "a", { configurable: true, enumerable: true, get: f5, set: f6 });
    o4.a = v3;
}
gc();
