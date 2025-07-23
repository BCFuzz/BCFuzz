const v0 = [6,-10,38706];
const v2 = new Int32Array();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v2, "h", { writable: true, value: v0.shift() });
}
gc();
