const v2 = new Float64Array(3413);
const v3 = [2.0,0.07978209618354537,9.395266797009509,-2.220446049250313e-16,-112.03728000939498];
const o4 = {
    [v2]: v3,
};
const v6 = JSON.stringify(o4);
class C7 {
}
const v8 = C7.constructor;
try { v8(v6); } catch (e) {}
for (let i13 = 0, i14 = 10; Reflect.construct(Int32Array, [i13]) < i14;) {
    i14--;
}
gc();
