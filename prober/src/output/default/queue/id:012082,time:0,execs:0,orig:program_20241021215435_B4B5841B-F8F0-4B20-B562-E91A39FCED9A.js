const v0 = [38083,4294967297,55343,-65536,10,0,14184];
function f2(a3, a4, a5, a6) {
    const v7 = a4 + v0;
    try { v7.trimStart(); } catch (e) {}
    9n === v7;
    return f2;
}
for (let v10 = 0; v10 < 5; v10++) {
    const t8 = f2(v10, v10, 9n, f2);
    t8();
}
gc();
