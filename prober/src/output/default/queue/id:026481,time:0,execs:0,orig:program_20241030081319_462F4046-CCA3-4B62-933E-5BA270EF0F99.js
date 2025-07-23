let v0 = [9007199254740992,-4294967295,536870887,11,54853];
function f1(a2) {
    const v4 = ([Infinity,-1000000.0,3.0,0.308614809805127,51946.002872020705,0.8463814433553831,0.6107696411834858]).toLocaleString();
    const v5 = v4.substring(a2, a2);
    const o14 = {
        n(a7, a8, a9) {
            const v10 = this;
            const v12 = v10.Intl.DateTimeFormat;
            v12.second = v5;
            v12(a8, v12);
            return v4;
        },
    };
    const v15 = o14.n;
    try { v15(); } catch (e) {}
    return a2;
}
v0.valueOf = f1;
v0 += v0;
gc();
