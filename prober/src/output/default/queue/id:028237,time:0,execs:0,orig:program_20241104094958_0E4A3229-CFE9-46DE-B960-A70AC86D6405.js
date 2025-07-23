const v2 = new Int8Array(207);
const v3 = v2.join(207);
const v5 = [v3,[v3],207];
v5.reverse();
eval(([v2,v5]).valueOf(v5).toLocaleString());
gc();
