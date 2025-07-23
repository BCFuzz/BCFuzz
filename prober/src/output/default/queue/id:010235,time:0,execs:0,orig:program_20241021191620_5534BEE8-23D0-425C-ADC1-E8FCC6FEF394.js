function f1() {
    ("undefined").endsWith("undefined", ("a").indexOf("a", "f"));
    const v8 = new SharedArrayBuffer();
    const v10 = new DataView(v8);
    try { v10.setUint8(undefined, SharedArrayBuffer); } catch (e) {}
    for (let v12 = 0; v12 < 5; v12++) {
    }
    return "undefined";
}
for (let i = 0; i < 10; i++) {
    f1();
}
gc();
