const v1 = [536870888,-47415,2058381765,140353371,2147483648,-9007199254740992];
function f2() {
    return 4294967297;
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F4(4294967297, undefined, f2);
const v10 = v9.constructor;
const v13 = ("-13")[undefined];
function f15(a16, a17) {
    const v18 = a17.constructor;
    v18.prototype = v18;
    new v18();
    return v9;
}
f15(v13, v9);
const v23 = Reflect.construct(Uint32Array, [f15]);
Object.defineProperty(v10, 0, { enumerable: true, get: f2, set: f15 });
const t19 = v23.fill().constructor;
new t19(v1);
let v28 = -1e-15;
const v30 = 4294967297 | v28++;
v30 > v30;
gc();
