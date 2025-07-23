const v2 = new Uint8Array(2147483648);
for (let v3 = 0; v3 < 5; v3++) {
    v2.length %= v3;
}
gc();
