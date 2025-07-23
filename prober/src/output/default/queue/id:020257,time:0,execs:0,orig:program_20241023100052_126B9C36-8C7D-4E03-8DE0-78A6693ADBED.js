function f0() {
}
Uint32Array[Symbol.toPrimitive] = f0;
const v5 = Uint32Array + 4294967296;
const v6 = /n(a)\1/mdyvgis;
function f7() {
    const o8 = {
    };
    o8.toJSON = v5;
    o8.b = o8;
    return JSON.stringify(o8);
}
v6.toString = f7;
try { v6.toString(); } catch (e) {}
gc();
