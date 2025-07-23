const v1 = [708.3794223433783,0.7884100359259809,34326.29879965645,0.0];
function f2(a3, a4, a5) {
    const o17 = {
        [undefined](a7, a8, a9) {
            const o12 = {
                "maxByteLength": 2147483647,
            };
            const v14 = new ArrayBuffer(1851, o12);
            const v16 = new Uint8ClampedArray(v14);
            return v16;
        },
    };
    return o17;
}
const v18 = f2();
let v19;
try { v19 = v18.undefined(); } catch (e) {}
v19[737] = v19;
const v20 = f2(v19, undefined, v18);
v20.undefined().subarray(v20, v1);
const v25 = new Uint8ClampedArray(2502);
for (const v26 in v25) {
}
gc();
