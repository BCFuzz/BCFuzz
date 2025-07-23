const o2 = {
};
const v4 = new SharedArrayBuffer(5136);
const v6 = new Int32Array(v4);
createGlobalObject().Atomics.wait(v6, v6, o2, "64");
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
