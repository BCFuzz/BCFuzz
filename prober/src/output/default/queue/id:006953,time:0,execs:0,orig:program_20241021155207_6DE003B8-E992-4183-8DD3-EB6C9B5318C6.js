const v1 = /Sa+1Z\p{General_Category=Decimal_Number}/mdvis;
function f2(a3) {
    v1.compile(a3) | 4;
    return 4;
}
v1.toString = f2;
try { v1.toString(4, v1, 4); } catch (e) {}
gc();
