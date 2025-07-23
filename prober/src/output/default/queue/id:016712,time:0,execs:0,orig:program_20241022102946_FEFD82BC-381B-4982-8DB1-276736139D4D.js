for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f10() {
    return f10;
}
class C11 extends f10 {
}
const v12 = new C11();
v12.month = Uint16Array;
class C15 extends Date {
}
const v16 = new C15();
try { v16.toLocaleTimeString("object", v12); } catch (e) {}
gc();
