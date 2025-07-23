function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
new F0();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F4 {
    constructor(a8, a9) {
        super();
        [-117965.02454694721,2.220446049250313e-16,-287563.3840928604,-0.0,-0.0,223645.22349043167,2.220446049250313e-16,NaN,413.0725612908093];
        const v13 = new Uint8ClampedArray(2502);
        for (const v14 in v13) {
            const o15 = {
            };
            function f16() {
                return v14;
            }
            function f17(a18) {
            }
            Object.defineProperty(o15, "a", { configurable: true, enumerable: true, get: f16, set: f17 });
        }
    }
}
new C6(F4);
gc();
