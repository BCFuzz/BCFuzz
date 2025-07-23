const v0 = [6,-10,38706];
const v2 = new Int32Array();
for (let i = 0; i < 5; i++) {
    let v3 = v0.shift();
    v3++;
    Object.defineProperty(v2, "h", { writable: true, value: v3 });
}
gc();
