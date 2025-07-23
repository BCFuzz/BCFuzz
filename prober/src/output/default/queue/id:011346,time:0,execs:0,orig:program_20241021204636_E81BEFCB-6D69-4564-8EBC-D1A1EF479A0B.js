const v2 = new Int16Array(16);
function f3() {
    let v4 = -2147483648;
    v4--;
    return v4;
}
v2.sort(f3);
gc();
