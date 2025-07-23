function f2() {
    return 6.785211959043738e+306;
}
class C3 {
}
const v4 = new C3();
function f5(a6, a7) {
    return Math.floor(1024);
}
v4.valueOf = f5;
v4.constructor = Date;
const v11 = v4.constructor;
v11.valueOf = f2;
new v11(v4, v11);
gc();
