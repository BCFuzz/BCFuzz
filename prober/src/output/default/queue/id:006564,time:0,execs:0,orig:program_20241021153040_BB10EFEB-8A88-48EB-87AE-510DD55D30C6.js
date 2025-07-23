class C1 {
    o(a3, a4) {
        -49893386 >>> 1073741823n;
    }
}
const v7 = new C1();
let v8;
try { v8 = v7.o(); } catch (e) {}
const v10 = new SharedArrayBuffer(v8);
const o13 = {
    "maxByteLength": 64,
};
const v15 = new ArrayBuffer(64, o13);
const v17 = new Float32Array(v15);
try { v17.subarray(v10, 1073741823n); } catch (e) {}
gc();
