const v2 = new Float64Array(Symbol);
let v3 = 3.0;
const v4 = v3++;
const v7 = new Int32Array(6);
function f8(a9, a10) {
    return v7["set"](Symbol, v4);
}
v7[Symbol.toPrimitive] = f8;
v7[4] = v7;
function f14() {
    for (let v15 = 0; v15 < 100; v15++) {
    }
    class C17 {
    }
    C17[2] = v2;
    const v18 = C17.toString;
    try { v18(Symbol, v18, v2, v2, C17); } catch (e) {}
    C17[2] = -1.7976931348623157e+308;
    return 6;
}
class C20 extends f14 {
}
new C20();
new C20();
gc();
