const v0 = [-788700.778891815,1.0,9.258936786533625e+307,-1.4331011836729608e+308];
const v1 = [50144,-1024];
function f2() {
    function f3(a4) {
        return v0;
    }
    return f3;
}
Object.defineProperty(v1, Symbol.toPrimitive, { enumerable: true, get: f2 });
for (let i9 = 0, i10 = 10; i10; i10--) {
}
function f16() {
    return f16;
}
function f17() {
    return v1;
}
Object.defineProperty(f16, "timeStyle", { configurable: true, enumerable: true, get: f17 });
class C18 extends f16 {
}
const v19 = new C18();
class C22 extends Date {
}
const v23 = new C22();
try { v23.toLocaleTimeString("object", v19); } catch (e) {}
gc();
