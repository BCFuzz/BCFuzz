function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v6 = new F2(2, 63);
function f7() {
    return v6.b;
}
const v10 = [478322398,-51664,2147483649,-5];
v10[Symbol.toPrimitive] = f7;
"matchAll" ** v10;
gc();
