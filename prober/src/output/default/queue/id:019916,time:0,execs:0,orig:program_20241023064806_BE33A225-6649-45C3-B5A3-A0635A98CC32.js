const v2 = [[]];
v2[1] = v2;
const v3 = [];
const v4 = [v3,"number",v2];
const v5 = /n(a)\1/mdyvgis;
function f6() {
    const o7 = {
    };
    o7.toJSON = v4;
    JSON.stringify(o7);
    return v3;
}
v5.toString = f6;
try { v5.toString(); } catch (e) {}
gc();
