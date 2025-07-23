function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C6 {
}
const v7 = new C6();
function f8(a9, a10) {
    return arguments;
}
const v12 = f8(2, f8, undefined, v2);
delete v12[v7];
v12[v2] = 6;
gc();
