const v1 = /Sa+1Z\p{General_Category=Decimal_Number}/mdvis;
function f2(a3) {
    const v4 = a3++;
    const v6 = (a3 - a3) % v4;
    v1.compile(a3) >>> 4;
    return v6;
}
v1.toString = f2;
try { v1.toString(v1, f2); } catch (e) {}
gc();
