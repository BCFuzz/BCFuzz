function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2() {
    const v5 = new Uint16Array(129);
    for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
        createGlobalObject().Atomics.store(v5, i8, i9);
    }
    for (let i22 = 10, i23 = 10; -13369 < i23; i23--) {
    }
    return f2;
}
C1.toString = f2;
const v30 = new C1();
const t16 = v30.constructor;
const v32 = t16();
const v33 = new C1();
const v34 = v33.constructor;
const v35 = v34();
try { v34(v35, v32, C1); } catch (e) {}
gc();
