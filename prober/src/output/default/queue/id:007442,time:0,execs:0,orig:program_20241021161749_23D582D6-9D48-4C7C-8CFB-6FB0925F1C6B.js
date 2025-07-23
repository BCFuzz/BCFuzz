const v1 = new WeakSet();
const v3 = new Int32Array();
for (let i = 0; i < 5; i++) {
    v1.add(v3);
}
gc();
