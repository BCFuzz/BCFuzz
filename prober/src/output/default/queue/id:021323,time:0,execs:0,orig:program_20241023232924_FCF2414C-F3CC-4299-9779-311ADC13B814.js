const v0 = /C5v/mdisu;
const v3 = new Int16Array(1880);
for (const v4 in v3) {
    for (let i = 0; i < 5; i++) {
        v0.exec(v4);
    }
}
gc();
