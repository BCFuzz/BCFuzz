const v0 = [];
function f1() {
    return v0;
}
v0.get = f1;
function f2() {
    const o3 = {
        129: v0,
    };
    return o3;
}
const v4 = f2();
class C5 extends f2 {
}
const v6 = new C5();
const o7 = {
};
o7.constructor.defineProperties(v4, v6);
gc();
