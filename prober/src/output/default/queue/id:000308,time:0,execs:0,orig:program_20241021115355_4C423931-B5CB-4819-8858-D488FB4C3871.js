class C1 {
    b;
}
const v2 = new C1();
function f3(a4, a5, a6, a7) {
    const o8 = {
        ...v2,
        2: -1332199317,
        0: a5,
        ...C1,
    };
    return o8;
}
f3(v2, f3, C1, f3);
f3();
for (let v11 = 0; v11 < 5; v11++) {
    function F12() {
        if (!new.target) { throw 'must be called with new'; }
        this.c = this;
    }
    const v18 = new Uint32Array(3);
    const v19 = new Uint16Array();
    Reflect.construct(Uint32Array, [3,3]);
    try { v19["findLastIndex"](...v18, ..."findLastIndex", ...BigUint64Array); } catch (e) {}
    new F12();
    function F26(a28, a29) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F26();
}
gc();
