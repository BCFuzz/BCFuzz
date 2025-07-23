class C2 {
}
const v3 = new C2();
const v4 = new C2();
function f5(a6, a7, a8) {
    const o9 = {
        [C2]: a7,
    };
    return o9;
}
f5("object", v4, C2);
const v12 = new Int32Array("symbol", "symbol", v3);
try { v12.sort(); } catch (e) {}
f5();
class C17 extends Date {
}
new C17();
new Float32Array();
const v22 = new Date();
JSON["stringify"](v22);
gc();
