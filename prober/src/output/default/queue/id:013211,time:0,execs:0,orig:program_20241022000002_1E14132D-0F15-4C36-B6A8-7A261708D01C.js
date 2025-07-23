const v1 = new Map();
function f2(a3, a4) {
    const v7 = new Proxy([1073741824,-26526], v1);
    let v8;
    try { v8 = v7.toReversed(); } catch (e) {}
    return v8;
}
for (let v9 = 0; v9 < 125; v9++) {
    f2(v9, v9);
}
gc();
