const v1 = makeMasquerader();
const o2 = {
    [v1]: v1,
};
function f3(a4) {
    return makeMasquerader;
}
class C5 extends f3 {
}
for (let v6 = 0; v6 < 250; v6++) {
    const v7 = new C5();
    class C8 {
    }
    try { C8.constructor(v7); } catch (e) {}
    function f10(a11, a12, a13) {
        return a12;
    }
    typeof f10 === "undefined";
}
gc();
