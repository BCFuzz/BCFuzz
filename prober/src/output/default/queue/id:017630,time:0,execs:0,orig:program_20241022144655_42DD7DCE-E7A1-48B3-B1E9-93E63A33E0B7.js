function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v5 = [6.76340013952489,-1.9898090318160725e+307,0.4960420286310615,-147.11506306885758,0.0,-3.0,2.2250738585072014e-308,154358.42463639285,-1000000000000.0,0.9034987473309268];
v5.done = v4;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F6(v4, v5, v4);
function f12(a13, a14) {
    return v5;
}
v11.next = f12;
function f15() {
    return v11;
}
class C16 {
}
const v17 = new C16();
v17[Symbol.iterator] = f15;
const v22 = createGlobalObject().WebAssembly;
function f23() {
    return v17;
}
function f24(a25) {
    return f23;
}
Object.defineProperty(v22, "parameters", { get: f23, set: f24 });
const t29 = v22.Tag;
const v27 = new t29(v22);
v27.type(v17);
for (let i31 = -3, i32 = 10; i32--, i31 < i32;) {
}
gc();
