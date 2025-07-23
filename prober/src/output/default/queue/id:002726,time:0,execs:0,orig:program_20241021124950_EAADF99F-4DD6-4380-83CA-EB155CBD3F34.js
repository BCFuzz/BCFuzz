function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6++;
    this.a = a6;
}
new F3(2147483648, 2147483648);
new F3(721547599, 2147483647);
class C10 {
}
class C11 extends C10 {
}
for (let v12 = 0; v12 < 250; v12++) {
    v12++;
    v12--;
}
gc();
