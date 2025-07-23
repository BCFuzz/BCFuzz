function f0() {
    const o9 = {
        set h(a4) {
            const o5 = {
            };
            o5.e = 4035;
            const o6 = {
            };
            o6.e = 4035;
            o6.d = 4035;
            const o7 = {
            };
            o7.e = 4035;
            o7.d = 4035;
            o7.c = 4035;
            const o8 = {
            };
            o8.e = 4035;
            o8.d = 4035;
            o8.a = a4;
        },
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
const v12 = f0();
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    a15.h;
}
const v17 = new F13(v10);
const v18 = new F13(v11);
const t33 = v18.constructor;
new t33(v10);
const v21 = new F13(v17);
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    const v27 = this.constructor;
    try { new v27(a25, v18, v10); } catch (e) {}
    a26.h = a26;
}
new F22(v21, v21, v17);
new F22(v18, v18, v17);
new F22(v12, v21, v12);
gc();
