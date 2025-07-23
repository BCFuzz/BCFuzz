const v2 = new Uint8Array();
const v6 = [v2,v2,v2,v2];
const v7 = [591270925,255,-507351579,5516,3,9007199254740991,28989,1073741824,-9223372036854775808,128];
function f8(a9, a10) {
    function f11(a12, a13) {
        a13[0] = v6;
        a13.push(v6);
    }
    f11(v7, v6);
    return a9;
}
const v16 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
v16[Symbol.toPrimitive] = f8;
for (let v19 = 0; v19 < 10; v19++) {
    const o20 = {
        [v16]: v2,
    };
}
gc();
