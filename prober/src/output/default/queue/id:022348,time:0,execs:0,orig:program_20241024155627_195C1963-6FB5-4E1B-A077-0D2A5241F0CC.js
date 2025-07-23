class C2 {
    constructor(a4, a5) {
        for (let v6 = 0; v6 < 25; v6++) {
            this["p" + v6] = v6;
        }
    }
    [415730228] = "546239938";
}
const v9 = new C2(415730228, "546239938");
const v10 = [v9];
function f11() {
    return "546239938";
}
JSON.parse(JSON.stringify(v10), f11);
gc();
