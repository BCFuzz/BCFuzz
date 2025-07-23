function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 14;
}
const v3 = new F0();
const o4 = {
    "b": F0,
    ...v3,
};
const v5 = [-3.0,1.0,-2.220446049250313e-16,2.0,1.7976931348623157e+308,-2.0,1.371388787180062e+308,-199.78827229268938];
const v7 = Symbol.search;
const o8 = {
};
v7.description = o8;
v5 < F0;
gc();
