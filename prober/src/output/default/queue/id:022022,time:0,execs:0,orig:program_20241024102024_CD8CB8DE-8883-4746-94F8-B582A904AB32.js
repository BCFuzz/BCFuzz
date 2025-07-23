const v1 = new Int32Array(Int32Array);
const v4 = new Float64Array(3413);
const v5 = [2.0,0.07978209618354537,9.395266797009509,-2.220446049250313e-16,-112.03728000939498];
const o6 = {
    [v4]: v5,
};
o6.toJSON = v1;
JSON.stringify(o6);
gc();
