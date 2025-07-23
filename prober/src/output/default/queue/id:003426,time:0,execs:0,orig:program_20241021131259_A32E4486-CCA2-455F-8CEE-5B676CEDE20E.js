class C0 {
    g;
}
const v1 = new C0();
function f2(a3, a4) {
    return a4;
}
v1.valueOf = f2;
const v5 = new C0();
const v6 = new C0();
Object.defineProperty(v6, Symbol.toPrimitive, { configurable: true, value: f2 });
delete v5.g;
gc();
