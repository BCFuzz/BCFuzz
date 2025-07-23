function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2();
class C8 {
}
class C9 extends C8 {
}
const v10 = new C9();
function f11() {
    v7 + -2147483647;
    const t10 = "fround";
    delete t10.length;
}
Object.defineProperty(v10, Symbol.toPrimitive, { writable: true, enumerable: true, value: f11 });
for (let v16 = 0; v16 < 100; v16++) {
    -v10;
}
gc();
