const v3 = [268435439,268435439,7];
try { v3.at(v3); } catch (e) {}
const v6 = [268435439,[v3,268435439,268435439],268435439];
new BigInt64Array(10);
try { BigInt64Array.apply(v6, BigInt64Array); } catch (e) {}
new BigInt64Array(0);
new Float32Array(2);
const o19 = {
    "maxByteLength": 253,
};
const v21 = new SharedArrayBuffer(1, o19);
const v23 = new BigInt64Array(v21);
try { v23.includes(7); } catch (e) {}
v23.sort(BigInt64Array);
gc();
