for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f10() {
    return Uint16Array;
}
Uint16Array[Symbol.toPrimitive] = f10;
function f13() {
    return Uint16Array;
}
class C14 extends f13 {
}
const v15 = new C14();
v15.month = Uint16Array;
class C18 extends Date {
}
const v19 = new C18();
try { v19.toLocaleTimeString("object", v15); } catch (e) {}
gc();
