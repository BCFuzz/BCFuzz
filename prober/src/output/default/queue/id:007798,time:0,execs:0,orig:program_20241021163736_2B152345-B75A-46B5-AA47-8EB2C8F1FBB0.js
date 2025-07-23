function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = `
        const v6 = [536870888];
        with ([-1418288338,1890054263,64122,-4294967296,7,-63644,1094129896,48202,367263938,24122]) {
            length = v6;
        }
    `;
    eval(v5);
}
new F0();
gc();
