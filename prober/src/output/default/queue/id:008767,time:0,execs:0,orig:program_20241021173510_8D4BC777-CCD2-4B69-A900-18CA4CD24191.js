let v1;
try { v1 = new Uint8ClampedArray(); } catch (e) {}
for (let v2 = 0; v2 < 250; v2++) {
    ("-2147483648").concat().codePointAt(v1);
    for (let v6 = 0; v6 < 5; v6++) {
    }
}
gc();
