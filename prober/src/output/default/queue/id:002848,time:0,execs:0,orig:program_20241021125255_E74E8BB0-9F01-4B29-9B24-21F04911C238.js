function f2(a3, a4, a5, a6) {
    a4 + a4;
    try { a5(); } catch (e) {}
}
for (let v9 = 0; v9 < 5; v9++) {
    f2(v9, v9, f2);
}
const v11 = new Uint8ClampedArray(1024);
v11.lastIndexOf(1024);
class C14 {
}
const v15 = new C14();
v15.constructor = Date;
const t13 = v15.constructor;
const v17 = new t13();
v17.getMilliseconds();
gc();
