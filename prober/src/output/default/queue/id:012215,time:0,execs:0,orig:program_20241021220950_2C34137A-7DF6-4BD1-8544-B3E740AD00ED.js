const v0 = [1.7976931348623157e+308];
function f1(a2) {
    try { a2.pop(); } catch (e) {}
    return a2;
}
Object.defineProperty(v0, 2147483648, { enumerable: true, set: f1 });
v0[2147483648] = v0;
gc();
