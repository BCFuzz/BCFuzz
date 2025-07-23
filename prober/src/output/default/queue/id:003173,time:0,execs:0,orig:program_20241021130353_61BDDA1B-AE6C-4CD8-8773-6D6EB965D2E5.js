const v1 = new Float64Array();
function f4() {
    const o10 = {
        set h(a7) {
            const o8 = {
            };
            o8.e = 4035;
            const o9 = {
            };
        },
    };
    return o10;
}
const v11 = f4();
const v12 = f4();
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F13();
const v17 = new F13();
const v18 = new F13();
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    const v24 = this.constructor;
    try { new v24(a22, v17, v11); } catch (e) {}
    a23.h = a23;
}
new F19(v18, v18, v1);
new F19(v17, v17, v16);
new F19(v12, v18, v12);
gc();
