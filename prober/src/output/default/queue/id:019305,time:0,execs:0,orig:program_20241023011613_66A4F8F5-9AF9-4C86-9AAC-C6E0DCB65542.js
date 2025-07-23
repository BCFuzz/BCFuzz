function f1(a2) {
    const o5 = {
        [a2](a4) {
            return a2;
        },
    };
    return o5;
}
const v7 = f1(1073741824)[1073741824];
for (let i10 = 0, i11 = 10; i11; i11--) {
}
function f17() {
    return f17;
}
Object.defineProperty(f17, "timeStyle", { configurable: true, enumerable: true, get: v7 });
class C18 extends f17 {
}
const v19 = new C18();
class C22 extends Date {
}
const v23 = new C22();
try { v23.toLocaleTimeString("object", v19); } catch (e) {}
gc();
