const v1 = new Int16Array();
const o5 = {
    "maxByteLength": 257,
};
const v7 = new SharedArrayBuffer(7, o5);
try { BigUint64Array.from(v1); } catch (e) {}
try { new Int32Array(v7, 11, v7); } catch (e) {}
const v13 = new Int32Array();
try { v13.with(v13, 130); } catch (e) {}
gc();
