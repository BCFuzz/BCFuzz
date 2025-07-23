function F0() {
    if (!new.target) { throw 'must be called with new'; }
    return this;
    return arguments;
}
const v3 = new F0();
const v4 = [9007199254740992,-65536,128,-268435456,449167210,9007199254740991];
class C5 {
}
new C5();
const v7 = new C5();
class C8 {
}
new C8();
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    function f16(a17) {
        return v7;
    }
}
new F11(v4, 13586, v3);
for (let v19 = 0; v19 < 250; v19++) {
}
gc();
