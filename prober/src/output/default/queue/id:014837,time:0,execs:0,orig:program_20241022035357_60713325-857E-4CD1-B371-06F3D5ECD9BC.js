const v2 = new Int32Array(4015, 4015, 4015);
new Int16Array(v2, 4015, 4015);
for (let v5 = 0; v5 < 250; v5++) {
    const v6 = /(ab|cde)\1/mis;
    v6.lastIndex = 4015;
    v6.test(v6);
}
gc();
