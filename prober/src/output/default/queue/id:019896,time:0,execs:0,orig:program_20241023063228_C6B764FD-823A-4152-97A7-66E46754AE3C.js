const v2 = [255];
v2[0] = v2;
const v3 = [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0];
function f4() {
    return -6.611675714592737;
}
v3[Symbol.toPrimitive] = f4;
const v8 = new Date(v3, v2);
v8.toJSON().replace(0, f4);
gc();
