let v3;
try { v3 = Float64Array(); } catch (e) {}
const o6 = {
    "maxByteLength": 257,
};
const v8 = new ArrayBuffer(128, o6);
const v9 = new Int32Array(v8);
const v12 = new Int8Array(54488);
const v14 = "302036819" >= 2443;
try { v3(Int32Array, v14, ...v9, ...v12); } catch (e) {}
gc();
