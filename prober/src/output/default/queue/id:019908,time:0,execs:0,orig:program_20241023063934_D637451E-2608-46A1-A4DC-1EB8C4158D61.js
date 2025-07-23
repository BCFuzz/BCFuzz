function f0() {
    return f0;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2(f0, f0, f0);
const v8 = v7.constructor;
const v10 = ("-13")[undefined];
function f11(a12, a13) {
    const v14 = a13.constructor;
    v14.prototype = v14;
    new v14(f11, v14, v14, undefined, v8);
    return a12;
}
f11(v10, v7);
Object.defineProperty(v8, 0, { enumerable: true, get: f0, set: f11 });
const t17 = this.constructor;
const v20 = t17(-1103857354);
function f21(a22) {
    const v23 = [a22,a22,a22];
    for (let v24 = 0; v24 < 250; v24++) {
        function f25(a26, a27, a28, a29) {
            v23.length;
            return arguments;
        }
        f25();
    }
    return a22;
}
Object.defineProperty(v20, "valueOf", { configurable: true, enumerable: true, value: f21 });
v20.toExponential(v20);
gc();
