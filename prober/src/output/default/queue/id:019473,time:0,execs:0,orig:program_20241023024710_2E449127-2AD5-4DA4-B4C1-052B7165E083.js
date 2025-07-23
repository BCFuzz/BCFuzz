function f4() {
    return f4;
}
const v5 = [f4,f4,f4];
function f6() {
    return 0.0;
}
function f7(a8) {
    return f4;
}
Object.defineProperty(v5, "minimumFractionDigits", { get: f6, set: f7 });
v5.maximumFractionDigits = 4.0;
([f4,f4,f4,v5,4166]).toLocaleString(0.2845669432024295, v5);
gc();
