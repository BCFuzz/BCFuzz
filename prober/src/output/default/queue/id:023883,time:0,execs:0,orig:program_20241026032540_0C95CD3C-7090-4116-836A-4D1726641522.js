class C0 {
    constructor() {
        const v5 = new Uint8ClampedArray(255);
        for (const v6 in v5) {
            const o7 = {
            };
            function f8() {
                return o7;
            }
            function f9(a10) {
                class C11 {
                    o(a13) {
                        try {
                        const t0 = 1024;
                        t0();
                        } catch (e) {}
                    }
                }
                const v16 = new C11();
                const v17 = [v6,v6,v6,v6,v6];
                return Reflect.apply(v16.o, v16, v17);
            }
            Object.defineProperty(o7, "a", { configurable: true, enumerable: true, get: f8, set: f9 });
            o7.a = v6;
        }
    }
}
new C0();
gc();
