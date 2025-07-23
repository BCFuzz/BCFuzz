class C3 {
}
new C3();
new C3();
new C3();
function f7() {
    function f8() {
    }
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
new F10();
function f17(a18, a19, a20) {
    Object.defineProperty(arguments, 2, { enumerable: true, get: f7 });
    return arguments;
}
const v22 = f17(F10);
v22[2] = v22;
class C24 extends Uint8Array {
}
gc();
