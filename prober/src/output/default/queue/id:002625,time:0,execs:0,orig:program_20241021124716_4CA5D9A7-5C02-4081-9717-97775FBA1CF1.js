class C3 {
}
class C4 extends C3 {
}
const v5 = new C4();
v5[Symbol.toPrimitive] = Symbol;
class C7 extends C3 {
    [v5] = "split";
}
WeakSet.constructor = Date;
function f9(a10, a11) {
    return a11;
}
class C12 extends f9 {
}
const v13 = new C12();
function f14() {
    return C12;
}
Object.defineProperty(v13, "toString", { enumerable: true, get: f14 });
const v15 = WeakSet.constructor;
try { new v15(v13); } catch (e) {}
gc();
