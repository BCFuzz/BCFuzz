function f1(a2, a3, a4, a5) {
    try { a4.apply(undefined, a3); } catch (e) {}
    try { a5.call(); } catch (e) {}
    let v8;
    try { v8 = a5.bind(); } catch (e) {}
    try { v8.call(); } catch (e) {}
    return f1;
}
for (let v10 = 0; v10 < 5; v10++) {
    f1(v10, v10, f1, f1);
}
gc();
