const v2 = new Uint8ClampedArray(255);
for (const v3 in v2) {
    const o4 = {
    };
    function f5() {
        return o4;
    }
    function f6(a7) {
        class C9 {
            o(a11) {
            }
        }
        const v12 = new C9();
        for (let i = 0; i < 5; i++) {
            const v15 = [-16,-1.0];
            Reflect.apply(v12.o, v12, v15);
        }
        return f5;
    }
    Object.defineProperty(o4, "a", { configurable: true, enumerable: true, get: f5, set: f6 });
    o4.a = v3;
}
gc();
