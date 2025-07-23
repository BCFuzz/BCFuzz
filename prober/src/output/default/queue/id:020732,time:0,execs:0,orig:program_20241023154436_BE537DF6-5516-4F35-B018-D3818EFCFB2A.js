const v1 = new WeakMap();
const v2 = [-2.0,NaN,-1.331874367240681e+308,7.623401336330917e+307,-8.229095751205136,4.433881997547491e+307];
for (let i5 = 0, i6 = 10;
    (() => {
        const v7 = i5 < i6;
        v2.__proto__ = v1;
        return v7;
    })();
    i6--) {
}
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
const v25 = [[],"number",v2];
const v26 = /n(a)\1/mdyvgis;
function f27() {
    const o28 = {
    };
    o28.toJSON = v25;
    o28.b = o28;
    return JSON.stringify(o28);
}
v26.toString = f27;
try { v26.toString(); } catch (e) {}
gc();
