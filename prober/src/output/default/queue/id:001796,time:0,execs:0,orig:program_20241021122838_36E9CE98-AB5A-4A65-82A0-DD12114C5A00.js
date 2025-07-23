function f2(a3, a4, a5) {
    ("number").strike().split("bigint");
    const v10 = [2087322165,-1439285056];
    const v11 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
    const o12 = {
        __proto__: v11,
        ["m"]: v10,
    };
    try { o12.splice(v11, 3); } catch (e) {}
}
for (let v14 = 0; v14 < 10; v14++) {
    f2();
}
gc();
