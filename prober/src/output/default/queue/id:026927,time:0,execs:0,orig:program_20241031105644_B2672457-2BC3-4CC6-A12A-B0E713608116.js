const v1 = `
    /Da\b!xi\p{gc=Nd}OWG(\cj\cJ\ci\cI\ck\cKC\ud808\udf45*\xed\xb0\x80)?/dygisu;
`;
const v3 = v1.split();
try { v3.flatMap(eval); } catch (e) {}
gc();
