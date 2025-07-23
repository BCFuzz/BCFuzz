let v0 = [9007199254740992,-4294967295,536870887,11,54853];
function f1(a2) {
    const v3 = [Infinity,-1000000.0,3.0,0.308614809805127,51946.002872020705,0.8463814433553831,0.6107696411834858];
    const v4 = v3.toLocaleString(a2, v3);
    const o13 = {
        n(a6, a7, a8) {
            const v9 = this;
            const v11 = v9.Intl.DateTimeFormat;
            v11.hour = v4;
            v11(a7, v11);
            return a2;
        },
    };
    const v14 = o13.n;
    let v15;
    try { v15 = v14(v3, o13); } catch (e) {}
    return v15;
}
v0.valueOf = f1;
v0 += v0;
gc();
