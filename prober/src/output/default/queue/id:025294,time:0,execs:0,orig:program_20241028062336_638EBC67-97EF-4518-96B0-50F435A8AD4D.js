const v2 = Array(63254);
const v4 = [[v2,v2,Array]];
function f5(a6) {
    const o7 = {
        [v4]: v4,
        "g": a6,
    };
    return o7;
}
JSON.stringify([f5(f5()).g]);
gc();
