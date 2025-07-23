const v1 = /Sa+1Z\p{General_Category=Decimal_Number}/mdvis;
function f2(a3) {
    class C5 extends Array {
    }
    const v6 = new C5();
    v6.concat(v6);
    v1.compile() >>> 4;
    return v6;
}
v1.toString = f2;
try { v1.toString(f2, v1); } catch (e) {}
gc();
