const v1 = [6.76340013952489,-1.9898090318160725e+307,0.4960420286310615,-147.11506306885758,0.0,-3.0,2.2250738585072014e-308,154358.42463639285,-1000000000000.0,0.9034987473309268];
v1.done = "536870889";
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2("536870889", F2, v1);
function f8(a9, a10) {
    return v1;
}
v7.next = f8;
function f11() {
    return v7;
}
class C12 {
}
const v13 = new C12();
v13[Symbol.iterator] = f11;
const v18 = createGlobalObject().WebAssembly;
function f19() {
    return v13;
}
function f20(a21) {
    return a21;
}
Object.defineProperty(v18, "parameters", { get: f19, set: f20 });
const t25 = v18.Tag;
new t25(v18);
for (let i26 = -3, i27 = 10; i27--, i26 < i27;) {
}
gc();
