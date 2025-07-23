const v2 = new Int16Array(8);
for (const v3 in v2) {
    class C4 {
        static set b(a6) {
            Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
        }
    }
    const v8 = new C4();
    const o9 = {
        __proto__: C4,
    };
    C4.b = v8;
    for (let v10 = 0; v10 < 5; v10++) {
        function f11() {
            const v13 = new Int16Array();
            const v14 = new Int16Array(4096, ...v13);
            return v14;
        }
        const v15 = [65535];
        for (let i = 0; i < 5; i++) {
            v15.some(f11);
        }
    }
}
gc();
