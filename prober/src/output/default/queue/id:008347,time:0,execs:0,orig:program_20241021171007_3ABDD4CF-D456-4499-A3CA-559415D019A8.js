function f0(a1) {
    class C2 {
        static set b(a4) {
            Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
        }
    }
    const v6 = new C2();
    const o7 = {
        __proto__: C2,
    };
    C2.b = v6;
    for (let v8 = 0; v8 < 10; v8++) {
        function f9() {
            return f9;
        }
        const v10 = [65535];
        for (let i = 0; i < 5; i++) {
            v10.some(f9);
        }
    }
    return f0;
}
f0(f0(f0));
class C15 extends Array {
    257;
}
const v16 = new C15();
v16.with();
gc();
