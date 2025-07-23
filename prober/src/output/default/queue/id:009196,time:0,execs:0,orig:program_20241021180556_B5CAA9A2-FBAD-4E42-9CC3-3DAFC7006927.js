function f0() {
    return f0;
}
const v1 = [10000,-8,990572003,1073741825,-1024,-2,1183003978];
const v2 = [7,-6447,-7,-1];
function f3(a4) {
    a4[3] = a4;
    const o5 = {
    };
    return o5;
}
f3(f0);
const v7 = f3(v2);
const v8 = f3(v1);
const v9 = v8.constructor;
v9.setPrototypeOf(v1, v8);
const v11 = v9(f0);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a15.constructor.freeze(v11);
}
const v18 = new F12(v8, v7);
new F12(v18, v8);
gc();
