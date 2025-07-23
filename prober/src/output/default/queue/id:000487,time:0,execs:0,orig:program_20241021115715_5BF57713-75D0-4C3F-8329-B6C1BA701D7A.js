function f0() {
    const o5 = {
        o(a3, a4) {
            super.d &= 2.2250738585072014e-308;
        },
    };
    return o5;
}
f0();
const v7 = f0();
class C8 {
    constructor(a10) {
        v7.o();
    }
}
new C8();
new C8();
gc();
