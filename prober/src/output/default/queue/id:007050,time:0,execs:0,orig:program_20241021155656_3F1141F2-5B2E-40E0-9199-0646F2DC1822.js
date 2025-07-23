function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v6 = 0; v6 < 250; v6++) {
    const v8 = new SharedArrayBuffer();
    v8.slice(v6, v6);
    Float32Array.from(F0);
}
gc();
