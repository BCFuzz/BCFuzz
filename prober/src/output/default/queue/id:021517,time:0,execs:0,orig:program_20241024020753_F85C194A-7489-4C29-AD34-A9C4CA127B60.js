class C0 {
}
const v1 = new C0();
function f2() {
    return C0;
}
function f3(a4, a5, a6, a7) {
    let v8;
    try { v8 = a4.call(C0); } catch (e) {}
    const v11 = new Uint8Array(1024);
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        const v19 = this.__defineSetter__.__lookupGetter__;
        try { v19(a5); } catch (e) {}
        this.d = v11;
    }
    const v22 = F12.bind(F12, a5, a5).toString;
    let v23;
    try { v23 = new v22(C0, C0, C0, C0, v8); } catch (e) {}
    const v24 = new F12();
    arguments[1] = arguments;
    a5[10] = arguments;
    for (const v27 of v24.d) {
    }
    return v23;
}
f3(v1, f3);
f3(f3, f2);
gc();
