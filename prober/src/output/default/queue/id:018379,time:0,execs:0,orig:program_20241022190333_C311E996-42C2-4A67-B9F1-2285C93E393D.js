function f1() {
    return 22255;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f1 });
const v4 = [642.9532470366476,-1.8970240941903296e+307,-Infinity,-2.220446049250313e-16,2.0,-0.0,5.0,1.0,-2.220446049250313e-16];
function f5() {
    v4.push();
}
for (let v7 = 0; v7 < 10; v7++) {
    const v10 = new Uint8ClampedArray();
    v10.toString = f5;
    v10 | 1000;
}
gc();
