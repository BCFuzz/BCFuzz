function f0() {
    const o6 = {
        set f(a5) {
        },
        "d": "getBigInt64",
        "a": 9007199254740992,
        "c": 6,
    };
    return o6;
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    a12.g = a12;
    a12.h = a12;
    this.c = a12;
}
new F10(v9);
new F10(v8);
new F10(v7);
for (let v16 = 0; v16 < 250; v16++) {
}
gc();
