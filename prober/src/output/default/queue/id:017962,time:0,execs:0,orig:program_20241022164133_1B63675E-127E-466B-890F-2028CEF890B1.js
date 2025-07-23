function f0() {
    return f0;
}
function f1() {
    return f0;
}
function f2(a3) {
    const o13 = {
        [f1](a5) {
        },
        toString(a7, a8, a9) {
            JSON["stringify"](this);
            return a3;
        },
    };
    return o13;
}
const t17 = f2();
t17.h >>>= f2();
gc();
