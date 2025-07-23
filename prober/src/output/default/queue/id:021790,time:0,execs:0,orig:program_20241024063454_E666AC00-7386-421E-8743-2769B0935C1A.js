const v2 = /Ci(a)\1c^xxx$/mvgis;
const v3 = [v2,v2,v2];
function f4() {
    return Date;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(v3, Symbol.toPrimitive, { enumerable: true, get: f4, set: f5 });
([v3]).toString().search(v2);
gc();
