d3.csv('', function(err, rows){


var Cluster1 = {
  x:[282989356.0, 940210908.0], 
  y:[461316848.0, 745588948.0], 
  z:[24749372.0, 42732819.0],
  mode: 'markers',
  name: 'Cluster 1',
  marker: {
    size: 12,
    line: {
    color: 'rgba(217, 217, 217, 0.14)',
    width: 0.5},
    opacity: 0.8},
  type: 'scatter3d'
};

var Cluster2 = {
  x:[50895388.0, 19437611.0, 82830486.0, 28451611.0, 46212928.0, 18043321.0, 25264282.0, 45859444.0, 16757691.0, 46620648.0, 48950081.0, 42087059.0, 50564898.0, 54260016.0, 25722591.0, 59592384.0, 19589798.0, 20122726.0, 49405708.0, 49401661.0, 26829396.0, 29660090.0, 18109827.0, 26748066.0, 27240455.0, 30073007.0, 19144189.0], 
  y:[16472100.0, 27885266.0, 3725355.0, 25746687.0, 15673445.0, 27279638.0, 38729810.0, 34943358.0, 4856785.0, 4658074.0, 38584844.0, 40430713.0, 21209346.0, 2273716.0, 16380233.0, 46250001.0, 122368953.0, 4616335.0, 84715279.0, 11805862.0, 35960282.0, 24309758.0, 39085376.0, 26001282.0, 52364025.0, 22680894.0, 13484231.0], 
  z:[10581915.0, 4307933.0, 4550769.0, 26952390.0, 28580302.0, 17928875.0, 15492610.0, 10198707.0, 42784016.0, 11593221.0, 124445148.0, 2775653.0, 21494767.0, 7300221.0, 48767417.0, 11897292.0, 13598950.0, 32207733.0, 8565604.0, 117999.0, 3984537.0, 22264861.0, 5009414.0, 845118.0, 6094936.0, 2675682.0, 34096342.0],
  mode: 'markers',
  name: 'Cluster 2',
  marker: {
    size: 12,
    line: {
    color: 'rgba(255, 255, 255, 0.14)',
    width: 0.5},
    opacity: 0.8},
  type: 'scatter3d'
};

var Cluster3 = {
  x:[13243000.0, 7286388.0, 4394214.0, 2671363.0, 1254626.0, 1817591.0, 7732436.0, 8048793.0, 1022063.0, 2553353.0, 1024832.0, 15730306.0, 8035533.0, 2724574.0, 3160378.0, 1707292.0, 417075.0, 3718154.0, 2156903.0, 3117165.0, 2244723.0, 1495232.0, 606231.0, 1421061.0, 8846139.0, 945201.0, 12378711.0, 600765.0, 9887228.0, 167548.0, 843756.0, 5094371.0, 326729.0, 4333714.0, 19082520.0, 1807157.0, 724425.0, 3555162.0, 9074205.0, 3124752.0, 10077085.0, 6155204.0, 6533871.0, 4529400.0, 229788.0, 12715.0, 1520428.0, 1808048.0, 15837967.0, 4346954.0, 14248335.0, 8751469.0, 13176455.0, 14106693.0, 14054365.0, 8472105.0, 1078184.0, 1030612.0, 4021173.0, 5893060.0, 1759980.0, 459659.0, 1698111.0, 1880959.0, 1257612.0, 884889.0, 4836662.0, 480380.0, 1564930.0, 6211319.0, 2324029.0, 4385902.0, 465934.0, 6996334.0, 3777171.0, 2575045.0, 10974511.0, 7683301.0, 5130603.0, 4798882.0, 16319483.0, 132459.0, 17517760.0, 7230019.0, 2289185.0, 6734809.0, 674210.0, 0.0, 446812.0, 7532621.0, 1460939.0, 9066639.0, 3048433.0, 3478875.0, 21717756.0, 23991894.0, 3549957.0, 4835851.0, 1277450.0, 12114194.0, 7144997.0, 646653.0, 97824.0, 0.0, 1709933.0, 1226414.0, 2951443.0, 509533.0, 448425.0, 996885.0, 1622765.0, 5854655.0, 693413.0, 574876.0, 3125936.0, 1485909.0, 3570166.0, 1762559.0, 235587.0, 519220.0, 524064.0, 1700750.0, 5779454.0, 508544.0, 77366.0, 2822805.0, 1745077.0, 2264923.0, 13294954.0, 754339.0, 41952.0, 3499384.0, 795338.0, 3193853.0, 1341082.0, 972807.0, 2259074.0, 411475.0, 1362584.0, 3917135.0, 1871102.0, 665334.0, 906278.0, 4852926.0, 7698481.0, 5789476.0, 3487319.0, 1193597.0, 181821.0, 1592421.0, 1145569.0, 2266011.0, 4692224.0, 10018732.0, 2351244.0, 2548208.0, 146819.0, 1392939.0, 731064.0, 433498.0, 1065742.0, 4420941.0, 917183.0, 548952.0, 13153915.0, 6856641.0, 3107284.0, 2296672.0, 2626215.0, 2821672.0, 1323191.0, 4566265.0, 1754957.0, 12716385.0, 2091810.0, 2409896.0, 7514093.0, 13877566.0, 4107847.0, 76943.0, 3333308.0, 541582.0, 4750066.0, 747534.0, 5649839.0, 723853.0, 2259354.0, 11506576.0, 720242.0, 4083320.0, 0.0, 4366444.0, 958190.0, 39818.0, 3716947.0, 101597.0, 1295366.0, 3097803.0, 9297507.0, 1392498.0, 6377424.0, 11753151.0, 6257065.0, 25367593.0, 7629157.0, 4709960.0, 7386173.0, 4522986.0, 6679756.0, 1663364.0, 670061.0, 7567829.0, 5747029.0, 15874136.0, 685938.0, 7997969.0, 6954152.0, 22104612.0, 16865520.0, 5748409.0, 17108160.0, 933093.0, 1380342.0, 16037119.0, 12045393.0, 10121964.0, 6176505.0, 818760.0, 404043.0, 10586641.0, 2717679.0, 775342.0, 4573166.0, 9409620.0, 1573459.0, 6143935.0, 10748388.0, 2117601.0, 6874682.0, 611779.0, 2099163.0, 2236727.0, 13114378.0, 1863534.0, 2148557.0, 1924985.0, 66535.0, 497443.0, 4717715.0, 6720122.0, 4899312.0, 4503683.0, 429354.0, 8009644.0, 1410339.0, 1376176.0, 14838420.0, 17144009.0, 13029654.0, 10706279.0, 2211613.0, 3824704.0, 2770768.0, 223189.0, 746651.0, 1839488.0, 1675198.0, 733188.0, 1240799.0, 814146.0, 2439169.0, 2851117.0, 1181818.0, 2384644.0, 888416.0, 12622355.0, 3944309.0, 1335886.0, 250804.0, 15529123.0, 7085507.0, 1969144.0, 1734818.0, 5579640.0, 5461155.0, 2056328.0, 3630809.0, 1105260.0, 2516892.0, 5217543.0, 1847956.0, 246235.0, 2289097.0, 11344961.0, 1120228.0, 2093400.0, 4195308.0, 2924659.0, 333548.0, 14714109.0, 8818580.0, 7844734.0, 2015104.0, 705260.0, 8391945.0, 290264.0, 10885978.0, 13593598.0, 782819.0, 12789683.0, 5290907.0, 483432.0, 727157.0, 4801526.0, 5411050.0, 476020.0, 1847160.0, 1073821.0, 0.0, 799508.0, 1934315.0, 4804868.0, 1306521.0, 851200.0, 4270328.0, 500950.0, 1569408.0, 1970899.0, 3868435.0, 2976101.0, 5433367.0, 294089.0, 7056394.0, 6842257.0, 3493996.0, 6398942.0, 10545842.0, 15557341.0, 3519630.0, 8128015.0, 2654475.0, 2342216.0, 3163879.0, 3743981.0, 5846517.0, 643843.0, 3437736.0, 737432.0, 9258633.0, 604221.0, 592590.0, 8192791.0, 405778.0, 4318639.0, 2711229.0, 5025234.0, 6731842.0, 10770598.0, 4684775.0, 192351.0, 659680.0, 168940.0, 661080.0, 5513071.0, 3458298.0, 567480.0, 1455341.0, 2438368.0, 747031.0, 1854407.0, 657332.0, 2562334.0, 4914490.0, 5307109.0, 2693035.0, 1006863.0, 862287.0, 2567061.0, 4155357.0, 4988857.0, 5380034.0, 5813162.0, 6273536.0, 5344113.0, 6451171.0, 5224380.0, 4993259.0, 1144192.0, 560290.0, 3753354.0, 5092037.0, 9934103.0, 2578279.0, 233929.0, 10850504.0, 234376.0, 2854414.0, 9924636.0, 996227.0, 5511113.0, 2487546.0, 1150592.0, 1303097.0, 664574.0, 1056385.0, 531316.0, 1009340.0, 1454034.0, 1193799.0, 3073865.0, 2966453.0, 984422.0, 5112587.0, 1055202.0, 2297599.0, 1001713.0, 3597936.0, 905201.0, 1163424.0, 1657594.0, 2707174.0, 470148.0, 4311303.0, 5441332.0, 4897510.0, 920332.0, 877531.0, 784691.0, 1829515.0, 3173301.0, 1114361.0, 4932296.0, 728360.0, 1781567.0, 0.0, 603980.0, 3583083.0, 6025525.0, 6539.0, 10888867.0, 4397348.0, 6106888.0, 677447.0, 1006722.0, 4962621.0, 1873438.0, 424222.0, 5501150.0, 1637258.0, 5461261.0, 1434127.0, 3817287.0, 3062154.0],
  y:[12133712.0, 9354725.0, 4998701.0, 0.0, 717160.0, 23679.0, 8982223.0, 4189383.0, 241506.0, 5598099.0, 0.0, 349403.0, 7974123.0, 173117.0, 756539.0, 1739758.0, 422134.0, 4504463.0, 489175.0, 877481.0, 3878250.0, 990232.0, 1710482.0, 2630333.0, 7281627.0, 0.0, 10940365.0, 3220.0, 149632.0, 22571.0, 299.0, 1822909.0, 160822.0, 3971411.0, 90684.0, 3765.0, 239315.0, 5537304.0, 11063907.0, 94526.0, 10103321.0, 4671555.0, 161080.0, 10807041.0, 222688.0, 2565.0, 45807.0, 1600.0, 12096158.0, 751665.0, 10053256.0, 3594393.0, 409786.0, 9787678.0, 16122879.0, 10069167.0, 116006.0, 1669350.0, 570921.0, 2639458.0, 2603354.0, 357118.0, 59000.0, 1878168.0, 2301692.0, 1461357.0, 3772646.0, 66802.0, 442811.0, 166545.0, 233495.0, 7149636.0, 150267.0, 9571047.0, 771740.0, 3639083.0, 151148.0, 11695948.0, 6800776.0, 1830771.0, 24720849.0, 0.0, 14858930.0, 5024411.0, 2420821.0, 6724073.0, 50810.0, 0.0, 0.0, 4564994.0, 37282.0, 593636.0, 3760750.0, 131389.0, 15923856.0, 3279162.0, 3777985.0, 6444855.0, 59210.0, 5982471.0, 9182828.0, 15155.0, 25674.0, 0.0, 2104562.0, 25342.0, 4245614.0, 0.0, 557164.0, 135380.0, 2084801.0, 8369820.0, 16456.0, 1029061.0, 8312.0, 2343880.0, 186624.0, 1817745.0, 396114.0, 609693.0, 42013.0, 3637487.0, 10710130.0, 17155.0, 45428.0, 116512.0, 546063.0, 2815048.0, 8076980.0, 18914.0, 5568.0, 8874783.0, 43096.0, 161765.0, 1505441.0, 907002.0, 5182005.0, 881202.0, 2249825.0, 5565685.0, 405208.0, 17025.0, 1202417.0, 4442295.0, 113942.0, 5422294.0, 3928052.0, 1012399.0, 117272.0, 2876872.0, 2350278.0, 2437775.0, 9648780.0, 11437126.0, 256054.0, 1858210.0, 17412.0, 1717354.0, 155777.0, 990162.0, 5700.0, 157075.0, 1400856.0, 1146167.0, 189471.0, 10449801.0, 995520.0, 2043415.0, 3601393.0, 124239.0, 55917.0, 8416150.0, 2066636.0, 2325085.0, 4179949.0, 2500.0, 5426135.0, 1747803.0, 0.0, 112780.0, 3010644.0, 1112006.0, 8672766.0, 2181260.0, 11228085.0, 14316.0, 84469.0, 177323.0, 0.0, 61875.0, 0.0, 73307.0, 1107357.0, 651204.0, 8111289.0, 0.0, 1612360.0, 0.0, 777504.0, 2306312.0, 7500.0, 10108029.0, 2793.0, 1618466.0, 8148278.0, 5680382.0, 3514317.0, 5798804.0, 1509246.0, 1063179.0, 159048.0, 8689932.0, 7730199.0, 19285188.0, 604422.0, 3112159.0, 7832847.0, 12722615.0, 1352549.0, 0.0, 14664132.0, 0.0, 572376.0, 9910398.0, 3347412.0, 1629156.0, 5196605.0, 814403.0, 108145.0, 14846015.0, 2878483.0, 45376.0, 3131743.0, 6671324.0, 2705356.0, 2114989.0, 14277964.0, 967583.0, 5060998.0, 27205.0, 3385709.0, 0.0, 13774375.0, 155340.0, 180119.0, 6778.0, 0.0, 3514.0, 3536907.0, 5530.0, 6657188.0, 1317013.0, 0.0, 0.0, 0.0, 748865.0, 5172444.0, 9985761.0, 9754850.0, 0.0, 844252.0, 4744241.0, 1189618.0, 180371.0, 753307.0, 20338.0, 17566.0, 32867.0, 5000.0, 0.0, 0.0, 12399.0, 640614.0, 5853467.0, 136433.0, 5630291.0, 5305696.0, 5407913.0, 9655.0, 12902913.0, 10348826.0, 27405.0, 97222.0, 234751.0, 10332183.0, 75415.0, 2338388.0, 0.0, 855165.0, 7079463.0, 548450.0, 396064.0, 2197624.0, 7139870.0, 930768.0, 7841438.0, 5599500.0, 5473165.0, 181560.0, 10524923.0, 7201793.0, 5077752.0, 859023.0, 0.0, 13638454.0, 150718.0, 5414003.0, 12180190.0, 0.0, 0.0, 6543222.0, 7000.0, 93500.0, 8206313.0, 7618740.0, 5000.0, 2754603.0, 394654.0, 0.0, 179629.0, 24967.0, 6745174.0, 1846948.0, 1774622.0, 6531445.0, 1342780.0, 1907853.0, 745211.0, 1649863.0, 83180.0, 342533.0, 235819.0, 181217.0, 80758.0, 7889970.0, 5258.0, 2192252.0, 17063747.0, 2800.0, 11183362.0, 972867.0, 166860.0, 3982537.0, 6322571.0, 1733161.0, 1615291.0, 6396084.0, 57054.0, 0.0, 233404.0, 2721183.0, 10099123.0, 764363.0, 6805162.0, 4251596.0, 6739477.0, 9528540.0, 2259690.0, 5883437.0, 37696.0, 1163393.0, 11031.0, 3023.0, 750.0, 5513135.0, 123222.0, 0.0, 3138991.0, 1179804.0, 3477243.0, 0.0, 335494.0, 7005777.0, 12777462.0, 801664.0, 1336477.0, 1783583.0, 6545721.0, 232275.0, 7300212.0, 4574490.0, 12675308.0, 10287608.0, 4344806.0, 10381394.0, 2746268.0, 8543906.0, 264390.0, 0.0, 49173.0, 5762250.0, 275769.0, 2607832.0, 5169.0, 9122776.0, 3295814.0, 2730586.0, 11305092.0, 503777.0, 6224444.0, 3304608.0, 2260239.0, 55201.0, 10414.0, 1505022.0, 2048998.0, 1662935.0, 1571795.0, 1851040.0, 267779.0, 975028.0, 2891512.0, 7879811.0, 573720.0, 2405436.0, 499869.0, 3859897.0, 4385284.0, 546415.0, 548153.0, 427322.0, 282475.0, 2594324.0, 7534568.0, 6343093.0, 197985.0, 2156553.0, 1382315.0, 3668266.0, 3081370.0, 3479412.0, 2979137.0, 627152.0, 260374.0, 0.0, 322544.0, 221635.0, 6015191.0, 2250.0, 1772.0, 446827.0, 3621158.0, 14487.0, 411901.0, 5500434.0, 1884027.0, 31031.0, 6843861.0, 3047923.0, 49711.0, 89774.0, 1735785.0, 2120413.0],
  z:[692157.0, 723325.0, 485906.0, 168695.0, 117024.0, 154939.0, 489880.0, 2357931.0, 1614011.0, 1351238.0, 0.0, 3062023.0, 2620889.0, 361144.0, 1823893.0, 1965770.0, 1184200.0, 1331834.0, 605292.0, 3783578.0, 1045068.0, 434335.0, 762215.0, 853057.0, 6986295.0, 349977.0, 1087085.0, 182456.0, 1543798.0, 204315.0, 512310.0, 3538891.0, 208540.0, 1479799.0, 20285170.0, 135790.0, 393046.0, 1495189.0, 25403.0, 104497.0, 3246855.0, 1487840.0, 251845.0, 1667623.0, 371947.0, 119601.0, 746431.0, 1314903.0, 5476002.0, -287136.0, 1216142.0, 1665501.0, 2845019.0, 2748571.0, 1088719.0, 620675.0, 325134.0, 286946.0, 799206.0, 829773.0, 275643.0, 436387.0, 64003.0, 868956.0, 188040.0, 321258.0, 3387607.0, 489020.0, 1874151.0, 175265.0, 94539.0, 291298.0, 212000.0, 497609.0, 321329.0, 236382.0, 573452.0, 920689.0, 1183707.0, 180818.0, 2195950.0, 323880.0, 3883944.0, 4493250.0, 265923.0, 593105.0, 1370918.0, 1556484.0, 597287.0, 2723917.0, 515784.0, 3693363.0, 1041241.0, 1826029.0, 2416872.0, 6201979.0, 1023446.0, 1096993.0, 50810.0, 1228290.0, 866020.0, 72435.0, 13488.0, 0.0, 95043.0, 90362.0, 546652.0, 312550.0, 122445.0, -6132.0, 0.0, 1056391.0, 95390.0, 151434.0, 372687.0, 3563677.0, 395418.0, -9735.0, 100.0, 49697.0, 68374.0, 212080.0, 1602482.0, 81979.0, 299883.0, 331514.0, 1124377.0, 365872.0, 1135153.0, 115837.0, 274712.0, 1140226.0, 13391.0, 408535.0, 3955805.0, 125736.0, 510878.0, 152796.0, 235763.0, 718866.0, 160910.0, 111662.0, 196519.0, 761350.0, 952869.0, 768700.0, 991653.0, 235469.0, 1194523.0, 272933.0, 500066.0, 576332.0, 1558436.0, 702317.0, 434289.0, 5342241.0, 736425.0, 395875.0, 102620.0, 200905.0, 3417.0, 720595.0, 3726472.0, 338985.0, 1139401.0, 1466945.0, 634593.0, 309574.0, 1078827.0, 559217.0, 313901.0, 807809.0, 340335.0, 19286455.0, 865874.0, 89874.0, 2660322.0, 7027442.0, 7873116.0, 178625.0, 1041831.0, 14842.0, 677765.0, 640220.0, 1193066.0, 80899.0, 3586208.0, 736359.0, 83295.0, -16335.0, 1543717.0, 157904.0, 61406.0, 1789929.0, -329080.0, 477900.0, 479867.0, 0.0, 755683.0, -49988.0, 247495.0, 1730541.0, 541267.0, 1959133.0, 1465447.0, 4052149.0, 1828143.0, 1462503.0, 2630992.0, 558299.0, 66475.0, 3067137.0, 2759165.0, 7735155.0, 1317911.0, 2554220.0, 1395791.0, 2655047.0, 1100189.0, 251405.0, 4053835.0, 500341.0, 2118143.0, 20652598.0, 1093459.0, 6192961.0, 5133379.0, 469446.0, 614004.0, 121893.0, 7027.0, 463540.0, 4866918.0, 1732614.0, 3131277.0, 354824.0, 3017938.0, 4865093.0, 2545651.0, 1892002.0, 1100057.0, 45944.0, 2756011.0, 2214035.0, 543568.0, 282886.0, 56666.0, 169096.0, 954256.0, 219604.0, 2126456.0, 1576399.0, 13200.0, 246427.0, 475.0, 125298.0, 3018957.0, 9154847.0, 5423257.0, 338221.0, 1501028.0, 1063267.0, 1879399.0, 353173.0, 212318.0, 112753.0, 105600.0, 270442.0, 440747.0, 722027.0, 76030.0, 577921.0, 2344190.0, 1340873.0, 325815.0, 32545160.0, 2507738.0, 1589200.0, 277660.0, 7350600.0, 2133689.0, 351211.0, 1180406.0, 1680604.0, -107148.0, 601282.0, 3063334.0, 10000.0, 3435572.0, 1145123.0, 964724.0, 1461240.0, 864843.0, 668803.0, 398580.0, 1657545.0, 1347529.0, 725917.0, 999219.0, 771775.0, 2900974.0, 1297927.0, 421445.0, 21815.0, 624943.0, 900322.0, 23752891.0, 2135149.0, 38470.0, 540640.0, 1301323.0, 367611.0, 26672.0, 800980.0, 1991434.0, 50560.0, 810446.0, 1229519.0, 1600000.0, 1381527.0, 98771.0, 1655731.0, 386347.0, 1459223.0, 1132264.0, 464641.0, 466854.0, 1845472.0, 1245929.0, 889375.0, 3721562.0, 1155217.0, 740194.0, 317345.0, 975330.0, 291208.0, 5426298.0, 814739.0, 230477.0, 1621153.0, 3781540.0, 1857191.0, 1055596.0, -155163.0, 4956790.0, 340564.0, 49472.0, 31638.0, 620577.0, 1911349.0, 961746.0, 2213835.0, 450230.0, 1577971.0, 1014627.0, 2820770.0, 3040129.0, 12487331.0, 1025458.0, 73111.0, 353045.0, 96034.0, 330842.0, 259513.0, -92617.0, 90016.0, 205295.0, 925185.0, 244779.0, 507300.0, 20333.0, 211123.0, 704972.0, 1307438.0, 828229.0, 198286.0, 1062210.0, 660050.0, 807990.0, 803141.0, 447616.0, 1110186.0, 1278724.0, 5635338.0, 1071979.0, 1666815.0, 463073.0, 267451.0, 27733.0, 1003475.0, 2056035.0, 275251.0, 439600.0, 53420.0, 2594226.0, 328211.0, 834010.0, 2175726.0, 143765.0, 1769049.0, 1093156.0, 226357.0, 861205.0, 109133.0, 87290.0, 2115680.0, 297849.0, 403615.0, 132384.0, 207807.0, 505312.0, 643331.0, 522845.0, 2005563.0, 329259.0, 135615.0, 629309.0, 598464.0, 386688.0, 478528.0, 477498.0, 206720.0, 312963.0, 1899940.0, 1654423.0, 241140.0, 0.0, 527885.0, 354805.0, 652453.0, 495769.0, 795465.0, 562938.0, 848810.0, 2850699.0, 2243610.0, 712088.0, 1880816.0, 68306.0, 821386.0, 476169.0, 1113456.0, 66200.0, 127712.0, 790123.0, 583458.0, 201478.0, 1615013.0, 216453.0, 225671.0, 58104.0, 1582757.0, 409203.0],
  mode: 'markers',
  name: 'Cluster 3',
  marker: {
    size: 12,
    line: {
    width: 0.5},
    opacity: 0.8},
  type: 'scatter3d'
};

var Cluster4 = {
  x:[236035243.0, 189569187.0, 107422120.0, 97667781.0, 124569171.0],
  y:[41474763.0, 102395939.0, 66792300.0, 121135153.0, 88605685.0],
  z:[39621152.0, 24276510.0, 42461593.0, 45715633.0, 29866569.0],
  mode: 'markers',
  name: 'Cluster 4',
  marker: {
    size: 12,
    line: {
    color: 'rgba(217, 217, 217, 0.14)',
    width: 0.5},
    opacity: 0.8},
  type: 'scatter3d'
};

var data = [Cluster1, Cluster2, Cluster3, Cluster4];
var layout = {
  scene:{
  xaxis:{
    title: 'Assets'
  },
  yaxis:{
    title: 'Liabilities'
  },
  zaxis:{
    title: 'Revenues'
  }
},
  autosize: true,
  margin: {
  l: 0,
  r: 0,
  b: 0,
  t: 0
  }};
Plotly.newPlot('focalPoint', data, layout);
});