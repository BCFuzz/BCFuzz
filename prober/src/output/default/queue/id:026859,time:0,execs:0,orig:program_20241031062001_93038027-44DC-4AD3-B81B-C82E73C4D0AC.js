function f0() {
    return f0;
}
const v1 = [-4294967297,12,13,1073741823,-3,-3,11,-128,-9007199254740991,-970364385];
const v2 = [-40966,-1,4294967295,23650];
function f4(a5, a6, a7, a8) {
    a6[1] = a6;
    const o9 = {
        __proto__: v2,
    };
    return o9;
}
const v10 = f4(-4096, v1);
for (let v11 = 0; v11 < 5; v11++) {
    for (let i14 = -3, i15 = 10; i15--, i14 < i15;) {
    }
    function F23(a25, a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a26(a27, v10); } catch (e) {}
        for (let v29 = 0; v29 < 5; v29++) {
            Object.defineProperty(v10, v29, { configurable: true, get: f4, set: f0 });
        }
        class C30 {
            constructor(a32, a33) {
                try { a33.shift(a25, a32, a33, a33, a27); } catch (e) {}
            }
        }
        new C30(v11, a26);
    }
    new F23(196.25100004624983, F23);
}
gc();
