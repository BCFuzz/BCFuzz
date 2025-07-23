const v0 = /f/dyvgis;
const v1 = v0.ignoreCase;
const v3 = new Float64Array(v0, Float64Array);
for (let i = 0; i < 5; i++) {
    const v6 = ["string","string","string","string","string"];
    const v7 = ("string").concat;
    v7.call(v1);
    Reflect.apply(v7, v3, v6);
}
gc();
