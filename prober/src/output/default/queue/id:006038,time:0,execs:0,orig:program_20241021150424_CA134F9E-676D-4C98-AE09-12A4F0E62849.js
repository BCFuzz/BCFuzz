new Float32Array();
const v4 = new Int16Array(255);
for (const v5 of v4) {
    const v8 = 12385 % 12385;
    try { v5(255, 12385); } catch (e) {}
    Math.clz32(v8);
}
gc();
