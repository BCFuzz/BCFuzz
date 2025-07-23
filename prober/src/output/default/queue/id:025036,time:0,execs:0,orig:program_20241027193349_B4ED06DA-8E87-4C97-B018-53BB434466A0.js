const v1 = /(?:a+)?/msu;
v1.toString = Date;
const v2 = v1.toString();
const v5 = new Uint32Array(1000);
for (const v6 in v5) {
    v1.exec(v2);
}
gc();
