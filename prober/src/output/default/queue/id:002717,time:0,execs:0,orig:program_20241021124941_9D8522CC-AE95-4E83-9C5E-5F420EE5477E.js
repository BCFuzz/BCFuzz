function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
new F3(F0, F3);
for (let v8 = 0; v8 < 10; v8++) {
}
for (let v9 = 0; v9 < 5; v9++) {
}
for (let v10 = 0; v10 < 5; v10++) {
}
new SharedArrayBuffer();
for (let v13 = 0; v13 < 5; v13++) {
}
for (let v14 = 0; v14 < 5; v14++) {
}
for (let v15 = 0; v15 < 250; v15++) {
}
gc();
