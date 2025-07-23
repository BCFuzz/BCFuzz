function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            [-1.0,0.3126099902202306,-6.321390769268861e+307,NaN,1000000000.0,-1000.0,7.687546656035314e+306,354894.04511198564,-699818.5243709931] ** Date;
        }
        /\u{12345}/myvis;
    `;
    eval(v2);
}
new F0();
gc();
