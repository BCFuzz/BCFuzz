function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const o5 = {
    set d(a4) {
    },
};
Object.defineProperty(o5, "d", { writable: true, value: v2 });
gc();
