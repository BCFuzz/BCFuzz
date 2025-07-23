let v0 = 210;
const o4 = {
    "maxByteLength": 3738356384,
};
const v6 = new ArrayBuffer(14, o4);
const v8 = new Int32Array(v6);
const v9 = new Uint8Array(v0);
for (const v10 of v9) {
    [...v0] = v8;
}
gc();
