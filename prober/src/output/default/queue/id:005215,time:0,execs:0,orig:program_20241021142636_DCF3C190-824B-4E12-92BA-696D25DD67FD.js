class C0 {
}
const v1 = new C0();
const t3 = v1.constructor;
const v3 = new t3(C0, C0);
class C5 extends WeakSet {
    toString(a7, a8) {
    }
}
const v9 = new C5();
const v12 = new Int32Array(681);
function f13(a14, a15, a16, a17) {
    function f19() {
        const v21 = [WeakSet,WeakSet,WeakSet,WeakSet];
        const v22 = v9.toString;
        Reflect.apply(v22, v3, v21);
        return v22;
    }
    Object.defineProperty(arguments, "valueOf", { writable: true, value: f19 });
    arguments[2] = arguments;
    let v24 = arguments[2];
    return v24--;
}
v12.map(f13);
gc();
