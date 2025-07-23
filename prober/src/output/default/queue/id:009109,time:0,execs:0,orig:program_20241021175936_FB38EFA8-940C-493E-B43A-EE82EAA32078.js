function f1(a2, a3) {
    a2.toString = f1;
    return a2 >>> a2;
}
f1(-4294967296);
class C7 {
}
function f8(a9, a10) {
    for (let v11 = 0; v11 < 10; v11++) {
        f1(-558705446);
    }
}
C7[Symbol.toPrimitive] = f8;
function f15() {
    delete C7[C7];
}
class C18 {
}
class C19 extends C18 {
}
const v20 = new C19();
function f21() {
    return f15;
}
function f22(a23) {
    return Symbol;
}
Object.defineProperty(v20, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f21, set: f22 });
class C25 extends C18 {
    [v20] = "split";
}
gc();
