function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a5 >>> a5;
    const v8 = a6++;
    v8 + v8;
}
new F3(2147483648, 2147483648);
new F3(721547599, 2147483647);
class C12 {
}
class C13 extends C12 {
}
for (let v14 = 0; v14 < 250; v14++) {
    v14++;
    v14--;
}
gc();
