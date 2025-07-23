const v10 = Uint16Array ^ [1073741824,-4294967295,-1013382384,9223372036854775807,4096,23819,9007199254740990,-9007199254740992];
const v13 = new Uint16Array(512);
for (let i = 0; i < 5; i++) {
    const v17 = new SharedArrayBuffer(256);
    const v19 = new DataView(v17);
    v19.getUint8(v10);
}
for (const v21 of v13) {
}
gc();
