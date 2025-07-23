function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    new Uint16Array(268435456);
}
new F0(F0, F0);
new F0();
new F0();
function f10(a11, a12, a13, a14) {
    const o20 = {
        toString(a16, a17) {
            eval(a16);
        },
    };
    o20.toString();
}
f10.call();
gc();
