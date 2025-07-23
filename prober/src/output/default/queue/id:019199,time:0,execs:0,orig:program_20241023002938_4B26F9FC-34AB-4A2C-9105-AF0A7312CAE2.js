const v0 = /Sa+1Z\p{General_Category=Decimal_Number}/mdvis;
const v2 = createGlobalObject();
const v3 = v2.Float16Array;
function f4(a5) {
    const o8 = {
        "maxByteLength": 1000,
    };
    const v10 = new ArrayBuffer(1000, o8);
    const v12 = new Float64Array(v10, v3, v10);
    v12[80] = v12;
    return v0;
}
v0.toString = f4;
v0.toString(v3, v2, f4, createGlobalObject);
gc();
