function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1(-2147483647, -2147483647, F1);
class C7 {
}
class C8 extends C7 {
}
const v9 = new C8();
function f10() {
    const t10 = v6 + -2147483647;
    return delete t10.length;
}
Object.defineProperty(v9, Symbol.toPrimitive, { writable: true, enumerable: true, value: f10 });
for (let v15 = 0; v15 < 100; v15++) {
    -v9;
}
gc();
