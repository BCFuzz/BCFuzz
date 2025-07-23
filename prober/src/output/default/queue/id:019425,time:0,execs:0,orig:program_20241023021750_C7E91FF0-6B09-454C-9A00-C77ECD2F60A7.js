class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5) {
    Object.defineProperty(arguments, "length", { writable: true, configurable: true, enumerable: true, value: arguments });
    gc.apply(v1, arguments);
    return v1;
}
f2();
gc();
