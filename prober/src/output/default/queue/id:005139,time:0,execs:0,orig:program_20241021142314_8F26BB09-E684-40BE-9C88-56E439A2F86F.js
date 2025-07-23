function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
const v4 = v3.d;
const v6 = ([11,4294967295,64,-744280957]).at(v4);
const v9 = new Uint16Array(2770);
v9["includes"](v4, v6);
gc();
