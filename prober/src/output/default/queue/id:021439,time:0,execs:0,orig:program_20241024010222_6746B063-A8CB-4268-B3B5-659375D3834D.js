const v1 = [6.76340013952489,-1.9898090318160725e+307,0.4960420286310615,-147.11506306885758,0.0,-3.0,2.2250738585072014e-308,154358.42463639285,-1000000000000.0,0.9034987473309268];
const v2 = new Uint32Array(v1, Uint32Array, v1);
v2.return = Uint32Array;
function f3(a4, a5) {
    return v1;
}
v2.next = f3;
function f6() {
    return v2;
}
class C7 {
}
const v8 = new C7();
v8[Symbol.iterator] = f6;
const v13 = createGlobalObject().WebAssembly;
function f14() {
    return v8;
}
function f15(a16) {
    return Uint32Array;
}
Object.defineProperty(v13, "parameters", { get: f14, set: f15 });
const v17 = v13.Tag;
try { new v17(v13); } catch (e) {}
for (let i21 = -3, i22 = 10; i22--, i21 < i22;) {
}
gc();
