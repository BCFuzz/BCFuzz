function f0(a1, a2, a3, a4) {
    try { a1(); } catch (e) {}
    parseInt(a1);
    return f0;
}
for (let v8 = 0; v8 < 5; v8++) {
    f0(f0);
}
const v12 = new Uint16Array(4);
v12.every(f0);
gc();
