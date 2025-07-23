function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F1 {
    constructor(a5, a6) {
        super();
        const v8 = new Uint8ClampedArray(2502);
        for (const v9 in v8) {
            const o14 = {
                n(a11, a12, a13) {
                    return 2502;
                },
            };
            function f15() {
                return v9;
            }
            function f16(a17) {
            }
            Object.defineProperty(o14, "a", { configurable: true, enumerable: true, get: f15, set: f16 });
        }
    }
}
new C3(C3, F1);
gc();
