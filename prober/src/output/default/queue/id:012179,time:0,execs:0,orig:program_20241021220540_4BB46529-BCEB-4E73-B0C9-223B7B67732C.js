const v0 = [25332,-9007199254740991,-2,-2147483649];
const v4 = new Uint8ClampedArray(255);
for (const v5 in v4) {
    const o6 = {
    };
    function f7() {
        return undefined;
    }
    function f8(a9) {
        class C10 {
            o(a12) {
                const v13 = a12.size;
                try { v13(v5, C10); } catch (e) {}
            }
        }
        const v15 = new C10();
        return v15.o.apply(undefined, v0);
    }
    Object.defineProperty(o6, "a", { configurable: true, enumerable: true, get: f7, set: f8 });
    o6.a = v5;
}
gc();
