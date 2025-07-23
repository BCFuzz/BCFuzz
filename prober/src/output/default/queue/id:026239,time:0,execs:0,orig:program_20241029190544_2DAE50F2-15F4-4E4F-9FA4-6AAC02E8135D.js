const v0 = /5[\d-\d]/ms;
function f1(a2, a3, a4) {
    v0["test"](a3);
    return f1;
}
for (let v7 = 0; v7 < 10; v7++) {
    f1();
}
gc();
