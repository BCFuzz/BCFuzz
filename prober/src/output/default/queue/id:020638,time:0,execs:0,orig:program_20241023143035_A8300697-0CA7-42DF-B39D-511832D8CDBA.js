const v1 = /n(a)\1/mdyvgis;
function f2() {
    const o3 = {
    };
    o3.toJSON = true;
    o3.b = o3;
    return JSON.stringify(o3);
}
v1.toString = f2;
try { v1.toString(v1, f2, true, f2); } catch (e) {}
gc();
