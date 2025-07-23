new Map();
for (let v10 = 0; v10 < 5; v10++) {
    const v13 = ("p" + v10).codePointAt;
    try { v13.apply(); } catch (e) {}
    try { v13(); } catch (e) {}
}
let v19;
try { v19 = Uint8ClampedArray.from(); } catch (e) {}
for (const v20 in v19) {
}
let v21 = 44485;
for (; v21--;) {
}
eval();
gc();
