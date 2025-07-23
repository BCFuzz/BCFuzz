const o1 = {
    valueOf() {
        return this;
    },
};
new Int8Array(o1, 255);
const v7 = new Uint8ClampedArray(255);
new Int16Array(v7);
for (let v9 = 0; v9 < 250; v9++) {
}
gc();
