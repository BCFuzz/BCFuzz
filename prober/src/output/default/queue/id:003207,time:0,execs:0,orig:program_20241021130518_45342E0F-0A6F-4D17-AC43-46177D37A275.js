const v3 = new Int8Array(255);
v3.subarray("freeze", 255);
for (const v5 in v3) {
}
gc();
