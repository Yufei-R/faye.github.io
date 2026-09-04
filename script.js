/* ========================================
   script.js — 恐惧变异体：19个节点垂直时间线
   从上（远古）到下（当代），可滚动
   ======================================== */

const fears = [
  {
    id: "falling",
    era: "树栖时代（数百万年前）",
    title: "对坠落的恐惧",
    source: "我们的祖先生活在树上。从高处坠落意味着骨折、瘫痪、死亡。这种恐惧深深刻在基因里，至今我们站在悬崖边仍会腿软。",
    level: "本能",
    target: "高度本身——失去支撑、重力、不可控的下坠",
    coping: "抓握反射、空间感知、谨慎的移动策略",
    becomes: "predator",
    mutation: "当双脚离开树枝，世界变得危险。但更大的危险在地面。",
    quote: "我们从未真正适应地面——只是学会了假装",
    x: 450, y: 120, r: 28
  },
  {
    id: "predator",
    era: "远古时期（数十万年前）",
    title: "对捕食者的恐惧",
    source: "剑齿虎、鬣狗、狼群。在非洲草原上，人类是猎物，不是猎人。夜间的每一声嚎叫都可能是最后的警告。",
    level: "本能",
    target: "有形的敌人——牙齿、爪子、暗处的眼睛",
    coping: "群体生活、火的使用、武器、洞穴、警戒",
    becomes: "disaster",
    mutation: "当天敌在暗处，恐惧从'坠落'转向'被追捕'——敌人有了意志",
    quote: "黑暗中有眼睛在看着你——这不是妄想，这是几百万年的记忆",
    x: 520, y: 280, r: 28
  },
  {
    id: "disaster",
    era: "部落时代（数万年前）",
    title: "对天灾的恐惧",
    source: "雷电焚毁森林，洪水冲毁营地，地震撕裂大地。自然力量不可预测、不可谈判、不可逃避。",
    level: "自然",
    target: "不可预测的自然力量——天空、大地、水",
    coping: "神话、祭祀、萨满、试图与自然力量'沟通'",
    becomes: "famine",
    mutation: "当敌人不是生物而是天空本身，恐惧从'被谁杀'变成'被什么杀'",
    quote: "神不在庙里，神在雷声中",
    x: 380, y: 440, r: 30
  },
  {
    id: "famine",
    era: "农业革命后（约1万年前）",
    title: "对饥饿的恐惧",
    source: "作物歉收、蝗灾、干旱。农业让人口爆炸，也让人口脆弱——不再能随时迁徙寻找食物，必须等待土地施舍。",
    level: "生存",
    target: "食物的缺席——胃的空虚、孩子的哭声、冬天的逼近",
    coping: "储存、祭祀丰饶之神、灌溉技术、贸易",
    becomes: "chaos",
    mutation: "当生存从'寻找'变成'等待'，恐惧从'外部威胁'变成'内部匮乏'",
    quote: "农业是人与土地的契约——但土地随时可以违约",
    x: 480, y: 600, r: 30
  },
  {
    id: "chaos",
    era: "河流文明（约公元前3000年）",
    title: "对混乱的恐惧",
    source: "城市诞生，国家形成。美索不达米亚人恐惧Tiamat（混沌），古埃及人恐惧isfet（失序）。没有法典和法老，世界将退回洪水。",
    level: "社会秩序",
    target: "无序本身——法律失效、等级崩塌、城市回到丛林",
    coping: "法典（汉谟拉比）、官僚制度、宗教仪式维持ma'at（秩序）",
    becomes: "divine-wrath",
    mutation: "当人类建造了城市，最大的威胁不再是自然，而是社会本身的崩溃",
    quote: "混沌不是世界的起点，而是文明最害怕的终点",
    x: 420, y: 760, r: 32
  },
  {
    id: "divine-wrath",
    era: "古代帝国（约公元前1500年）",
    title: "对神怒的恐惧",
    source: "尼罗河不泛滥，法老失去合法性；巴比伦的马尔杜克神庙被毁，全城恐慌。神直接掌控自然与人间的秩序。",
    level: "神圣秩序",
    target: "神的愤怒——干旱、战败、瘟疫作为神不满的信号",
    coping: "祭祀、建造神庙、法老作为神与人之间的中介、赎罪仪式",
    becomes: "fate",
    mutation: "当神成为秩序的唯一保证，恐惧从'混乱'变成'被神抛弃'",
    quote: "不是敌人摧毁了城市，是神收回了他的庇护",
    x: 500, y: 920, r: 32
  },
  {
    id: "fate",
    era: "古典时代（约公元前800年）",
    title: "对命运的恐惧",
    source: "古希腊人相信moira（命运）不可违抗。俄狄浦斯杀死父亲娶母亲，不是因为邪恶，而是因为命运。神谕不是预言，是判决。",
    level: "宿命",
    target: "不可改变的命运——无论你做什么，结局已经写好",
    coping: "悲剧艺术（通过观看他人的悲剧来净化自己的恐惧）、哲学（斯多葛：接受命运）、宗教神秘主义",
    becomes: "tyranny",
    mutation: "当神不再直接发怒，而是把命运织入存在的纹理，人发现自己连反抗的对象都没有",
    quote: "命运不是神的选择，是存在的结构——你甚至无法怨恨它",
    x: 400, y: 1080, r: 34
  },
  {
    id: "tyranny",
    era: "帝国时代（约公元前500年—公元500年）",
    title: "对暴政的恐惧",
    source: "罗马的皇帝可以处决任何人，中国的焚书坑儒，波斯的君主专制。权力集中在一个人手中，法律成为统治者的意志。",
    level: "政治",
    target: "绝对的权力——一个人的疯狂可以毁灭千万人",
    coping: "共和制度（罗马）、儒家伦理（中国）、斯多葛哲学（内心自由）、基督教（天国高于尘世）",
    becomes: "ancient-plague",
    mutation: "当命运被人的权力取代，恐惧从'不可知'变成'可知但不可抵抗'",
    quote: "暴君不需要理由，只需要权力——而权力从不解释自己",
    x: 480, y: 1240, r: 34
  },
  {
    id: "ancient-plague",
    era: "古代晚期（约公元500—800年）",
    title: "对瘟疫的恐惧",
    source: "查士丁尼大瘟疫（541-549年）：东罗马帝国人口减少25%-50%，君士坦丁堡每天死亡数千人。古代世界第一次经历如此规模的传染病。",
    level: "肉体 / 集体",
    target: "看不见的杀手——空气、水、接触，死亡随机降临",
    coping: "基督教解释（神的惩罚）、隔离、焚烧尸体、医学的无力",
    becomes: "death",
    mutation: "当帝国的防线可以抵御蛮族，却挡不住看不见的病毒，恐惧从'人'回到'自然'",
    quote: "城墙可以挡住蛮族，挡不住空气——这是帝国最后的领悟",
    x: 420, y: 1400, r: 36
  },
  {
    id: "death",
    era: "中世纪晚期 1300-1400",
    title: "对死亡的恐惧",
    source: "黑死病（1347-1351）：三年间杀死欧洲30%-60%人口，约2500万人。死亡随机、平等、无处不在。",
    level: "肉体",
    target: "死亡本身——肉体的随机、大规模终结",
    coping: "教会的救赎叙事：赎罪券、临终仪式、圣徒代祷、Memento mori 文化",
    becomes: "hell",
    mutation: "当死亡从个体事件变成集体瘟疫，恐惧从'自然'变成'神意的考验'",
    quote: "记住你终将死去——这不是威胁，而是 daily 的现实",
    x: 500, y: 1560, r: 36
  },
  {
    id: "hell",
    era: "中世纪晚期 1300-1400",
    title: "对地狱的恐惧",
    source: "教会的末世论、最后的审判图像、但丁《神曲》的流行，地狱被描述为可感知的肉体折磨。",
    level: "宗教",
    target: "神圣惩罚——永恒的肉体与精神折磨，比死亡更可怕",
    coping: "更虔诚的信仰、圣徒崇拜、宗教艺术",
    becomes: "corruption",
    mutation: "当死亡不是终点而是审判的开始，恐惧从'终结'变成'永恒的延续'",
    quote: "地狱不是一个地方，而是一种永恒的缺席",
    x: 400, y: 1720, r: 36
  },
  {
    id: "corruption",
    era: "文艺复兴初期 1400-1500",
    title: "对教会腐败的恐惧",
    source: "赎罪券买卖、教廷的世俗权力、波吉亚家族的堕落、神职人员的道德沦丧。",
    level: "制度",
    target: "制度性的堕落——如果管道脏了，圣水还干净吗？",
    coping: "人文主义、个人与上帝的直接关系、宗教改革的先声",
    becomes: "schism",
    mutation: "如果救赎者不可信，谁来保证救赎？恐惧从'神'转向'神的代理人'",
    quote: "当教会成为一座腐败的宫殿，信仰必须在废墟中重建",
    x: 480, y: 1880, r: 38
  },
  {
    id: "schism",
    era: "宗教改革 1520-1560",
    title: "对信仰分裂的恐惧",
    source: "路德的95条论纲、印刷术传播、新教与天主教的对抗、圣像破坏运动。",
    level: "宗教",
    target: "不确定的救赎——我该信哪个版本的神？",
    coping: "反宗教改革、巴洛克艺术的感官冲击、教条强化",
    becomes: "fanaticism",
    mutation: "一个上帝，多种解释——每一种都声称自己是唯一的真理",
    quote: "分裂的信仰比统一的异端更可怕",
    x: 420, y: 2040, r: 38
  },
  {
    id: "fanaticism",
    era: "三十年战争 1618-1648",
    title: "对宗教狂热的恐惧",
    source: "以信仰之名进行的屠杀、神圣罗马帝国人口减少30%。",
    level: "社会",
    target: "宗教本身作为暴力的来源——信仰变成了武器",
    coping: "启蒙理性主义、威斯特伐利亚和约：政治与宗教分离",
    becomes: "superstition",
    mutation: "如果信仰导致屠杀，那么信仰本身就是危险的",
    quote: "三十年战争教会欧洲：上帝的名义可以杀死最多的人",
    x: 500, y: 2200, r: 38
  },
  {
    id: "superstition",
    era: "启蒙运动 1700-1789",
    title: "对迷信与无知的恐惧",
    source: "专制统治、教会的知识垄断、非理性的社会秩序、猎巫运动的记忆。",
    level: "知识",
    target: "非理性——人类尚未成年，被权威和 tradition 奴役",
    coping: "科学方法、百科全书、进步叙事、社会契约",
    becomes: "cold-reason",
    mutation: "如果理性才是答案，那么无知就是最大的敌人",
    quote: "敢于认知！要有勇气运用你自己的理智",
    x: 400, y: 2360, r: 36
  },
  {
    id: "cold-reason",
    era: "浪漫主义 / 工业革命 1790-1830",
    title: "对理性冷血的恐惧",
    source: "工厂制度、人的异化、法国大革命的恐怖（理性之名下的断头台）。",
    level: "心理",
    target: "人的机械化——情感、直觉、自然被理性碾压",
    coping: "回归自然、个体情感的神圣化、民族精神、浪漫主义的崇高",
    becomes: "barbarism",
    mutation: "如果理性没有温度，人就成了机器",
    quote: "工业时代的人，是机器中的一个齿轮，连灵魂都被标准化了",
    x: 480, y: 2520, r: 40
  },
  {
    id: "barbarism",
    era: "一战前后 1910-1920",
    title: "对文明野蛮的恐惧",
    source: "堑壕战、毒气、机枪、800万年轻人的死亡、凡尔登的绞肉机。",
    level: "社会 / 心理",
    target: "文明只是一层薄薄的皮肤—— beneath it，野兽仍在",
    coping: "现代主义、达达主义的虚无、对乌托邦的渴望或彻底的绝望",
    becomes: "darkness",
    mutation: "如果文明可以制造如此高效的屠杀，文明本身就是问题",
    quote: "我这不是在战斗，我是在一个巨大的绞肉机里——而操作机器的是'文明人'",
    x: 420, y: 2680, r: 44
  },
  {
    id: "darkness",
    era: "二战前后 1940-1950",
    title: "对人性黑暗的恐惧",
    source: "集中营、原子弹、阿伦特所说的'平庸之恶'、纽伦堡审判揭示的日常性。",
    level: "哲学 / 存在",
    target: "恶不是怪物，而是普通人日常的不思考、不判断、不反抗",
    coping: "存在主义：意义不是被给予的，而是被创造的；消费主义的麻醉",
    becomes: "unreality",
    mutation: "如果恶是平庸的，那么每个人心中都有集中营",
    quote: "恶是平庸的，它来自不思考——艾希曼不是恶魔，他是官僚",
    x: 500, y: 2840, r: 48
  },
  {
    id: "unreality",
    era: "当代 1960-至今",
    title: "对真实消失的恐惧",
    source: "消费主义、数字技术、信息过载、AI生成内容、鲍德里亚的'拟像'、后真相政治。",
    level: "超真实",
    target: "我还能相信什么？真实与虚构的边界在哪里？",
    coping: "？——这是我们正在书写的答案",
    becomes: null,
    mutation: "如果真实本身已经死亡，我们生活在谁的叙事里？",
    quote: "我们生活在模拟中，而模拟比真实更真实——这不是预言，这是诊断",
    x: 450, y: 3020, r: 52
  }
];

/* 河流路径 — 垂直蜿蜒 */
const riverD = "M 450 120 C 450 180, 520 220, 520 280 C 520 340, 460 380, 380 440 C 340 500, 440 540, 480 600 C 520 660, 460 700, 420 760 C 380 820, 460 860, 500 920 C 540 980, 460 1020, 400 1080 C 360 1140, 440 1180, 480 1240 C 520 1300, 460 1340, 420 1400 C 380 1460, 460 1500, 500 1560 C 540 1620, 460 1660, 400 1720 C 360 1780, 440 1820, 480 1880 C 520 1940, 460 1980, 420 2040 C 380 2100, 460 2140, 500 2200 C 540 2260, 460 2300, 400 2360 C 360 2420, 440 2460, 480 2520 C 520 2580, 460 2620, 420 2680 C 380 2740, 460 2780, 500 2840 C 540 2900, 480 2940, 450 3020";

/* 变异标签 */
const mutations = [
  { x: 485, y: 200, text: "从树到地面" },
  { x: 450, y: 360, text: "天敌在暗处" },
  { x: 430, y: 520, text: "天空成为敌人" },
  { x: 450, y: 680, text: "从寻找变成等待" },
  { x: 420, y: 840, text: "城市需要秩序" },
  { x: 460, y: 1000, text: "神在注视" },
  { x: 450, y: 1160, text: "命运不可违" },
  { x: 440, y: 1320, text: "人的权力" },
  { x: 460, y: 1480, text: "疾病回归" },
  { x: 450, y: 1640, text: "从个体到集体" },
  { x: 450, y: 1800, text: "死亡不是终点" },
  { x: 440, y: 1960, text: "如果救赎者不可信" },
  { x: 460, y: 2120, text: "一个上帝多种解释" },
  { x: 450, y: 2280, text: "以神之名的屠杀" },
  { x: 440, y: 2440, text: "理性成为新信仰" },
  { x: 450, y: 2600, text: "理性没有温度" },
  { x: 460, y: 2760, text: "文明只是表皮" },
  { x: 475, y: 2930, text: "恶是平庸的" }
];

/* ===== 初始化 ===== */
function init() {
  document.getElementById('river-glow').setAttribute('d', riverD);
  document.getElementById('river-main').setAttribute('d', riverD);

  const mutG = document.getElementById('mutations');
  mutations.forEach(m => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', m.x - 60);
    line.setAttribute('y1', m.y);
    line.setAttribute('x2', m.x + 60);
    line.setAttribute('y2', m.y);
    line.setAttribute('class', 'mut-line');
    mutG.appendChild(line);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', m.x);
    text.setAttribute('y', m.y - 8);
    text.setAttribute('class', 'mut-label');
    text.textContent = m.text;
    mutG.appendChild(text);
  });

  const nodeG = document.getElementById('nodes');
  fears.forEach((f, i) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'node');
    g.setAttribute('data-id', f.id);

    const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    pulse.setAttribute('cx', f.x);
    pulse.setAttribute('cy', f.y);
    pulse.setAttribute('r', f.r + 8);
    pulse.setAttribute('class', 'node-pulse');
    const a1 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    a1.setAttribute('attributeName', 'r');
    a1.setAttribute('values', `${f.r+8};${f.r+30};${f.r+8}`);
    a1.setAttribute('dur', `${2.5 + i*0.15}s`);
    a1.setAttribute('repeatCount', 'indefinite');
    pulse.appendChild(a1);
    const a2 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    a2.setAttribute('attributeName', 'opacity');
    a2.setAttribute('values', '0.15;0;0.15');
    a2.setAttribute('dur', `${2.5 + i*0.15}s`);
    a2.setAttribute('repeatCount', 'indefinite');
    pulse.appendChild(a2);
    g.appendChild(pulse);

    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', f.x);
    c.setAttribute('cy', f.y);
    c.setAttribute('r', f.r);
    c.setAttribute('class', 'node-circle');
    g.appendChild(c);

    const num = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    num.setAttribute('x', f.x);
    num.setAttribute('y', f.y + 4);
    num.setAttribute('class', 'node-num');
    num.textContent = i + 1;
    g.appendChild(num);

    const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    lbl.setAttribute('x', f.x);
    lbl.setAttribute('y', f.y + f.r + 28);
    lbl.setAttribute('class', 'node-label');
    lbl.textContent = f.title;
    g.appendChild(lbl);

    g.addEventListener('click', () => openDetail(f.id));
    nodeG.appendChild(g);
  });
}

/* ===== 打开详情面板 ===== */
function openDetail(id) {
  const f = fears.find(x => x.id === id);
  if (!f) return;
  const idx = fears.indexOf(f);
  const prev = idx > 0 ? fears[idx-1] : null;
  const next = idx < fears.length-1 ? fears[idx+1] : null;
  const depth = (idx / (fears.length-1)) * 100;

  let html = '<button class="panel-close" onclick="closeDetail()">×</button>';
  html += `<div class="detail-era">${f.era}</div>`;
  html += `<h2 class="detail-title">${f.title}</h2>`;

  html += `
    <div class="depth-wrap">
      <div class="depth-labels"><span>外部</span><span>内部</span></div>
      <div class="depth-track">
        <div class="depth-marker" style="left:${depth}%"></div>
      </div>
    </div>
  `;

  html += `<div class="mutation-path">`;
  if (prev) html += `<span>${prev.title.replace(/对/,'').replace(/的恐惧/,'')}</span>`;
  else html += `<span style="opacity:0.5">源头</span>`;
  html += `<span class="arrow">→</span>`;
  html += `<span style="font-weight:bold">${f.title.replace(/对/,'').replace(/的恐惧/,'')}</span>`;
  if (next) html += `<span class="arrow">→</span><span>${next.title.replace(/对/,'').replace(/的恐惧/,'')}</span>`;
  else html += `<span class="arrow">→</span><span style="opacity:0.5">?</span>`;
  html += `</div>`;

  const sections = [
    { label: '来源 / Origin', text: f.source },
    { label: '层面 / Level', text: f.level },
    { label: '恐惧对象 / Target', text: f.target },
    { label: '应对 / Response', text: f.coping }
  ];
  if (f.mutation && f.mutation !== '？') {
    sections.push({ label: '变异 / Mutation', text: f.mutation });
  }
  sections.forEach(s => {
    html += `
      <div class="section">
        <h4>${s.label}</h4>
        <p>${s.text}</p>
      </div>
    `;
  });

  if (f.quote) {
    html += `<div class="detail-quote">"${f.quote}"</div>`;
  }

  const panel = document.getElementById('detail-panel');
  panel.innerHTML = html;
  panel.classList.add('active');

  document.querySelectorAll('.node').forEach(n => {
    n.style.opacity = n.getAttribute('data-id') === id ? '1' : '0.2';
  });

  const svg = document.getElementById('river-svg');
  const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  ripple.setAttribute('cx', f.x);
  ripple.setAttribute('cy', f.y);
  ripple.setAttribute('r', f.r);
  ripple.setAttribute('fill', 'none');
  ripple.setAttribute('stroke', '#fff');
  ripple.setAttribute('stroke-width', '2');
  ripple.setAttribute('opacity', '0.5');
  ripple.setAttribute('pointer-events', 'none');
  const ar = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
  ar.setAttribute('attributeName', 'r');
  ar.setAttribute('to', f.r + 80);
  ar.setAttribute('dur', '0.6s');
  ar.setAttribute('fill', 'freeze');
  ripple.appendChild(ar);
  const ao = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
  ao.setAttribute('attributeName', 'opacity');
  ao.setAttribute('to', '0');
  ao.setAttribute('dur', '0.6s');
  ao.setAttribute('fill', 'freeze');
  ripple.appendChild(ao);
  svg.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

/* ===== 关闭详情面板 ===== */
function closeDetail() {
  const panel = document.getElementById('detail-panel');
  panel.classList.remove('active');
  panel.innerHTML = `
    <div class="panel-empty">
      <p>选择一个恐惧节点以查看解剖报告</p>
      <p style="font-size:1.5rem;margin-top:1rem;opacity:0.5">点击河流上的节点</p>
    </div>
  `;
  document.querySelectorAll('.node').forEach(n => n.style.opacity = '1');
}

/* 启动 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
