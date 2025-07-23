const v2 = new Float64Array(243);
const v4 = new Float64Array(121);
const v7 = new BigInt64Array(1000);
function f8(a9, a10, a11) {
    const o13 = {
        get e() {
            return v2;
        },
    };
    return o13;
}
const v14 = [v7];
const v15 = [f8,v14,1000,v14];
[v7,v15,v4,v15];
f8(243, 1000, 121);
f8(1000, 243, v4);
for (let v19 = 0; v19 < 250; v19++) {
    v19++;
    v19--;
}
gc();
