const t0 = createGlobalObject().Float16Array;
const v4 = new t0(1024);
for (const v5 in v4) {
    v4.buffer.transfer();
}
gc();
