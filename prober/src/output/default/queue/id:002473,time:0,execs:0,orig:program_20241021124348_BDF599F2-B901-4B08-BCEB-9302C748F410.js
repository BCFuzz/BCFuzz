function f0(a1) {
    function f2() {
        return f0;
    }
    class C3 extends f2 {
    }
    new C3();
    const o7 = {
        "maxByteLength": 2312845920,
    };
    new ArrayBuffer(750704325, o7);
    new Int8Array(C3);
    const o12 = {
        1073741825: a1,
    };
}
f0(f0);
f0();
f0();
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
    const v19 = this.constructor;
    try { new v19(); } catch (e) {}
}
new F16();
gc();
