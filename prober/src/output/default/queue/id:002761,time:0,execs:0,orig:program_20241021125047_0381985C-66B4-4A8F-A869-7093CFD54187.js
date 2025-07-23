function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v2, "f", { enumerable: true, set: f0 });
}
gc();
