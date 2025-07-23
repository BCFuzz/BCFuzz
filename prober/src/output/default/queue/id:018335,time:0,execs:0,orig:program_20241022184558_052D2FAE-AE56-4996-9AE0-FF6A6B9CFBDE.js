const v2 = new BigInt64Array(undefined, BigInt64Array, undefined);
function f3(a4) {
    a4[a4] = undefined;
    return a4;
}
v2.valueOf = f3;
const v6 = new Uint8Array();
try { v6.fill(Uint8Array, v2); } catch (e) {}
gc();
