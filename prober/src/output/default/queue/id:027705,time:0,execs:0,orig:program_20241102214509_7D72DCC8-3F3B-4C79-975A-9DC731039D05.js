const v0 = `
    const v2 = /\u{12345}/myvis.lastIndex;
    function f3() {
        const v4 = [1073741824,9007199254740992,-15,-4294967295,-1273370852,16,1024,1024,536870912];
        const v7 = [[/(?<=a)[^(?:ab)?5]/yiu,v4,v2,f3,f3]];
        const v8 = v7.toString();
        /(?<a>(?<b>(?<c>(?<d>.).).).)Ra||bc/myvis;
        return v8.search(v7);
    }
    f3();
`;
eval(v0);
gc();
