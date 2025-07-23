const v2 = new Uint32Array(1000);
for (let v3 in v2) {
    v3++;
    let v6 = v3 % 64;
    v6--;
}
gc();
