function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = new Int32Array(v2, F0);
const v5 = new Int32Array();
const v7 = new Float64Array(v2, Float64Array, Float64Array);
let v9;
try { v9 = BigInt64Array(v5); } catch (e) {}
const v10 = [1000000000000.0,2.0,Infinity,-2.735616879087119e+307,-1.106293781625981e+308,46457.351334702806,-2.220446049250313e-16,4.0];
try { v2.toString(v9, v4, v5, v10, v7); } catch (e) {}
const v14 = new Int16Array(2290);
for (const v15 of v14) {
}
gc();
