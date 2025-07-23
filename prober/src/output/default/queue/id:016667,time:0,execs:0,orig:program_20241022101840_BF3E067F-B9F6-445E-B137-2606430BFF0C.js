function f0() {
    const o2 = {
    };
    function f3() {
        return 836450.9700224083;
    }
    Object.defineProperty(o2, "hour", { configurable: true, get: f3 });
    return o2;
}
class C4 extends f0 {
}
const v5 = new C4();
class C8 extends Date {
}
const v9 = new C8();
try { v9.toLocaleTimeString("object", v5); } catch (e) {}
gc();
