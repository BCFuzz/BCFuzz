const v0 = /a\nW/vgi;
function f1(a2, a3, a4, a5) {
    let v6 = 2147483648;
    const v7 = v6 * v6;
    new Int16Array(v0, v6, v7);
    v6--;
    for (const v13 of a2.toString(v7).link(f1)) {
        for (let v14 = 0; v14 < 10; v14++) {
        }
    }
    return a5;
}
f1(v0);
gc();
