const v1 = [1.7976931348623157e+308];
function f2(a3) {
    try { a3.copyWithin(4); } catch (e) {}
}
f2.length = f2;
Object.defineProperty(v1, 2147483648, { enumerable: true, set: f2 });
v1[2147483648] = v1;
gc();
