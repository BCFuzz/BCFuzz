const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    try { v3.toLocaleLowerCase(); } catch (e) {}
    ("MAX_VALUE").codePointAt("MAX_VALUE");
    ("536870888").lastIndexOf(1000);
    new Int8Array(7);
}
gc();
