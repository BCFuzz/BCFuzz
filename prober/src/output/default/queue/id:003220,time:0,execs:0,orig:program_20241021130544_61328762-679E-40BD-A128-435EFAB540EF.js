const o2 = {
};
function f4() {
    const o10 = {
        set h(a7) {
            const o8 = {
            };
            o8.e = 4035;
            const o9 = {
            };
            o9.d = 4035;
        },
    };
    return o10;
}
const v11 = f4();
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const v23 = this.constructor;
    try { new v23(a21, v16, v11); } catch (e) {}
    a22.h = a22;
}
new F18(v17, v17, v15);
gc();
