const v3 = new Uint8ClampedArray(255);
for (const v4 in v3) {
    const o5 = {
    };
    function f6() {
        return v3;
    }
    function f7(a8) {
        class C9 {
            o(a11) {
            }
        }
        const v12 = new C9();
        const v13 = [v12,v12];
        Reflect.apply(v12.o, v12, v13);
        const v19 = new Proxy(/i/mis, Array);
        try { v19.toString(o5, v19, C9, o5, v19); } catch (e) {}
        return Proxy;
    }
    Object.defineProperty(o5, "a", { configurable: true, enumerable: true, get: f6, set: f7 });
    o5.a = v4;
}
gc();
