let v3;
try { v3 = Uint32Array(2443, 2443, 2443); } catch (e) {}
const o6 = {
    "maxByteLength": 257,
};
const v8 = new ArrayBuffer(128, o6);
const v10 = new Uint8ClampedArray(v8);
const v13 = new Int8Array(1000);
const v15 = "302036819" >= 2443;
try { v3(Int32Array, v15, ...v10, ...v13); } catch (e) {}
gc();
