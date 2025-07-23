function f1(a2) {
    gc();
}
Symbol.toString = f1;
class C5 {
}
delete Symbol[Symbol];
class C7 extends C5 {
}
const v8 = new C7();
function f9(a10, a11) {
    const v13 = new SharedArrayBuffer(a10);
    new DataView(v13);
    return Symbol;
}
v8.constructor = f9;
const t16 = v8.constructor;
t16();
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
