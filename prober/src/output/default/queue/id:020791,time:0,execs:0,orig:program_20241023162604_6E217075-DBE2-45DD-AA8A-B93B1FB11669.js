const v5 = new Float32Array();
const v8 = ArrayBuffer instanceof Float32Array;
try { ArrayBuffer.isView(...v5, ...v8); } catch (e) {}
[...v5];
gc();
