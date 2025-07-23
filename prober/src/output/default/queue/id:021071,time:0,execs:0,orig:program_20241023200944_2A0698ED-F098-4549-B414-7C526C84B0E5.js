function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 50; v4++) {
        const v5 = [4294967295,-4294967297,9076,127,4294967295,-1933707790];
        v5[4] = v5;
        const v6 = v5.indexOf(a3);
        v6 / v6;
    }
}
new F1();
new F1();
new F1("m");
gc();
