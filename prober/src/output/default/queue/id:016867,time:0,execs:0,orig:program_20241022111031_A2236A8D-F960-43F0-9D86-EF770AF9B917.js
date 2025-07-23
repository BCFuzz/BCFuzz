let v1 = 7 % 7;
const v2 = v1--;
const v4 = new Float32Array(7);
let v5 = v4[3];
const v6 = v5++;
function f8() {
    v4["lastIndexOf"](v2, v6);
    return v6;
}
Array.valueOf = f8;
const v11 = Array(v2);
function f12() {
    return v5;
}
Object.defineProperty(v11, 4, { configurable: true, get: f12 });
v11.indexOf(v11, Array);
gc();
