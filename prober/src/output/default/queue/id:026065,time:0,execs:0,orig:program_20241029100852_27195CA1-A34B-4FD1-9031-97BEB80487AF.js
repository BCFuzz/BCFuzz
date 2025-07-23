const v2 = new Uint32Array(1000);
for (let v3 in v2) {
    const v6 = v3 ** -1;
    let v7 = --v3;
    v7--;
    Math.pow(v7, v6);
}
gc();
