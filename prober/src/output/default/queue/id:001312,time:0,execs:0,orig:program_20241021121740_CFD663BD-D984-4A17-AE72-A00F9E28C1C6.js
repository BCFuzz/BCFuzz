function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 10;
    this.h = 10;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    function f8() {
        return f8;
    }
    class C9 extends f8 {
    }
    const v10 = new C9();
    const o14 = {
        "maxByteLength": 2312845920,
    };
    const v16 = new ArrayBuffer(750704325, o14);
    const v18 = new Int8Array(v16);
    v18[v10] = 1.7976931348623157e+308;
    const o21 = {
        "c": F0,
        valueOf(a20) {
            super.h = v4;
        },
        1073741825: a7,
        "d": v5,
    };
    return o21;
}
f6(v3);
f6(v5);
f6(v4);
[-928213.7327482463,-Infinity,-1.0];
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
    const v29 = this.constructor;
    try { new v29(); } catch (e) {}
}
new F26();
gc();
