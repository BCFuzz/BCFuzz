const v1 = new Int32Array();
with (v1) {
    new Int8Array(v1, Int8Array, Int8Array);
}
gc();
