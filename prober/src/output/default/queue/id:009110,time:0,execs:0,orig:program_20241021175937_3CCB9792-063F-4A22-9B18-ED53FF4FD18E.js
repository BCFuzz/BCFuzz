const v0 = [];
function f1() {
    const o3 = {
        m() {
            return f1;
        },
        129: v0,
    };
    return o3;
}
const v4 = f1();
class C5 extends f1 {
    #a = C5;
}
const v6 = new C5();
const o7 = {
};
o7.constructor.defineProperties(v4, v6);
gc();
