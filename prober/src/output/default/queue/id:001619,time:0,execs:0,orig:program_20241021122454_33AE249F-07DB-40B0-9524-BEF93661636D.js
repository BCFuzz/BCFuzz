const v1 = ("-789426228").constructor;
const v2 = new v1(v1, "-789426228");
function f3() {
    return v1;
}
Object.defineProperty(v2, Symbol.toPrimitive, { writable: true, configurable: true, value: f3 });
const v6 = [960.626210892927,0.6725238080907336,-1.111746397251804e+307,1e-15,282679.5475648043,-1.1648578776746704e+308,-1.0,733.4826723557508,-334583.6834646679];
function f7() {
    return f3;
}
function f8(a9, a10) {
}
f7[Symbol.species] = f8;
v6.constructor = f7;
v6.slice();
gc();
