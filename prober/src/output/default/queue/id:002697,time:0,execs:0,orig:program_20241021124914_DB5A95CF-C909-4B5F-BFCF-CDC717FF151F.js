function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4) {
    const o8 = {
        toString(a6, a7) {
            return f3;
        },
    };
    return o8;
}
const v9 = f3(F0);
const v10 = f3();
const v11 = f3();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a14.toString();
}
const v19 = new F12(v10);
const t20 = v19.constructor;
new t20(v2);
new F12(v11);
new F12(v9);
gc();
