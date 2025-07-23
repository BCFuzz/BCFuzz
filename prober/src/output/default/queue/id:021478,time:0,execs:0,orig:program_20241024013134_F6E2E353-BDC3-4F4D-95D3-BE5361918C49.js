const v1 = /n(a)\1/mdyvgis;
function f2() {
    const o3 = {
    };
    o3.toJSON = false;
    o3.b = o3;
    JSON.stringify(o3);
    return f2;
}
v1.toString = f2;
try { v1.toString(false, v1, f2, false); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 != i10; i10--) {
}
gc();
