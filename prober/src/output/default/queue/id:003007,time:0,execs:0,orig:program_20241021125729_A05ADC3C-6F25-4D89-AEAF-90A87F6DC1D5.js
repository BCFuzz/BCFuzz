function f0() {
    const v3 = ("function").includes;
    const o8 = {
        set h(a5) {
            const o6 = {
            };
            o6.e = 4035;
            const o7 = {
            };
            o7.e = v3;
            o7.d = 4035;
            f0.a = a5;
        },
    };
    return o8;
}
const v9 = f0();
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
}
const v13 = new F10();
const v14 = new F10(f0);
const v15 = new F10(v14);
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    const v21 = this.constructor;
    try { new v21(a19, v14, v9); } catch (e) {}
    a20.h = a20;
}
new F16(v15, v15, v13);
gc();
