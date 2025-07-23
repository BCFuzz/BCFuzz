class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const o10 = {
        toString(a6, a7, a8, a9) {
            return v1;
        },
    };
    return o10;
}
const v11 = f2();
for (let i14 = 0, i15 = 10; i15; i15--) {
}
Object.defineProperty(Uint16Array, "weekday", { configurable: true, value: v11 });
function f22() {
    return Uint16Array;
}
class C23 extends f22 {
}
const v24 = new C23();
class C27 extends Date {
}
const v28 = new C27();
try { v28.toLocaleTimeString("object", v24); } catch (e) {}
gc();
