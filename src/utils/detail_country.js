let countrylist = [
  [16605, " 印度尼西亚"],
  [16630, " 马来西亚"],
  [16757, " 台湾"],
  [16610, " 日本"],
  [16755, " 中国香港"],
  [20409, " 马德拉群岛"],
  [20408, " 亚速尔群岛"],
  [16523, " 西班牙"],
  [16639, " 密克罗尼西亚(美)"],
  [16749, " 约翰斯敦岛"],
  [16730, " 津巴布韦"],
  [16718, " 美国本土外小岛屿"],
  [16701, " 叙利亚"],
  [16695, " 斯里兰卡    "],
  [16686, " 塞拉利昂    "],
  [16664, " 巴布亚新几内亚    "],
  [16634, " 马绍尔群岛"],
  [16626, " 卢森堡"],
  [16617, " 吉尔吉斯斯坦"],
  [16613, " 哈萨克斯坦"],
  [16601, " 洪都拉斯"],
  [16581, " 法罗群岛(丹)"],
  [16570, " 刚果(金)"],
  [16561, " 圣诞岛"],
  [16553, " 布基纳法索"],
  [16541, " 巴林"],
  [16537, " 亚美尼亚"],
  [16515, " 捷克"],
  [16513, " 荷兰"],
  [13227, " 中国"],
  [16743, " 圣文森特和格林纳丁斯"],
  [16758, " 南乔治亚岛和南桑德韦奇岛"],
  [16751, " 复活岛"],
  [16741, " 科科斯(基林)群岛"],
  [16742, " 北马里亚纳"],
  [16744, " 英属维尔京群岛"],
  [16738, " 阿森松岛(英)"],
  [16740, " 库克群岛"],
  [16737, " 法属南部和南极领地"],
  [16733, " 赫德岛和麦克唐纳群岛"],
  [16731, " 文莱"],
  [16729, " 赞比亚"],
  [16728, " 也门"],
  [16726, " 瓦里斯和富士那群岛(法)"],
  [16725, " 维尔京群岛(美) "],
  [16712, " 土库曼斯坦 "],
  [16711, " 突尼斯 "],
  [16709, " 汤加 "],
  [16707, " 多哥 "],
  [16704, " 巴哈马国 "],
  [16681, " 圣多美和普林西比 "],
  [16680, " 圣马力诺 "],
  [16675, " 圣克里斯托弗和尼维斯 "],
  [16673, " 荷属安的列斯群岛 "],
  [16622, " 利比里亚 "],
  [16593, " 瓜德罗普岛(法) "],
  [16569, " 塞浦路斯 "],
  [16550, " 波斯尼亚和黑塞哥维那 "],
  [16535, " 安圭拉岛(英) "],
  [16534, " 安哥拉 "],
  [16532, " 东萨摩亚(美) "],
  [16524, " 以色列 "],
  [16756, " 澳门 "],
  [16754, " 泽西岛 "],
  [16753, " 格恩西岛 "],
  [16752, " 南极洲 "],
  [16748, " 伊夫尼 "],
  [16747, " 特里斯达库尼亚群岛 "],
  [16746, " 美属太平洋各群岛 "],
  [16745, " 扎伊尔 "],
  [16736, " 巴勒斯坦 "],
  [16735, " 皮特凯恩群岛 "],
  [16734, " 英属印度洋领地 "],
  [16732, " 布韦岛 "],
  [16727, " 西撒哈拉 "],
  [16657, "  诺福克岛(澳) "],
  [16723, " 越南 "],
  [16722, " 委内瑞拉 "],
  [16721, " 瓦努阿图 "],
  [16720, " 乌兹别克斯坦 "],
  [16719, " 乌拉圭 "],
  [16717, " 坦桑尼亚 "],
  [16716, " 阿拉伯联合酋长国 "],
  [16715, " 乌干达 "],
  [16714, " 图瓦卢 "],
  [16713, " 特克斯和凯科斯群岛(英) "],
  [16710, " 特立尼达和多巴哥 "],
  [16708, " 托克劳群岛(新) "],
  [16706, " 东帝汶 "],
  [16705, " 梵蒂冈 "],
  [16702, " 塔吉克斯坦 "],
  [16700, " 瑞士 "],
  [16699, " 斯威士兰 "],
  [16698, " 斯瓦尔巴群岛(挪) "],
  [16697, " 苏里南 "],
  [16692, " 南非 "],
  [16691, " 索马里 "],
  [16690, " 所罗门群岛 "],
  [16689, " 斯洛文尼亚 "],
  [16688, " 斯洛伐克 "],
  [16687, " 新加坡 "],
  [16685, " 塞舌尔 "],
  [16683, " 塞内加尔 "],
  [16682, " 沙特阿拉伯 "],
  [16739, " 法属波利尼西亚 "],
  [16677, " 圣皮埃尔岛及密克隆岛 "],
  [16676, " 圣卢西亚 "],
  [16674, " 圣赫勒拿 "],
  [16672, " 罗马尼亚 "],
  [16670, " 摩尔多瓦 "],
  [16669, " 卡塔尔 "],
  [16668, " 波多黎各(美) "],
  [16665, " 巴拉圭 "],
  [16663, " 巴拿马 "],
  [16652, " 新西兰 "],
  [16651, " 新喀里多尼亚群岛(法) "],
  [16650, " 尼泊尔 "],
  [16649, " 尼泊尔 "],
  [16646, " 缅甸 "],
  [16632, " 马里 "],
  [16628, " 马达加斯加 "],
  [16623, " 利比亚 "],
  [16621, " 莱索托 "],
  [16618, " 老挝 "],
  [16606, " 伊朗 "],
  [16597, " 几内亚比绍 "],
  [16580, " 福克兰群岛 "],
  [16536, " 安提瓜和巴布达 "],
  [16703, " 泰国 "],
  [16696, " 苏丹 "],
  [16658, " 朝鲜 "],
  [16679, " 西萨摩亚 "],
  [16671, " 留尼汪岛 "],
  [16667, " 菲律宾 "],
  [16666, " 秘鲁 "],
  [16662, " 帕劳(美) "],
  [16661, " 巴基斯坦 "],
  [16660, " 阿曼 "],
  [16656, " 纽埃岛(新) "],
  [16655, " 尼日利亚 "],
  [16654, " 尼日尔 "],
  [16653, " 尼加拉瓜 "],
  [16647, " 纳米比亚 "],
  [16645, " 莫桑比克 "],
  [16644, " 摩洛哥 "],
  [16643, " 蒙特塞拉特岛(英) "],
  [16556, " 加那利群岛 "],
  [16641, " 蒙古 "],
  [16640, " 摩纳哥 "],
  [16638, " 马约特岛 "],
  [16637, " 毛里求斯 "],
  [16636, " 毛里塔尼亚 "],
  [16635, " 马提尼克(法) "],
  [16633, " 马耳他 "],
  [16631, " 马尔代夫 "],
  [16629, " 马拉维 "],
  [16659, " 马其顿 "],
  [16627, " 立陶宛 "],
  [16624, " 列支敦士登 "],
  [16620, " 黎巴嫩 "],
  [16619, " 拉脱维亚 "],
  [16616, " 科威特 "],
  [16609, " 牙买加 "],
  [16608, " 科特迪瓦 "],
  [16607, " 伊拉克 "],
  [16603, " 冰岛 "],
  [16602, " 匈牙利 "],
  [16600, " 海地 "],
  [16598, " 法属圭亚那 "],
  [16595, " 危地马拉 "],
  [16594, "  关岛(美) "],
  [16592, " 格林纳达 "],
  [16589, " 直布罗陀(英) "],
  [16588, " 加纳 "],
  [16587, " 格鲁吉亚 "],
  [16585, " 加蓬 "],
  [16642, " 黑山 "],
  [16574, " 埃及 "],
  [16573, " 厄瓜多尔 "],
  [16684, " 塞尔维亚 "],
  [16571, " 吉布提 "],
  [16567, " 克罗地亚 "],
  [16566, " 哥斯达黎加 "],
  [16565, " 刚果 "],
  [16572, " 多米尼加共和国 "],
  [16560, " 乍得 "],
  [16557, " 佛得角 "],
  [16694, " 韩国 "],
  [16544, " 白俄罗斯 "],
  [16543, " 巴巴多斯 "],
  [16542, " 孟加拉国 "],
  [16540, " 阿塞拜疆 "],
  [16539, " 奥地利 "],
  [16538, " 阿鲁巴岛 "],
  [16604, " 印度 "],
  [16615, " 基里巴斯 "],
  [16614, " 肯尼亚 "],
  [16612, " 柬埔寨 "],
  [16611, " 约旦 "],
  [16599, " 圭亚那 "],
  [16596, " 几内亚 "],
  [16591, " 格陵兰岛 "],
  [16590, " 希腊 "],
  [16586, " 冈比亚 "],
  [16583, " 芬兰 "],
  [16582, " 斐济 "],
  [16579, " 埃塞俄比亚 "],
  [16578, " 爱沙尼亚 "],
  [16577, " 厄立特里亚 "],
  [16576, " 赤道几内亚 "],
  [16575, " 萨尔瓦多 "],
  [16568, " 古巴 "],
  [16564, " 科摩罗 "],
  [16563, " 哥伦比亚 "],
  [16559, " 中非 "],
  [16648, " 瑙鲁 "],
  [16558, " 开曼群岛(英) "],
  [16555, " 喀麦隆 "],
  [16554, " 布隆迪 "],
  [16552, " 保加利亚 "],
  [16551, " 博茨瓦纳 "],
  [16549, " 玻利维亚 "],
  [16548, " 不丹 "],
  [16547, " 百慕大群岛(英) "],
  [16546, " 贝宁 "],
  [16545, " 伯利兹 "],
  [16533, " 安道尔 "],
  [16531, " 阿尔及利亚 "],
  [16530, " 阿尔巴尼亚 "],
  [16529, " 阿富汗 "],
  [16527, " 智利 "],
  [16522, " 乌克兰 "],
  [16521, " 土耳其 "],
  [16519, " 葡萄牙 "],
  [16507, " 巴西 "],
  [16509, " 波兰 "],
  [16505, " 爱尔兰 "],
  [16504, " 阿根廷 "],
  [16508, " 比利时 "],
  [16517, " 墨西哥 "],
  [16510, " 丹麦 "],
  [16518, " 挪威 "],
  [16520, " 瑞典 "],
  [16525, " 意大利 "],
  [16514, " 加拿大 "],
  [16506, " 澳大利亚 "],
  [16511, " 德国 "],
  [16528, " 俄罗斯 "],
  [16512, " 法国 "],
  [16526, " 英国 "]
];
export default countrylist;
