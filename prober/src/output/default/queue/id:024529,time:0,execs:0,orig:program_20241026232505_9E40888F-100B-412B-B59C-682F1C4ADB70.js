function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const o14 = {
        valueOf(a4) {
            function f5(a6, a7, a8, a9) {
                a4();
                return f5;
            }
            try { this.valueOf(); } catch (e) {}
            -51195 - a4;
            return a2;
        },
    };
    o14.valueOf();
}
const v16 = new F0();
v16.f;
new F0();
new F0();
gc();
