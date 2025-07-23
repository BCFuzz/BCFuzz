function f1(a2) {
    return 2n;
}
let v3 = [2n,2n];
function f4() {
    return f1;
}
Object.defineProperty(v3, Symbol.toPrimitive, { get: f4 });
v3++;
gc();
