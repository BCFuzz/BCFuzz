function f3() {
    const o5 = {
        ..."536870888",
        ["536870888"]: "536870888",
    };
    return o5;
}
const v6 = f3();
v6[64] = v6;
const v7 = f3();
const v8 = f3();
function f9(a10) {
    a10[8] = a10;
    const o11 = {
        ...v8,
        ...v8,
        "h": f3,
        "e": a10,
    };
    return o11;
}
const v12 = f9(v7);
const v13 = f9(v7);
const v14 = f9(v6);
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    const v20 = this.constructor;
    try { new v20(v14, 512, this); } catch (e) {}
    a17[0];
    this.h = a19;
    this.f = a18;
}
new F15(v13);
new F15(v12, v12);
new F15(v12);
for (let i = 0; i < 5; i++) {
    const v27 = new Date();
    v27.getTimezoneOffset();
}
gc();
