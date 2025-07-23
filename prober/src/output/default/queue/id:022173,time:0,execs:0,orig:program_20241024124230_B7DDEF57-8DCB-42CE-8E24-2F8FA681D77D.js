const o3 = {
    [1073741824](a2) {
        a2.toString = 1073741824;
    },
};
const v4 = o3[1073741824];
for (let i7 = 0, i8 = 10; i8; i8--) {
}
function f14() {
    return f14;
}
Object.defineProperty(f14, "timeStyle", { configurable: true, enumerable: true, get: v4 });
class C15 extends f14 {
}
const v16 = new C15();
class C19 extends Date {
}
const v20 = new C19();
try { v20.toLocaleTimeString("object", v16); } catch (e) {}
gc();
