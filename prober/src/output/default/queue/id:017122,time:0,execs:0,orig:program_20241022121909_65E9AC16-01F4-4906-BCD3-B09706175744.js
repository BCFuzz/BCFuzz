class C0 {
}
const v1 = new C0();
function f2() {
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = new F4("undefined", F4, "undefined");
    Object.defineProperty(v9, "undefined", { writable: true, configurable: true, value: v1 });
    v9.undefined = v9;
    return "undefined" in v9;
}
for (let v11 = 0; v11 < 25; v11++) {
    f2();
}
gc();
