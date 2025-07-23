class C0 {
}
const v1 = new C0();
function f2() {
    return C0;
}
function f3(a4, a5, a6, a7) {
    let v8;
    try { v8 = a4.call(); } catch (e) {}
    const v11 = new Uint8Array(1024);
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = v11;
    }
    const v19 = F12.bind().toString;
    let v20;
    try { v20 = new v19(f3, v19, a5); } catch (e) {}
    const v21 = new F12(v8, v20, C0, v20);
    arguments[1] = arguments;
    a5[10] = arguments;
    for (const v24 of v21.d) {
    }
    return a4;
}
f3(v1, f3);
f3(f3, f2);
gc();
