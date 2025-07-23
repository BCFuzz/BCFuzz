const v0 = /(?:a+)?/msu;
v0.lastIndex = v0;
const v1 = v0.toString();
const v4 = new Uint32Array(1000);
for (const v5 in v4) {
    v0.exec(v1);
}
gc();
