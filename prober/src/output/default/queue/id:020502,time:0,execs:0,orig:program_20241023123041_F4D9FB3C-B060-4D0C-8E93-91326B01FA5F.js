class C1 {
}
const v2 = new C1();
function f3(a4, a5) {
    const v7 = new Int16Array(a5, a5, 77120152);
    const v9 = new BigUint64Array();
    return Reflect.defineProperty(v7, 77120152, v9);
}
v2.constructor = f3;
const t9 = v2.constructor;
t9();
gc();
