function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5) {
    return true;
}
F1.valueOf = f4;
let v7;
try { v7 = ("function").substring(F1, "function"); } catch (e) {}
for (let i12 = 0, i13 = 10 + 10;
    (() => {
        i13--;
        const v15 = i12 < i13;
        ("isConcatSpreadable").replace("isConcatSpreadable", v7);
        return v15;
    })();
    ) {
}
gc();
