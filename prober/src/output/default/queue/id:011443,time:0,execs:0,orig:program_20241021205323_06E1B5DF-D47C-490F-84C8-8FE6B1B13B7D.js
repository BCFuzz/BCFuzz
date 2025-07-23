async function f0(a1, a2, a3, a4) {
    return a3;
}
class C5 {
}
class C6 extends C5 {
}
const v7 = new C6();
v7.constructor = f0;
v7.constructor.prototype;
gc();
