function f0() {
    NaN / NaN;
    const o5 = {
    };
    try { o5.o(); } catch (e) {}
    return o5;
}
const v7 = f0();
const v8 = f0();
const v9 = v8.o;
let v10;
try { v10 = v9(v8, v8); } catch (e) {}
try { v9(); } catch (e) {}
v10 & 1000000000000.0;
const v18 = 1633 >>> 1633;
v18 - v18;
1633 * 1633;
const v22 = new Float64Array();
v22.subarray();
Uint8Array.f = v7;
const v27 = 2 >>> 2;
v27 >>> v27;
const v30 = new Int32Array();
v30.length = v30;
const v31 = v30.indexOf;
try { v31(); } catch (e) {}
Set.a = Set;
let v34;
try { v34 = Set(); } catch (e) {}
try { v34.forEach(); } catch (e) {}
const t30 = "POSITIVE_INFINITY";
const v37 = delete t30[Set];
!(v37 && v37);
gc();
