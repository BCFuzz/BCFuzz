let v0 = 9;
const v2 = new BigInt64Array(v0);
new Float64Array(1);
function F7() {
    if (!new.target) { throw 'must be called with new'; }
}
new F7();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
const v17 = Symbol.toPrimitive;
const v18 = v15.constructor;
v18();
for (const v21 of "number") {
    for (let v23 = 0; v23 < 50; v23++) {
        delete v18[9];
    }
    const v26 = gc();
    new Float32Array(15);
    const v28 = typeof v26;
    v28 === "number";
    try { v17["valueOf"](v26, "valueOf", v28); } catch (e) {}
}
let v33 = new Int32Array();
({"buffer":v33,"length":v0,} = v2);
gc();
