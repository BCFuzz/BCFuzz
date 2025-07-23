const v2 = new Uint8ClampedArray(2502);
for (const v3 in v2) {
    const o4 = {
    };
    function f5() {
        return v2;
    }
    function f6(a7) {
        class C8 {
            o(a10, a11) {
                const o12 = {
                };
                const v14 = new Proxy(this, o12);
                v14.b = v14;
            }
        }
        const v15 = new C8();
        return v15.o();
    }
    Object.defineProperty(o4, "a", { configurable: true, enumerable: true, get: f5, set: f6 });
    o4.a = v3;
}
gc();
