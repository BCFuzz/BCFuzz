const v3 = new Uint8ClampedArray(255);
for (const v4 in v3) {
    const o5 = {
    };
    function f6() {
        return v4;
    }
    function f7(a8) {
        class C10 {
            o(a12) {
            }
        }
        const v13 = new C10();
        const v15 = [-16,-1.0];
        return Reflect.apply(v13.o, v13, v15);
    }
    Object.defineProperty(o5, "a", { configurable: true, enumerable: true, get: f6, set: f7 });
    o5.a = v4;
}
gc();
