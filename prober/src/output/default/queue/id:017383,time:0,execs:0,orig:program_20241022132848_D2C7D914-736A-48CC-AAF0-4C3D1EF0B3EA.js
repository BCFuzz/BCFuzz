const v1 = [NaN,-812404.8417229899,-5.0,290284.5002709192,-2.2250738585072014e-308];
v1.valueOf = Date;
function f3() {
}
Uint32Array.valueOf = f3;
const v4 = Uint32Array + v1;
const v5 = /n(a)\1/mdyvgis;
function f6() {
    const o7 = {
    };
    o7.toJSON = v4;
    JSON.stringify(o7);
    return JSON;
}
v5.toString = f6;
v5.toString(Uint32Array);
gc();
