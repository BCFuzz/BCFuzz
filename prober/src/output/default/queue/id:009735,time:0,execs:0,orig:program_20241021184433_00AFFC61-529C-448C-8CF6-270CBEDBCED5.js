const v2 = Date.constructor;
let v3;
try { v3 = v2(Uint8ClampedArray); } catch (e) {}
function f4() {
    for (let v5 = 0; v5 < 25; v5++) {
        new BigInt64Array(v3);
    }
    return v3;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f4);
gc();
