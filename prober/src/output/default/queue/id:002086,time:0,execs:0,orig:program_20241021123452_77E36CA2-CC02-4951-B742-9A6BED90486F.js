let v0 = 4;
v0++;
const v2 = /Sa+1Z\p{General_Category=Decimal_Number}/mdvis;
function f3(a4) {
    return v2.compile() >>> v0;
}
v2.toString = f3;
try { v2.toString(v0, v0); } catch (e) {}
gc();
