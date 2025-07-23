try { Int16Array.call(); } catch (e) {}
const v4 = new Float32Array(8);
v4[5] = v4;
gc();
