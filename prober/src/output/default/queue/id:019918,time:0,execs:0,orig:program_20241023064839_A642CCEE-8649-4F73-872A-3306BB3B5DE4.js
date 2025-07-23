const o0 = {
};
function f3(a4, a5, a6) {
    for (let v7 = 0; v7 < 5; v7++) {
        switch (a5) {
            case a6:
                break;
        }
        f3();
    }
    for (const v11 of Float64Array("object", a4)) {
    }
    return a5;
}
try { f3(o0, "object", "1em"); } catch (e) {}
gc();
