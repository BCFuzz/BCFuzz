function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = 10;
v2--;
for (let v4 = 0; v4 < 250; v4++) {
    const v5 = v2 && F0;
    v5 || v5;
    eval();
}
gc();
