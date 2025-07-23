const v2 = Int16Array.BYTES_PER_ELEMENT;
const v3 = new Int16Array(3681);
for (const v4 in v3) {
    v4.trimStart();
    const v6 = v4.substring(v2);
    v6.length = v6;
}
gc();
