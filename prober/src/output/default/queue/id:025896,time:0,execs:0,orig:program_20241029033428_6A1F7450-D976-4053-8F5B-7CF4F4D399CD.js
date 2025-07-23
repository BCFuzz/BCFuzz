const v3 = new Int8Array(207);
const v4 = [Symbol,Symbol,Symbol,Symbol];
v4.valueOf = Symbol;
const v5 = v4.valueOf(v3);
eval(v5.toLocaleString(v5, v5, v4, 207));
gc();
