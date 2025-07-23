const v2 = createGlobalObject();
const v3 = v2.Intl;
v3.Segmenter;
const v5 = v3.PluralRules;
v5.supportedLocalesOf();
const v7 = new v5();
const v9 = v7.select().substring;
try { v9(); } catch (e) {}
gc();
