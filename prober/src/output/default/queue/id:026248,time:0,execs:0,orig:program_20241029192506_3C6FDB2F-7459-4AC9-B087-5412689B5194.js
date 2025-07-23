const v0 = /n(a)\1/mdyvgis;
function f1() {
    let v2 = 65536n;
    const v3 = v2--;
    v3 ** v3;
    return v2;
}
v0.toString = f1;
try { v0.toString(); } catch (e) {}
gc();
