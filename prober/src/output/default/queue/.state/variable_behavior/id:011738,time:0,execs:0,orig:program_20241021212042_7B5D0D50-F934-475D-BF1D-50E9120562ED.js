const v0 = [25332,-9007199254740991,-2,-2147483649];
const v5 = new Uint8ClampedArray(255);
for (const v6 in v5) {
    const o7 = {
    };
    function f8() {
        return f8;
    }
    function f9(a10) {
        class C11 {
            o(a13) {
                const v14 = a13.constructor;
                try { new v14(v14); } catch (e) {}
            }
        }
        const v16 = new C11();
        const v17 = [v16];
        const v18 = v16.o;
        v18.apply(undefined, v0);
        const v20 = Reflect.apply(v18, v16, v17);
        const v24 = new Proxy(/i/mis, Array);
        try { v24.toString(v24, v20, v24, Proxy); } catch (e) {}
        return Uint8ClampedArray;
    }
    Object.defineProperty(o7, "a", { configurable: true, enumerable: true, get: f8, set: f9 });
    o7.a = v6;
}
gc();
