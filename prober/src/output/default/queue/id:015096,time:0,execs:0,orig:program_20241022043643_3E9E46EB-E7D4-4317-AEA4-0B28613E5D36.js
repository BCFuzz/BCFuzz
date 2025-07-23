function f0() {
    const v1 = -Infinity;
    const o4 = {
        valueOf(a3) {
            a3[a3] = v1;
            return v1;
        },
    };
    return o4;
}
const v6 = [f0,f0()];
function f7() {
    return f7;
}
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
}
const v14 = new F9();
const v15 = v14.constructor;
const v17 = ("-13")[undefined];
function f18(a19, a20) {
    const v21 = a20.constructor;
    v21.prototype = v21;
    new v21();
    return F9;
}
f18(v17, v14);
Object.defineProperty(v15, 0, { enumerable: true, get: f7, set: f18 });
const v25 = this.Int16Array;
try { new v25(v6); } catch (e) {}
gc();
