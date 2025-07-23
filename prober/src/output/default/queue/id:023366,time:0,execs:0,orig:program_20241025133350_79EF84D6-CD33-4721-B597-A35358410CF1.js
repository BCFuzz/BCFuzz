function f0() {
    const v1 = f0[1];
    v1.caller;
    return v1;
}
f0[1] = f0;
class C3 {
    constructor(a5, a6, a7) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            const v13 = new Uint8Array();
            v13.valueOf = f0;
            v13[3] = v13;
        }
        new F8();
    }
}
new C3();
gc();
