const v0 = /a\s(a)\1*/mgsu;
const v1 = /a\w/mvi;
function f2() {
    return v1;
}
v1[Symbol.toPrimitive] = f2;
try { ("").split(v0, v1); } catch (e) {}
gc();
