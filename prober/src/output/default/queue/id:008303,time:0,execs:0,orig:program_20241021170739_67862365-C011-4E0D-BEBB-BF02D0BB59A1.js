const v0 = [5.0];
function f1() {
    return v0;
}
for (let v2 = 0; v2 < 100; v2++) {
    v0.some(f1);
}
gc();
