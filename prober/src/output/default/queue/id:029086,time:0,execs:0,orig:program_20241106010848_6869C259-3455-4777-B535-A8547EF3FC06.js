function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
function f6() {
    return 1024;
}
v5.valueOf = f6;
class C8 {
}
C8[Symbol.toPrimitive] = f6;
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
    const v25 = -Infinity;
    const v28 = ("-789426228").constructor;
    v28.toString = f6;
    eval(JSON.stringify(v28.fromCharCode(-7, v25, v5, v28, C8)));
}
new F11();
for (let i37 = 0, i38 = 10; i38--, i37 < i38;) {
}
gc();
