let v0 = -58120;
class C1 {
}
const v2 = new C1();
function f3(a4, a5) {
    v0 += v0;
    return v2;
}
const t8 = v2.constructor;
const v7 = new t8();
class C9 extends WeakSet {
}
const v10 = new C9();
v10.toString = f3;
const v13 = new Int32Array(681);
function f14(a15, a16, a17, a18) {
    function f20() {
        const v22 = [a16,a16,a16];
        Reflect.apply(v10.toString, v7, v22);
        return v13;
    }
    Object.defineProperty(arguments, "valueOf", { writable: true, value: f20 });
    arguments[2] = arguments;
    let v25 = arguments[2];
    v25--;
    return a16;
}
v13.map(f14);
gc();
