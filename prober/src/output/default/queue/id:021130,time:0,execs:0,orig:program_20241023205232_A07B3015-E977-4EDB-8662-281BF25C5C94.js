const v2 = new Uint8ClampedArray(1024);
for (const v3 in v2) {
    v2.buffer.transfer();
}
gc();
