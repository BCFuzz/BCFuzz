function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4, a5) {
        super();
        [2.0];
        const v7 = [-117965.02454694721,2.220446049250313e-16,-287563.3840928604,-0.0,-0.0,223645.22349043167,2.220446049250313e-16,NaN,413.0725612908093];
        const v10 = new Uint8ClampedArray(2502);
        for (const v11 in v10) {
            const o12 = {
            };
            function f13() {
                return v11;
            }
            function f14(a15) {
                const t16 = [-2,256,-24303,581561964,29756204];
                t16[65536] = o12;
            }
            Object.defineProperty(o12, "a", { configurable: true, enumerable: true, get: f13, set: f14 });
        }
        try { new F0(...this, F0, ...v7); } catch (e) {}
    }
}
new C2(F0, F0);
gc();
