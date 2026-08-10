const testInput = 'mxmxvkd kfcds sqjhc nhms (contains dairy, fish)\n' +
    'trh fvjkl sbzzf mxmxvkd (contains dairy)\n' +
    'sqjhc fvjkl (contains soy)\n' +
    'sqjhc mxmxvkd sbzzf (contains fish)';

const realInput = 'cqvc vmkt sbvbzcg jjfhf mzjnsm xhnl zlkvkzt ssxljz vshd ptpqnl bzrtth vtffks bnl ntrqq cdhlqp vmks npgxl pvzhm vnbrhb ksm gvqdr mml fjbbj gzfm bllk rkgjkvl xmhsbd nhx clbzn vsssd kcrh ttqqvb pnlkl gdbs fpbqsb jkxsgpk lqttkm lgn rrjb vfktc gcxjz hzhzkn dlcgqg lsnrh sxjxjx rxvzb rvnfcrr rlmv tthhp bqvr mnlcj pmlqgp kfxr rsbph chbtp gzhzhrc jsqpt bmqh ljxsf rqjdcb fhcmcth fsbn jsjz flhn rtxkp qlrjf dnprvn ntft lcnxpz npkvt stpzhrp krsdgrm bbqs (contains fish, soy, nuts)\n' +
    'vshd psqkpr bqprv rvpgl frgmd xnsxv lhfj kfxr cqvc pkvx ncxd zpkl ssxljz vfktc vnbrhb vfrrd dcqqd vcngs rzzt xhghxjg ntft jdmvk xdp fhcmcth gvqdr xzhxj vtdf rqjdcb sshkphb lkr clbzn bvb bbqs kkbbb pnlkl lmnbtpn ljjl xmhsbd fpd jsjz rtxkp zlkvkzt pvzhm tdtfnv ntpnb bjslhf qjzq nhx kvzhn xtd jkxsgpk sbvbzcg rrjb hdgrmv zkhfkg vtffks jxrs (contains nuts)\n' +
    'xlkf ljjl mbsc pvzhm zlkvkzt gbhqd lmnbtpn mnlcj sbvbzcg psqkpr xjkpm gzhzhrc cqvc lfxzl lkr sndbnc xzhxj vtffks sshkphb fsbn krsdgrm rkgjkvl lqxt vqgcbr ptpqnl vfrrd jfmvtdd dlcgqg xmhsbd fchcj ntft qjzq chbtp jsqpt jzjc fxhts rlmv tthhp mftbj jdvxf jsjz qrt zkhfkg ggbpln svqkg nhx bbkq stttxbm kfxr rtzcq phgcp vtdf vfcrdm (contains wheat)\n' +
    'gdnkc jfmvtdd vqjl mbcx jdrvf ntrqq xmhsbd npgxl vmkt jjrm nhx lcnxpz cqvc vtffks psqkpr kfxr fsbn fchcj bqtdv tthhp mml qxqngjh ntpnb xnsxv kpjll sshkphb sndbnc tmxm pvzhm cghj lhfj lch kqbkb mmnx bjslhf xzhxj krsdgrm cdhlqp bbkq rvpgl trls gsq jvv pmlqgp lkr srmtb bllk lfxzl cbxrs tdtfnv qlrjf rrjb bzrtth bqprv xxrzn tbjh jkxsgpk kcrh gzfm gdvfsd vk xdp fjbbj fxhts ncqr rzzt ptpqnl jzjc mqb rtxkp chbtp bqvr (contains wheat, soy)\n' +
    'fsbn zmp mbcx ptpqnl hchrm ttqqvb kqbkb lrgd mmnx zpkl bzrtth dmssm lkr bqtdv mnlcj gfvfs vsssd sbvbzcg bldts bbkq vjmrl jdvxf jzjc dnprvn fjbbj vnbrhb qbmg rhzjdcjz gdbs xtd lkck dvnbt ggbpln bvb kfxr cdhlqp xzhxj hzhzkn stttxbm jdmvk lfxzl clbzn srbhb chbtp gzfm rvnfcrr ksm krsdgrm rtzcq jxrs fxg vfcrdm rrjb jdrvf xmhsbd lqttkm gdvkh vfktc vdqtnr ntft zlkvkzt jsqpt tmxm lhfj phgcp frgmd plgsn vtffks qxqngjh stpzhrp mftbj vmkt bqprv sjft rnqh fhcmcth sshkphb rtxkp xnhbrx dcqqd nhx vtdf dhtbh rzzt svqkg lmnbtpn lch cqfld pkvx (contains peanuts, nuts, sesame)\n' +
    'tthhp sjft zctbc cbxrs jzjc hzhzkn xxrzn xzhxj qxqngjh flhn rqjdcb xtd ljxsf bqvr ncqr pvzhm jvv lkr ttqqvb jdmvk xmhsbd vmks xlkf mzjnsm qdt bbkq fhcmcth lrgd dmssm phgcp ntft cqvc jcr cdhlqp lgn sbvbzcg kcrh ptpqnl xkmfx dsphl qnqg lfxzl vsssd ggbpln cqfld chbtp vtffks lmnbtpn qrt rsbph kqbkb vnbrhb qlrjf bkkhrl fchcj plgsn jfmvtdd rkgjkvl gbhqd rrjb rtzcq bvb vjmrl jsqpt clbzn xghfgf rdqs fnngtqh npkvt vmkt jdvxf kfxr dlcgqg tmxm sxjxjx vk fpd bldts fpbqsb mqb zkhfkg svqkg jjrm vqgcbr lbnsscn kvzhn mmnx (contains soy, shellfish, eggs)\n' +
    'vnbrhb ckknl trls nhx chbtp lkr vfktc jxrs kpjll vsssd qzckbb plgsn gfvfs bqprv lgn hzhzkn pmlqgp sjft pnlkl mml ntft frgmd bkkhrl hchrm qjzq dsjxr flhn xlkf zlkvkzt cdhlqp rtzcq lkck xmhsbd ttqqvb vtdf phgcp cqvc bjslhf vdqtnr kfxr dcqqd dsphl lmnbtpn vmks xjkpm jdvxf gzfm xtd lbnsscn vjmrl tthhp hdzcch jsjz lch jjfhf fpbqsb gdvkh nmnfx xzhxj njdq ptpqnl jkxsgpk zctbc sxjxjx (contains nuts, peanuts, shellfish)\n' +
    'rxvzb gdnkc mzjnsm lqxt jfmvtdd bvb bkkhrl tbjh vqjl vqgcbr xlkf dmrvf dlcgqg qbmg gdvfsd ntft jsjz mbcx fjbbj qrt krsdgrm kqbkb xhghxjg vnbrhb qdt xmhsbd ljxsf qlrjf dcqqd jsqpt vfrrd pkvx clbzn jzjc fpd xtd qzckbb gfvfs njdq lkr gsq xdp bldts gzfm ncqr rlmv xxrzn fnngtqh qnqg xzhxj vmks chbtp vshd npgxl stttxbm jvv mqb fchcj lch kfxr mmnx hzhzkn kvzhn kcrh rzzt fxhts phgcp bllk jlpjdb rdqs bzrtth nhx dnprvn svqkg gzhzhrc jdmvk npkvt kpjll rrjb (contains eggs, shellfish)\n' +
    'tthhp qxqngjh rrjb fsbn jdvxf fjbbj zkhfkg zmp zctbc vfcrdm mftbj zbm gfvfs plgsn rtzcq rkgjkvl vqjl stttxbm vsssd ggbpln njdq xmhsbd zpkl rtxkp vmjjv mbsc nhx xzhxj ntrqq ssxljz vmkt qrt gdnkc zlkvkzt lkr cdqt cqvc pvzhm kfxr rlmv rhzjdcjz rvpgl vfktc dcqqd bjslhf chbtp lrgd rqjdcb gdbs fhcmcth vcngs ncxd (contains wheat, shellfish, peanuts)\n' +
    'qdt gdnkc vfrrd xghfgf hzhzkn chbtp lmnbtpn jzjc xzhxj mqb xlkf kpjll bjslhf fpd gdvfsd plgsn ksm kqbkb lhfj xmhsbd lch xdp cqvc sjft vtffks vfcrdm vqjl stpzhrp lkr kfxr mbcx mbsc xnhbrx hdzcch zbm rrjb lqxt rvpgl ntft jxrs krsdgrm svqkg lcnxpz (contains wheat, shellfish, soy)\n' +
    'vqjl chbtp gdvfsd cdqt dlcgqg xmhsbd bkkhrl dcqqd tbjh zpkl svqkg gbhqd xnhbrx cbxrs vcngs xxrzn xzhxj mbcx bbkq vmks fxg gcxjz zlkvkzt zmp fchcj pmlqgp lqxt flhn ncxd nhx jjrm xkmfx jkxsgpk gdbs kcrh bldts ntft rrjb rdqs ntrqq cqvc qrt kqbkb (contains shellfish, wheat)\n' +
    'zpkl vfrrd phgcp vdqtnr vbrnf rqjdcb vnbrhb qnqg rrjb cghj rtzcq xzhxj ssxljz xnhbrx xmhsbd mftbj jkxsgpk vcngs nhx bqprv bbkq rsbph stttxbm dcqqd chbtp vtdf lhfj sxjxjx fpbqsb lgn rdqs frgmd cdqt tbjh xhnl dmssm jxrs lbnsscn ntpnb vshd hchrm fjbbj bmqh tmxm vk jzjc jdrvf vqjl qdsp cqvc ntft (contains sesame, fish)\n' +
    'hdzcch lkr gdvfsd tbjh mnlcj dlcgqg rnqh xzhxj cqvc bjslhf srbhb jxrs vtffks xhnl qbmg kkbbb bzrtth xmhsbd kqbkb qbdjjt fxhts bbkq dcqqd rqjdcb sjft rvpgl vjmrl mbsc dvnbt stttxbm gvqdr ntft srmtb gdbs sndbnc jfmvtdd bnl rlmv fxg fpbqsb lbnsscn ljjl tthhp cdhlqp rzzt xtd jdrvf fpd ntpnb xlkf vmks jdmvk rrjb lqxt bqprv gfvfs fklqd ttqqvb chbtp njdq kfxr jsjz svqkg jvv mftbj npgxl zkhfkg gzhzhrc (contains sesame, eggs)\n' +
    'pmlqgp xnsxv bnl jfmvtdd xxrzn xhghxjg jjrm mftbj xzhxj pvzhm vtffks cdqt cdhlqp npgxl rlmv trls svqkg hzhzkn tthhp xmhsbd vk vbrnf krsdgrm bmqh srmtb gvqdr vqjl jlpjdb jcr lqttkm kfxr gdbs ntft nmnfx jdvxf vshd nhx gfvfs bvb xdp fnngtqh kpjll ncqr rqjdcb rvnfcrr dlcgqg lsnrh vfrrd vmks dsphl vtdf cqvc gbhqd lrgd rzzt zkhfkg chbtp ksm dcqqd (contains peanuts, nuts)\n' +
    'krsdgrm bnl ncqr jzjc vmks vtdf gsq vmkt cqvc mbcx zkhfkg tmxm rrjb jdvxf mmnx xdp vnbrhb xzhxj ptpqnl lmnbtpn xhghxjg jjfhf xmhsbd gfvfs dlcgqg lkr fklqd qbdjjt jvv bjslhf zpkl sjft mnlcj ckknl dsphl sbvbzcg fpd bkkhrl lcnxpz chbtp gcxjz rnqh dsjxr rdqs xnhbrx kfxr mzjnsm vfktc lsnrh ntft (contains peanuts, nuts)\n' +
    'xzhxj qzckbb kfxr jjrm lfxzl sbvbzcg pkvx fxhts dmssm vshd xlkf gbhqd bqtdv xtd qjzq ksm ttqqvb pnlkl xhghxjg trls cbxrs lch vcngs jsqpt bnl njdq dsphl vdqtnr ncqr fpd lcnxpz bjslhf vmks clbzn xjkpm sjft xhnl lgn vfcrdm dnprvn cghj vfrrd vtdf ptpqnl vbrnf dlcgqg stttxbm fpbqsb rxvzb jzjc kkbbb zlkvkzt vsssd mbsc tthhp rzzt ckknl jsjz vqjl pmlqgp nhx vqgcbr gdvfsd mbcx mmnx sndbnc rrjb cqvc dsjxr zpkl bbqs bkkhrl chbtp xmhsbd dvnbt zmp tdtfnv jvv (contains wheat, peanuts, shellfish)\n' +
    'xmhsbd gdvkh pkvx xdp lcnxpz rrjb dsjxr rvnfcrr dmssm frgmd hzhzkn mftbj xghfgf rxvzb qnqg cdhlqp kqbkb dnprvn hdzcch rtzcq xxrzn gdvfsd hchrm mnlcj xlkf mzjnsm nhx fklqd lbnsscn kfxr gzhzhrc chbtp vk cqvc stttxbm fsbn dcqqd jkxsgpk kvzhn ptpqnl krsdgrm rdqs dsphl lkck jcr tthhp jjfhf zpkl sxjxjx jdvxf fhcmcth sjft ntft ttqqvb jdrvf srmtb sndbnc pvzhm (contains peanuts, sesame, fish)\n' +
    'nhx ntft qdsp xnsxv rrjb xzhxj vmkt pmlqgp lch jkxsgpk fchcj xkmfx lkck tdtfnv fklqd rvnfcrr tmxm phgcp jdvxf svqkg ttqqvb dmrvf mbsc vshd kvzhn gdvkh cdqt fjbbj sndbnc ljxsf qbdjjt kfxr vtffks kpjll njdq dnprvn xmhsbd vcngs xjkpm flhn zpkl srbhb frgmd ptpqnl ntrqq vfrrd jvv mbcx cbxrs npgxl jcr vqgcbr plgsn dcqqd jjfhf xhnl qdt chbtp jdmvk hzhzkn psqkpr vnbrhb pnlkl vmks hdgrmv vk fpd jlpjdb qzckbb gvqdr bbkq (contains fish, eggs, soy)\n' +
    'xnhbrx bqprv kkbbb jjrm ptpqnl gdbs stpzhrp njdq qnqg lkr vtffks cdhlqp mzjnsm xlkf gsq bbqs chbtp nhx qzckbb hchrm vk xtd qbmg plgsn jvv pvzhm xzhxj ckknl gcxjz vdqtnr vfrrd ggbpln ncqr rrjb npkvt ntpnb jdvxf vqjl xkmfx xmhsbd srmtb kfxr lrgd cqvc mftbj gzfm lmnbtpn bnl fxhts rqjdcb ssxljz srbhb npgxl tdtfnv gbhqd tmxm cghj ljjl xjkpm (contains peanuts, nuts)\n' +
    'xkmfx bbqs ntft tmxm gsq mnlcj jjrm njdq dsphl vnbrhb bkkhrl bmqh lkck ttqqvb jdrvf pnlkl lch jsjz kpjll rhzjdcjz cqvc dnprvn kqbkb rqjdcb chbtp flhn fchcj sndbnc qbmg ntpnb phgcp bldts lcnxpz rzzt bzrtth kfxr rlmv kkbbb dsjxr mmnx zmp xzhxj ncxd vfktc rrjb sshkphb ggbpln cqfld jkxsgpk mftbj sbvbzcg sxjxjx mbsc krsdgrm psqkpr xnsxv rvnfcrr jsqpt vqjl ksm vmkt gdvfsd frgmd vsssd plgsn zbm mbcx qxqngjh srmtb jcr jzjc sjft cdqt xmhsbd qnqg dmrvf stpzhrp (contains wheat, soy)\n' +
    'qdt pmlqgp pvzhm lcnxpz dhtbh lqxt vfktc gdvfsd jdmvk lbnsscn jsqpt fpd bnl chbtp ckknl lkr mzjnsm jxrs rrjb rqjdcb vqgcbr qrt rxvzb vfcrdm xnsxv jzjc hchrm vtffks vshd gcxjz xxrzn dlcgqg npkvt sjft fjbbj jjfhf lrgd bvb srmtb pnlkl fnngtqh qbdjjt rhzjdcjz hzhzkn pkvx rvnfcrr xzhxj cqvc tbjh nhx zctbc npgxl mbcx ntft frgmd jfmvtdd xdp vmks cqfld gzfm gdnkc xhghxjg kfxr zpkl qdsp xjkpm rvpgl dsphl (contains shellfish, eggs)\n' +
    'svqkg gfvfs gdvfsd vtdf hdgrmv sndbnc dmssm rlmv jdvxf lrgd rdqs mqb lkck dsphl cdqt vbrnf mzjnsm dvnbt qdsp lmnbtpn xhghxjg xmhsbd gdnkc kfxr qdt gzfm vk flhn vfktc ljxsf rrjb ntpnb rqjdcb sxjxjx ntft zctbc hchrm fjbbj xdp ptpqnl chbtp jvv npgxl cqvc qbmg vjmrl hzhzkn sbvbzcg njdq kvzhn stttxbm dhtbh plgsn pnlkl bldts ggbpln bqvr ttqqvb kkbbb bzrtth tbjh lfxzl cghj sshkphb ncxd vtffks hdzcch pkvx jsqpt ntrqq dlcgqg fpbqsb bkkhrl xzhxj vmjjv ncqr mmnx vfrrd psqkpr fklqd vqjl cdhlqp (contains shellfish)\n' +
    'ggbpln lgn ntft bqvr xhnl dsjxr xnhbrx vqjl tdtfnv chbtp dhtbh dvnbt npgxl cdqt jjrm cqvc ntrqq fxg bvb gdbs nhx mmnx gcxjz vtdf mqb dmrvf rhzjdcjz vcngs xhghxjg flhn fxhts mbcx fjbbj hdzcch jlpjdb rtxkp kcrh rrjb jkxsgpk rtzcq jxrs bldts vshd vnbrhb mml pmlqgp hzhzkn xmhsbd vmks ljjl rqjdcb bkkhrl plgsn bbqs qlrjf tthhp bqtdv lqttkm sjft dcqqd kfxr bnl lfxzl fpd zlkvkzt sbvbzcg zmp cqfld qrt rkgjkvl ksm jfmvtdd lhfj mbsc xxrzn vfcrdm tmxm vmjjv (contains soy)\n' +
    'rtxkp jjfhf srmtb npgxl gdbs jdmvk mmnx jxrs dnprvn qrt xdp rrjb npkvt dsjxr xmhsbd zctbc vtdf cqvc fxg rsbph mnlcj cghj lqttkm dlcgqg ntft qjzq xjkpm mbsc xnsxv bkkhrl rhzjdcjz fxhts gzhzhrc zmp kcrh qbmg nmnfx jcr xhnl vtffks ntrqq rqjdcb zlkvkzt ncxd njdq lgn psqkpr cdhlqp vfktc tthhp bmqh jlpjdb svqkg lch jfmvtdd bqprv ljxsf vqgcbr vfcrdm bqtdv vnbrhb tdtfnv pnlkl lcnxpz srbhb nhx lbnsscn sbvbzcg cbxrs fnngtqh dsphl pkvx lqxt jsjz cdqt qdt xkmfx kqbkb vcngs gdvkh rvpgl chbtp dvnbt vshd bqvr xzhxj zbm rtzcq vfrrd fhcmcth (contains wheat, shellfish)\n' +
    'qnqg pnlkl dlcgqg fxhts xxrzn bmqh ntft xnsxv cqvc plgsn xmhsbd kfxr vcngs bnl bqvr rtzcq mmnx lqttkm nhx lch bldts jjrm dsjxr gzfm mftbj xzhxj vtdf njdq vmks lbnsscn jjfhf bqtdv tthhp chbtp xghfgf flhn npgxl qxqngjh cbxrs rzzt kkbbb jfmvtdd lcnxpz vmkt cqfld vfrrd fklqd (contains fish)\n' +
    'rrjb tdtfnv sbvbzcg dmrvf lmnbtpn trls gcxjz flhn hdgrmv jsqpt ncqr rnqh lch lrgd qnqg pnlkl jzjc gdvkh sxjxjx fpd xxrzn ncxd krsdgrm sshkphb lhfj xnsxv tmxm lqttkm xtd gvqdr kkbbb lsnrh srmtb xzhxj rxvzb bbqs tbjh tthhp nhx rvnfcrr ntft lkr cdhlqp kfxr vfktc fnngtqh kvzhn chbtp qjzq mnlcj qbmg xkmfx gsq pmlqgp cbxrs jdmvk bqtdv svqkg rtzcq vsssd clbzn npgxl vfrrd vtffks nmnfx lbnsscn rsbph vmks dvnbt qlrjf phgcp fxg bqprv lcnxpz ssxljz rvpgl gzfm sndbnc vqgcbr cqvc (contains soy, nuts, sesame)\n' +
    'xtd kkbbb ssxljz qbdjjt trls lkr bmqh ksm flhn vmkt gzfm rhzjdcjz psqkpr nhx jvv ckknl vqjl fklqd dmrvf lqxt zctbc gbhqd mzjnsm vjmrl rrjb nmnfx vfrrd dsphl bnl cqvc rtxkp vtdf xzhxj cdhlqp lsnrh srbhb bzrtth zbm cdqt mqb bjslhf fxhts mbcx xmhsbd lhfj frgmd ntft dmssm fpbqsb zmp mml jxrs bqtdv jdrvf tdtfnv mmnx xghfgf jjrm qdt zpkl jsjz tbjh xxrzn fpd lch bqvr gcxjz plgsn jcr kfxr rtzcq jlpjdb rnqh (contains wheat, peanuts, eggs)\n' +
    'chbtp krsdgrm bjslhf sndbnc mzjnsm qrt gzhzhrc zmp cqvc cghj rtxkp xxrzn xlkf tbjh ntft rsbph xhnl vfcrdm vnbrhb nhx jcr qdt jsqpt rvnfcrr kqbkb vmkt qjzq fklqd vtdf ncxd rqjdcb lrgd lch vqgcbr bqtdv rlmv kfxr pkvx xdp ggbpln cdhlqp xnsxv fnngtqh dhtbh stttxbm ckknl vqjl qlrjf psqkpr rnqh bldts dlcgqg lqttkm qdsp qbmg gsq qnqg zkhfkg trls njdq mftbj gdvfsd fhcmcth rkgjkvl cbxrs stpzhrp hdzcch qbdjjt fchcj jjrm mnlcj zctbc ntrqq vcngs cdqt xtd rzzt jxrs xzhxj xmhsbd (contains wheat, soy, eggs)';


const parseInput = (input) => {
    const foodItems = input.split('\n');
    const foodIngredients = [];
    const foodAllergens = [];
    for (let i = 0; i < foodItems.length; i++) {
        const foodItem = foodItems[i].split(' (contains ');
        const ingredients = foodItem[0].split(' ');
        const parsedAllergens = foodItem[1].replace(')', '');
        const allergens = parsedAllergens.split(', ');
        foodIngredients.push(ingredients);
        foodAllergens.push(allergens);
    }

    return { foodIngredients, foodAllergens };
};

const initializeMap = (uniqueFoodIngredients, uniqueAllergens) => {
    const map = {};
    uniqueFoodIngredients.forEach(ingredient => {
        map[ingredient] = [...uniqueAllergens]
    });

    return map;
};

const getUniqueItems = (items) => {
    const uniqueItems = new Set();
    items.forEach(item => uniqueItems.add(item));

    return [...uniqueItems];
};

const ruleOutAllergensFromIngredients = (map, foodIngredients, foodAllergens, uniqueFoodIngredients) => {
    for (let i = 0; i < foodIngredients.length; i++) {
        const remainingIngredients = uniqueFoodIngredients.filter(ingredient => !foodIngredients[i].includes(ingredient));
        for (let j = 0; j < remainingIngredients.length; j++) {
            // for all the allergens in the first food item, remove the corresponding allergen entry from the ingredients that are not part of the corresponding ingredients list
            const allergensToRemoveFromThoseIngredients = foodAllergens[i];
            const ingredientAllergens = map[remainingIngredients[j]];
            for (let k = 0; k < allergensToRemoveFromThoseIngredients.length; k++) {
                const index = ingredientAllergens.indexOf(allergensToRemoveFromThoseIngredients[k]);
                if (index !== -1) {
                    ingredientAllergens.splice(index, 1);
                }
            }

        }
    }
};

const keepRulingOutAllergensInLoop = (ingredientsToAllergensMap, uniqueFoodIngredients) => {
    let remainingIngredientsToCheck = uniqueFoodIngredients.filter(ingredient => ingredientsToAllergensMap[ingredient].length > 1);
    while (remainingIngredientsToCheck.length > 0) {
        const ingredientsWith1To1Mapping = uniqueFoodIngredients.filter(ingredient => ingredientsToAllergensMap[ingredient].length === 1);
        for (let i = 0; i < ingredientsWith1To1Mapping.length; i++) {
            // get the corresponding allergen and remove it from the allergen list for the remaining ingredients
            const allergenToRemove = ingredientsToAllergensMap[ingredientsWith1To1Mapping[i]][0];
            for (let j = 0; j < remainingIngredientsToCheck.length; j++) {
                const allergensList = ingredientsToAllergensMap[remainingIngredientsToCheck[j]];
                const index = allergensList.indexOf(allergenToRemove);
                if (index !== -1) {
                    allergensList.splice(index, 1);
                }
            }
        }
        remainingIngredientsToCheck = uniqueFoodIngredients.filter(ingredient => ingredientsToAllergensMap[ingredient].length > 1);
    }
}

const getFrequencyOfIngredients = (foodIngredients) => {
    const map = {};
    for (let i = 0; i < foodIngredients.length; i++) {
        for (let j = 0; j < foodIngredients[i].length; j++) {
            if (map[foodIngredients[i][j]]) {
                map[foodIngredients[i][j]] += 1;
            } else {
                map[foodIngredients[i][j]] = 1;
            }
        }
    }

    return map;
}


const part1Solution = (input) => {
    const { foodIngredients, foodAllergens } = parseInput(input);
    const mapOfFrequency = getFrequencyOfIngredients(foodIngredients);
    const uniqueAllergens = getUniqueItems(foodAllergens.flat());
    const uniqueFoodIngredients = getUniqueItems(foodIngredients.flat());
    const ingredientsToAllergensMap = initializeMap(uniqueFoodIngredients, uniqueAllergens);
    ruleOutAllergensFromIngredients(ingredientsToAllergensMap, foodIngredients, foodAllergens, uniqueFoodIngredients);

    return Object.keys(ingredientsToAllergensMap).filter(ingredient => ingredientsToAllergensMap[ingredient].length === 0).reduce((acc, ingredient) =>
    acc + mapOfFrequency[ingredient], 0);
};

const part2Solution = (input) => {
    const { foodIngredients, foodAllergens } = parseInput(input);
    const uniqueAllergens = getUniqueItems(foodAllergens.flat());
    const uniqueFoodIngredients = getUniqueItems(foodIngredients.flat());
    const ingredientsToAllergensMap = initializeMap(uniqueFoodIngredients, uniqueAllergens);
    ruleOutAllergensFromIngredients(ingredientsToAllergensMap, foodIngredients, foodAllergens, uniqueFoodIngredients);
    keepRulingOutAllergensInLoop(ingredientsToAllergensMap, uniqueFoodIngredients);
    const ingredientsWith1To1Mapping = uniqueFoodIngredients.filter(ingredient => ingredientsToAllergensMap[ingredient].length !== 0);

    return ingredientsWith1To1Mapping.sort((a,b) => {
        if (ingredientsToAllergensMap[a][0] < ingredientsToAllergensMap[b][0]) {
            return -1;
        } else if (ingredientsToAllergensMap[a][0] > ingredientsToAllergensMap[b][0]) {
            return 1;
        } else {
            return 0;
        }
    }).join(',');

};

//console.log(part1Solution(realInput));
console.log(part2Solution(realInput));