const companies = {
  kioxia: {
    name: "キオクシア",
    shortName: "Kioxia",
    unit: "億円",
    color: "#356f9f",
    note: "キオクシアは会社開示値。CY表記は比較しやすいように暦年四半期へ置換。",
    data: [
      { label: "CY2023 Q2", revenue: 2511, operating: -1308, netIncome: -1031 },
      { label: "CY2023 Q3", revenue: 2414, operating: -1008, netIncome: -860 },
      { label: "CY2023 Q4", revenue: 2620, operating: -650, netIncome: -649 },
      { label: "CY2024 Q1", revenue: 3221, operating: 439, netIncome: 102 },
      { label: "CY2024 Q2", revenue: 4285, operating: 1259, netIncome: 698 },
      { label: "CY2024 Q3", revenue: 4809, operating: 1660, netIncome: 1062 },
      { label: "CY2024 Q4", revenue: 4500, nonGaapOperating: 1230, operating: 1227, netIncome: 761 },
      { label: "CY2025 Q1", revenue: 3471, operating: 371, netIncome: 203 },
      {
        label: "CY2025 Q2",
        revenue: 3428,
        revenueLow: 2950,
        revenueHigh: 3250,
        nonGaapOperating: 452,
        nonGaapOperatingLow: 130,
        nonGaapOperatingHigh: 350,
        operating: 449,
        operatingLow: 130,
        operatingHigh: 350,
        netIncome: 183,
      },
      {
        label: "CY2025 Q3",
        revenue: 4483,
        revenueLow: 4200,
        revenueHigh: 4700,
        nonGaapOperating: 872,
        nonGaapOperatingLow: 490,
        nonGaapOperatingHigh: 830,
        operating: 859,
        operatingLow: 480,
        operatingHigh: 820,
        netIncome: 407,
      },
      {
        label: "CY2025 Q4",
        revenue: 5436,
        revenueLow: 5000,
        revenueHigh: 5500,
        nonGaapOperating: 1447,
        nonGaapOperatingLow: 1000,
        nonGaapOperatingHigh: 1400,
        operating: 1428,
        operatingLow: 990,
        operatingHigh: 1390,
        netIncome: 878,
      },
    ],
    inventoryNotes: [
      ["CY2025 Q4", "公式の四半期系列として、在庫金額をまだ未投入。次の拡張候補。"],
    ],
    memoNotes: {
      inventory: [["CY2025 Q4", "棚卸資産と売上原価の時系列を取得後、在庫回転率を計算予定。"]],
      revenue: [["CY2025 Q4", "AI用途のサーバー需要がデータセンター、エンタープライズ向けを押し上げ。"]],
      profit: [["CY2025 Q4", "高付加価値品と価格環境が利益率を支えた可能性。"]],
      risk: [["CY2026 Q1", "通期見通しは大きな4Q増益を織り込むため、価格・供給・為替の感応度が高い。"]],
    },
  },
  samsungDs: {
    name: "Samsung DS",
    shortName: "Samsung DS",
    unit: "兆ウォン",
    color: "#6f8b3e",
    note: "SamsungはMemory Business単独の四半期売上・営業利益を継続的な表形式では開示していないため、DS Divisionを使用。",
    data: [
      { label: "CY2023 Q1", revenue: 13.73, operating: -4.58, inventoryNote: "Memoryは顧客在庫調整と需要低迷で大幅減益。DSは赤字。" },
      { label: "CY2023 Q2", revenue: 14.73, operating: -4.36, inventoryNote: "HBM、DDR5重視でDRAM出荷はガイダンス超過。顧客在庫調整は継続。" },
      { label: "CY2023 Q3", revenue: 16.44, operating: -3.75, inventoryNote: "Memoryは高付加価値品とASP改善で損失縮小。顧客在庫正常化が進む。" },
      { label: "CY2023 Q4", revenue: 21.69, operating: -2.18, inventoryNote: "DRAMは黒字化。DRAM/NAND在庫消化が加速。" },
      { label: "CY2024 Q1", revenue: 23.14, operating: 1.91, inventoryNote: "Memoryが高付加価値品需要で黒字化。HBM、DDR5、高密度SSDが堅調。" },
      { label: "CY2024 Q2", revenue: 28.56, operating: 6.45, inventoryNote: "HBM、従来型DRAM、Server SSD需要で回復継続。" },
      { label: "CY2024 Q3", revenue: 29.27, operating: 3.86, inventoryNote: "MemoryはHBM、DDR5、Server SSDが伸長。旧世代在庫の整理も進行。" },
      { label: "CY2024 Q4", revenue: 30.1, operating: 2.9, inventoryNote: "Memoryは高付加価値品で売上堅調。一方でR&D費用と先端ノード立上げ費用が利益を圧迫。" },
      { label: "CY2025 Q1", revenue: 25.1, operating: 1.1, inventoryNote: "ASP低下、HBM販売減、輸出規制影響でMemory収益が弱含み。" },
      { label: "CY2025 Q2", revenue: 27.9, operating: 0.4, inventoryNote: "Server SSD増加でNAND在庫は大きく減少。ただしMemory在庫評価調整が利益を圧迫。" },
      { label: "CY2025 Q3", revenue: 33.1, operating: 7.0, inventoryNote: "HBM3EとServer SSDが牽引。評価損など一過性コスト減少も利益を押し上げ。" },
      { label: "CY2025 Q4", revenue: 44.0, operating: 16.4, inventoryNote: "HBM、Server DDR5、Enterprise SSD、価格上昇でMemoryが過去最高。供給は限定的。" },
    ],
    inventoryTurnover: [
      { label: "CY2023", value: 3.5 },
      { label: "CY2024", value: 3.6 },
      { label: "CY2025 Q1", value: 3.9 },
      { label: "CY2025 Q3", value: 4.0 },
    ],
    inventoryNotes: [
      ["CY2023 Q1", "顧客在庫調整が継続し、Memory需要が大きく低迷。"],
      ["CY2023 Q2", "顧客在庫調整は継続しつつ、HBMとDDR5が下支え。"],
      ["CY2023 Q3", "顧客在庫正常化が進み、Memoryの損失が縮小。"],
      ["CY2023 Q4", "DRAM/NAND在庫消化が加速し、DRAMは黒字化。"],
      ["CY2024 Q1", "Memoryが黒字化。高付加価値品需要が改善を牽引。"],
      ["CY2024 Q2", "AI向け投資を背景に、HBM、DDR5、Server SSD需要が継続。"],
      ["CY2025 Q2", "Server SSD増加でNAND在庫が大きく減少。"],
      ["CY2025 Q3", "在庫評価調整など一過性コストが減少し、利益改善に寄与。"],
      ["CY2025 Q4", "需要は強く、供給は限定的。HBM、Server DDR5、Enterprise SSDが牽引。"],
    ],
    memoNotes: {
      inventory: [
        ["CY2023", "会社全体の在庫回転率は3.5回。DS在庫は年末時点で30.999兆ウォン。"],
        ["CY2024", "会社全体の在庫回転率は3.6回。DS在庫は29.689兆ウォンへ微減。"],
        ["CY2025 Q1", "会社全体の在庫回転率は3.9回。DS在庫は30.415兆ウォン。"],
        ["CY2025 Q3", "会社全体の在庫回転率は4.0回。Memoryの在庫評価調整など一過性コストが減少。"],
      ],
      revenue: [
        ["CY2025 Q3", "Memory BusinessはHBM3EとServer SSDで過去最高の四半期売上。"],
        ["CY2025 Q4", "HBM、Server DDR5、Enterprise SSD、価格上昇でMemoryが過去最高。"],
      ],
      profit: [
        ["CY2025 Q2", "Memory在庫評価調整と非メモリの一過性コストが利益を圧迫。"],
        ["CY2025 Q3", "一過性コスト減少と高付加価値品の拡大で利益が改善。"],
        ["CY2025 Q4", "Memoryは過去最高の売上・営業利益。"],
      ],
      risk: [
        ["CY2025 Q4", "HBMなど高付加価値品の供給制約と価格持続性が主要リスク。"],
        ["CY2026", "AI需要への依存度が高く、顧客投資タイミングの変化に業績が振れやすい。"],
      ],
    },
  },
  skHynix: {
    name: "SK hynix",
    shortName: "SK hynix",
    unit: "兆ウォン",
    color: "#a45b37",
    note: "SK hynixはDRAM/NAND中心のメモリメーカー。画面では全社K-IFRS四半期値をメモリ部門の比較 proxy として使用。",
    data: [
      { label: "CY2024 Q1", revenue: 12.4296, operating: 2.886, netIncome: 1.917 },
      { label: "CY2024 Q2", revenue: 16.4233, operating: 5.4685, netIncome: 4.12 },
      { label: "CY2024 Q3", revenue: 17.5731, operating: 7.03, netIncome: 5.7534 },
      { label: "CY2024 Q4", revenue: 19.767, operating: 8.0828, netIncome: 8.0065 },
      { label: "CY2025 Q1", revenue: 17.6391, operating: 7.4405, netIncome: 8.1082 },
      { label: "CY2025 Q2", revenue: 22.232, operating: 9.2129, netIncome: 6.9962 },
      { label: "CY2025 Q3", revenue: 24.4489, operating: 11.3834, netIncome: 12.5975 },
      { label: "CY2025 Q4", revenue: 32.8267, operating: 19.1696, netIncome: 15.246 },
    ],
    inventoryNotes: [
      ["CY2025 Q4", "AI memory、HBM、高付加価値品の需要が強く、2025年は過去最高業績。"],
    ],
    memoNotes: {
      inventory: [["CY2025 Q4", "在庫回転率の定量系列は未投入。棚卸資産・売上原価の取得後に追加可能。"]],
      revenue: [["CY2025 Q4", "HBMに加え、サーバー向け従来型メモリ需要が急拡大。"]],
      profit: [["CY2025 Q4", "価格上昇と高付加価値品構成でOPMは58%へ上昇。"]],
      risk: [["CY2026", "HBM供給計画とAI投資サイクルへの依存が高い。"]],
    },
  },
  sandisk: {
    name: "SanDisk",
    shortName: "SanDisk",
    unit: "十億USD",
    color: "#7c5aa6",
    note: "2025年2月の分離後、SanDisk単体のNAND/Flash企業として開示された値を使用。",
    data: [
      {
        label: "CY2025 Q3",
        revenue: 2.308,
        costOfRevenue: 1.621,
        grossProfit: 0.687,
        grossMargin: 29.8,
        nonGaapGrossMargin: 29.9,
        opex: 0.511,
        nonGaapOpex: 0.446,
        operating: 0.176,
        nonGaapOperating: 0.245,
        netIncome: 0.112,
        nonGaapNetIncome: 0.181,
        dilutedEps: 0.75,
        nonGaapDilutedEps: 1.22,
        datacenterRevenue: 0.269,
        edgeRevenue: 1.387,
        consumerRevenue: 0.652,
        operatingCashFlow: 0.488,
        capex: 0.05,
        freeCashFlow: 0.438,
      },
      {
        label: "CY2025 Q4",
        revenue: 3.025,
        costOfRevenue: 1.484,
        grossProfit: 1.541,
        grossMargin: 50.9,
        nonGaapGrossMargin: 51.1,
        opex: 0.476,
        nonGaapOpex: 0.413,
        operating: 1.065,
        nonGaapOperating: 1.133,
        netIncome: 0.803,
        nonGaapNetIncome: 0.967,
        dilutedEps: 5.15,
        nonGaapDilutedEps: 6.2,
        datacenterRevenue: 0.44,
        edgeRevenue: 1.678,
        consumerRevenue: 0.907,
        operatingCashFlow: 1.019,
        capex: 0.039,
        freeCashFlow: 0.98,
      },
      {
        label: "CY2026 Q1",
        revenue: 5.95,
        costOfRevenue: 1.288,
        grossProfit: 4.662,
        grossMargin: 78.4,
        nonGaapGrossMargin: 78.4,
        opex: 0.551,
        nonGaapOpex: 0.448,
        operating: 4.111,
        nonGaapOperating: 4.218,
        netIncome: 3.615,
        nonGaapNetIncome: 3.675,
        dilutedEps: 23.03,
        nonGaapDilutedEps: 23.41,
        datacenterRevenue: 1.467,
        edgeRevenue: 3.663,
        consumerRevenue: 0.82,
      },
    ],
    inventoryNotes: [
      ["CY2026 Q1", "単体分離後の在庫回転率は未投入。売上原価と棚卸資産の時系列取得後に追加可能。"],
    ],
    memoNotes: {
      inventory: [["CY2026 Q1", "在庫回転率の定量系列は未投入。NAND/Flash単体の売上原価・平均棚卸資産で計算予定。"]],
      revenue: [["CY2026 Q1", "Datacenter revenueが前四半期比233%増。高付加価値顧客と価格上昇が牽引。"]],
      profit: [["CY2026 Q1", "粗利率78.4%、Non-GAAP営業利益4.218十億USDまで急伸。"]],
      risk: [["CY2026 Q2", "新ビジネスモデル契約と価格持続性が主要な確認点。"]],
    },
  },
};

const metrics = {
  revenue: { label: "売上", unitLabel: "各社指数", format: "number", indexed: true },
  operating: { label: "営業利益", unitLabel: "各社指数", format: "number", indexed: true },
  opm: { label: "OPM", unitLabel: "%", format: "percent", indexed: false },
  nonGaapOperating: { label: "Non-GAAP営業利益", unitLabel: "各社指数", format: "number", indexed: true },
  inventoryTurnover: { label: "在庫回転率", unitLabel: "回転率", format: "ratio", indexed: false },
};

const averageFxByCompany = {
  kioxia: {
    unitPerUsd: "円/USD",
    rates: {
      "CY2023 Q2": 140,
      "CY2023 Q3": 145,
      "CY2023 Q4": 147,
      "CY2024 Q1": 151,
      "CY2024 Q2": 156,
      "CY2024 Q3": 149,
      "CY2024 Q4": 149,
      "CY2025 Q1": 143,
      "CY2025 Q2": 145,
      "CY2025 Q3": 147,
      "CY2025 Q4": 153,
    },
  },
  samsungDs: {
    unitPerUsd: "ウォン/USD",
    rates: {
      "CY2023 Q1": 1340,
      "CY2023 Q2": 1275,
      "CY2023 Q3": 1350,
      "CY2023 Q4": 1335,
      "CY2024 Q1": 1380,
      "CY2024 Q2": 1385,
      "CY2024 Q3": 1380,
      "CY2024 Q4": 1450,
      "CY2025 Q1": 1430,
      "CY2025 Q2": 1385,
      "CY2025 Q3": 1430,
      "CY2025 Q4": 1440,
    },
  },
  skHynix: {
    unitPerUsd: "ウォン/USD",
    rates: {
      "CY2024 Q1": 1330,
      "CY2024 Q2": 1370,
      "CY2024 Q3": 1360,
      "CY2024 Q4": 1400,
      "CY2025 Q1": 1430,
      "CY2025 Q2": 1385,
      "CY2025 Q3": 1430,
      "CY2025 Q4": 1440,
    },
  },
  sandisk: {
    unitPerUsd: "USD/USD",
    rates: {
      "CY2025 Q3": 1,
      "CY2025 Q4": 1,
      "CY2026 Q1": 1,
    },
  },
};

const suggestedMetrics = [
  ["粗利率", "価格・原価・稼働率の改善を見るにはOPMより早く効くことがあります。"],
  ["営業利益の前年差 / QoQ差", "サイクル反転局面では、利益水準そのものより変化幅が重要です。"],
  ["設備投資 / 売上", "メモリメーカーは投資規律が需給と価格に直結します。"],
  ["減価償却費 / 売上", "先端プロセス投資の重さと固定費負担を比較できます。"],
  ["FCFまたは営業CF", "利益が出ていても在庫・投資で現金が出ているかを確認できます。"],
  ["在庫回転率・棚卸資産 / 売上", "需要回復が本物か、チャネルや自社在庫に積み上がっているだけかを見る指標です。"],
];

const singleCompanySeries = [
  { key: "revenue", label: "売上", color: "#356f9f" },
  { key: "operating", label: "営業利益", color: "#b7832f" },
  { key: "nonGaapOperating", label: "Non-GAAP営業利益", color: "#2b8a67" },
  { key: "opm", label: "OPM", color: "#7c5aa6", axis: "percent" },
];

let activePage = "company";
let activeRange = 4;
let selectedCompanies = ["kioxia", "samsungDs"];
let metricSelectedCompanies = ["kioxia", "samsungDs", "skHynix", "sandisk"];
let activeMetric = "revenue";
let displayMode = "index";
let basePeriod = "first";
let activeMemoTab = "inventory";

const pageTabs = document.querySelectorAll(".page-tabs button");
const companyPage = document.querySelector("#companyPage");
const metricPage = document.querySelector("#metricPage");
const rawPage = document.querySelector("#rawPage");
const companySelector = document.querySelector("#companySelector");
const metricCompanySelector = document.querySelector("#metricCompanySelector");
const metricSelector = document.querySelector("#metricSelector");
const companySummary = document.querySelector("#companySummary");
const companyModeBadge = document.querySelector("#companyModeBadge");
const companyChart = document.querySelector("#companyChart");
const companyLegend = document.querySelector("#companyLegend");
const companyChartTitle = document.querySelector("#companyChartTitle");
const companyChartNote = document.querySelector("#companyChartNote");
const companyNotes = document.querySelector("#companyNotes");
const metricChart = document.querySelector("#metricChart");
const metricLegend = document.querySelector("#metricLegend");
const metricChartTitle = document.querySelector("#metricChartTitle");
const metricChartNote = document.querySelector("#metricChartNote");
const inventoryNotes = document.querySelector("#inventoryNotes");
const inventoryChart = document.querySelector("#inventoryChart");
const suggestedMetricsTarget = document.querySelector("#suggestedMetrics");
const basePeriodSelect = document.querySelector("#basePeriodSelect");
const rawDataTable = document.querySelector("#rawDataTable");

function hydrateData(data) {
  return data.map((item) => ({
    ...item,
    opm: item.revenue && item.operating !== undefined ? (item.operating / item.revenue) * 100 : undefined,
    nonGaapOpm: item.revenue && item.nonGaapOperating !== undefined ? (item.nonGaapOperating / item.revenue) * 100 : undefined,
    netMargin: item.revenue && item.netIncome !== undefined ? (item.netIncome / item.revenue) * 100 : undefined,
    opmLow: item.revenue && item.operatingLow !== undefined ? (item.operatingLow / item.revenue) * 100 : undefined,
    opmHigh: item.revenue && item.operatingHigh !== undefined ? (item.operatingHigh / item.revenue) * 100 : undefined,
  }));
}

function companyData(key) {
  return hydrateData(companies[key].data);
}

function formatNumber(value, suffix = "") {
  if (value === undefined || value === null) return "-";
  return `${value.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}${suffix}`;
}

function formatMetricValue(value, metricKey) {
  if (metricKey === "opm") return `${value.toFixed(1)}%`;
  return formatNumber(value);
}

function toUsdBillions(companyKey, label, value) {
  if (value === undefined) return undefined;
  const fx = averageFxByCompany[companyKey]?.rates[label];
  if (!fx) return undefined;
  if (companyKey === "kioxia") return value / (fx * 10);
  if (companyKey === "samsungDs" || companyKey === "skHynix") return (value * 1000) / fx;
  if (companyKey === "sandisk") return value;
  return undefined;
}

function shortPeriod(label) {
  return label.replace("CY", "");
}

function visibleLabels(range = activeRange) {
  const labels = Array.from(new Set(Object.values(companies).flatMap((company) => company.data.map((item) => item.label)))).sort();
  const count = range === "all" ? labels.length : Number(range);
  return labels.slice(-Math.min(count, labels.length));
}

function metricLabels(metricKey = activeMetric) {
  if (metricKey === "inventoryTurnover") {
    return Array.from(new Set(Object.values(companies).flatMap((company) => (company.inventoryTurnover || []).map((item) => item.label)))).sort();
  }
  return visibleLabels("all");
}

function latestWithValue(data, metricKey) {
  return [...data].reverse().find((item) => item[metricKey] !== undefined);
}

function renderCheckboxes(target, selected, name, onChange) {
  target.innerHTML = Object.entries(companies)
    .map(
      ([key, company]) => `<label class="check-card">
        <input type="checkbox" name="${name}" value="${key}" ${selected.includes(key) ? "checked" : ""} />
        <span>${company.name}</span>
        <small>${company.unit}</small>
      </label>`,
    )
    .join("");
  target.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const values = Array.from(target.querySelectorAll("input:checked")).map((item) => item.value);
      onChange(values.length ? values : [input.value]);
    });
  });
}

function renderMetricRadios() {
  metricSelector.innerHTML = Object.entries(metrics)
    .map(
      ([key, metric]) => `<label class="radio-card">
        <input type="radio" name="metric" value="${key}" ${activeMetric === key ? "checked" : ""} />
        <span>${metric.label}</span>
      </label>`,
    )
    .join("");
  metricSelector.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      activeMetric = input.value;
      renderMetricPage();
    });
  });
}

function renderBasePeriodSelect() {
  const labels = metricLabels(activeMetric);
  basePeriodSelect.innerHTML = `<option value="first">各社の最初の値</option>${labels
    .map((label) => `<option value="${label}" ${basePeriod === label ? "selected" : ""}>${shortPeriod(label)}</option>`)
    .join("")}`;
  if (basePeriod !== "first" && !labels.includes(basePeriod)) {
    basePeriod = "first";
    basePeriodSelect.value = "first";
  }
}

function axisDomain(values, includeZero = true) {
  const clean = values.filter((value) => value !== undefined && Number.isFinite(value));
  if (!clean.length) return [0, 100];
  const minRaw = Math.min(...clean, includeZero ? 0 : clean[0]);
  const maxRaw = Math.max(...clean, includeZero ? 0 : clean[0]);
  if (minRaw === maxRaw) return [minRaw - 1, maxRaw + 1];
  const padding = (maxRaw - minRaw) * 0.12;
  return [minRaw - padding, maxRaw + padding];
}

function alignDomainToZero(primaryMin, primaryMax, secondaryMin, secondaryMax) {
  if (primaryMin >= 0 && secondaryMax > 0) return [0, secondaryMax];
  if (primaryMax <= 0 && secondaryMin < 0) return [secondaryMin, 0];
  if (primaryMin >= 0 || primaryMax <= 0 || secondaryMin >= 0 || secondaryMax <= 0) return [secondaryMin, secondaryMax];
  const zeroRatio = -primaryMin / (primaryMax - primaryMin);
  let min = secondaryMin;
  let max = secondaryMax;
  const maxFromMin = min + (-min / zeroRatio);
  if (maxFromMin >= max) max = maxFromMin;
  else min = -(zeroRatio * max) / (1 - zeroRatio);
  return [min, max];
}

function linePath(points) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

function renderLineChart(target, config) {
  const width = config.width || 980;
  const height = config.height || 390;
  const pad = config.pad || { top: 30, right: 54, bottom: 74, left: 72 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;
  const labels = config.labels;
  const xFor = (label) => (labels.length === 1 ? pad.left + chartWidth / 2 : pad.left + (labels.indexOf(label) / (labels.length - 1)) * chartWidth);
  const primarySeries = config.series.filter((series) => series.axis !== "right");
  const rightSeries = config.series.filter((series) => series.axis === "right");
  const primaryValues = primarySeries.flatMap((series) => series.values.map((item) => item.value));
  const rightValues = rightSeries.flatMap((series) => series.values.map((item) => item.value));
  const [primaryMin, primaryMax] = axisDomain(primaryValues);
  const rawRight = axisDomain(rightValues);
  const [rightMin, rightMax] = rightSeries.length ? alignDomainToZero(primaryMin, primaryMax, rawRight[0], rawRight[1]) : rawRight;
  const yFor = (value) => pad.top + chartHeight - ((value - primaryMin) / (primaryMax - primaryMin)) * chartHeight;
  const yRightFor = (value) => pad.top + chartHeight - ((value - rightMin) / (rightMax - rightMin)) * chartHeight;
  const ticks = Array.from({ length: 5 }, (_, index) => primaryMin + ((primaryMax - primaryMin) / 4) * index);
  const grid = ticks
    .map((tick) => `<line class="chart-grid-line" x1="${pad.left}" y1="${yFor(tick)}" x2="${width - pad.right}" y2="${yFor(tick)}"></line>
      <text class="chart-label" x="${pad.left - 10}" y="${yFor(tick) + 4}" text-anchor="end">${formatNumber(tick)}</text>`)
    .join("");
  const rightTicks = rightSeries.length
    ? Array.from({ length: 5 }, (_, index) => rightMin + ((rightMax - rightMin) / 4) * index)
        .map((tick) => `<text class="chart-label" x="${width - pad.right + 10}" y="${yRightFor(tick) + 4}">${tick.toFixed(1)}%</text>`)
        .join("")
    : "";
  const lines = config.series
    .map((series) => {
      const localY = series.axis === "right" ? yRightFor : yFor;
      const values = series.values.filter((item) => labels.includes(item.label) && item.value !== undefined);
      if (!values.length) return "";
      const points = values.map((item) => ({ x: xFor(item.label), y: localY(item.value), item }));
      const stems = values
        .filter((item) => item.low !== undefined && item.high !== undefined)
        .map((item) => `<line class="guidance-stem" x1="${xFor(item.label)}" y1="${localY(item.low)}" x2="${xFor(item.label)}" y2="${localY(item.high)}" stroke="${series.color}"></line>`)
        .join("");
      const line = points.length > 1 ? `<polyline points="${linePath(points)}" fill="none" stroke="${series.color}" stroke-width="${series.dashed ? 2.4 : 3}" stroke-linecap="round" stroke-linejoin="round" ${series.dashed ? 'stroke-dasharray="6 5"' : ""}></polyline>` : "";
      const dots = points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4.5" fill="${series.color}" class="${point.item.low !== undefined ? "guidance-dot" : ""}"></circle>`).join("");
      return `${stems}${line}${dots}`;
    })
    .join("");
  const xLabels = labels
    .map((label, index) => `<text class="chart-label" x="${xFor(label)}" y="${height - 38 + (index % 2) * 13}" text-anchor="middle">${shortPeriod(label)}</text>`)
    .join("");
  target.innerHTML = `<svg class="chart-svg" viewBox="0 0 ${width} ${height}" aria-hidden="true">
    ${grid}
    <line class="chart-axis" x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}"></line>
    <line class="chart-axis" x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${height - pad.bottom}"></line>
    ${rightSeries.length ? `<line class="chart-axis" x1="${width - pad.right}" y1="${pad.top}" x2="${width - pad.right}" y2="${height - pad.bottom}"></line>${rightTicks}` : ""}
    <text class="chart-label" x="${pad.left}" y="18">${config.leftLabel}</text>
    ${config.rightLabel ? `<text class="chart-label" x="${width - pad.right}" y="18" text-anchor="end">${config.rightLabel}</text>` : ""}
    ${lines}
    ${xLabels}
    <text class="chart-label" x="${pad.left}" y="${height - 8}">${config.note}</text>
  </svg>`;
}

function metricSourceData(companyKey, metricKey) {
  if (metricKey === "inventoryTurnover") return companies[companyKey].inventoryTurnover || [];
  return companyData(companyKey);
}

function metricValuesForCompany(companyKey, metricKey, labels, indexed) {
  const data = metricSourceData(companyKey, metricKey);
  const useUsd = displayMode === "usd" && metrics[metricKey].format === "number";
  const values = labels
    .map((label) => {
      const row = data.find((item) => item.label === label);
      const value = useUsd ? toUsdBillions(companyKey, label, row?.[metricKey]) : row?.[metricKey];
      const low = useUsd ? toUsdBillions(companyKey, label, row?.[`${metricKey}Low`]) : row?.[`${metricKey}Low`];
      const high = useUsd ? toUsdBillions(companyKey, label, row?.[`${metricKey}High`]) : row?.[`${metricKey}High`];
      return {
        label,
        value,
        low,
        high,
      };
    })
    .filter((item) => item.value !== undefined || item.low !== undefined || item.high !== undefined);
  if (!indexed || useUsd) return values;
  const selectedBase = basePeriod === "first" ? undefined : values.find((item) => item.label === basePeriod && item.value !== undefined)?.value;
  const base = selectedBase || values.find((item) => item.value !== undefined)?.value || 1;
  return values.map((item) => ({
    ...item,
    value: item.value !== undefined ? (item.value / base) * 100 : undefined,
    low: item.low !== undefined ? (item.low / base) * 100 : undefined,
    high: item.high !== undefined ? (item.high / base) * 100 : undefined,
  }));
}

function renderCompanySummary() {
  companySummary.innerHTML = selectedCompanies
    .map((key) => {
      const company = companies[key];
      const data = companyData(key);
      const latestRevenue = latestWithValue(data, "revenue");
      const latestOperating = latestWithValue(data, "operating");
      const latestOpm = latestWithValue(data, "opm");
      return `<article class="metric-card accent-blue">
        <span>${company.name}</span>
        <strong>${latestRevenue?.label || "-"}</strong>
        <p>売上 ${formatNumber(latestRevenue?.revenue)} ${company.unit} / 営業利益 ${formatNumber(latestOperating?.operating)} ${company.unit} / OPM ${formatNumber(latestOpm?.opm)}%</p>
      </article>`;
    })
    .join("");
}

function renderCompanyChart() {
  const labels = visibleLabels();
  if (selectedCompanies.length === 1) {
    const key = selectedCompanies[0];
    const company = companies[key];
    const data = companyData(key);
    const series = singleCompanySeries.map((item) => ({
      ...item,
      axis: item.axis === "percent" ? "right" : "left",
      dashed: item.axis === "percent",
      values: labels
        .map((label) => {
          const row = data.find((entry) => entry.label === label);
          return { label, value: row?.[item.key], low: row?.[`${item.key}Low`], high: row?.[`${item.key}High`] };
        })
        .filter((row) => row.value !== undefined || row.low !== undefined),
    }));
    companyChartTitle.textContent = `${company.name}: 売上・利益・OPM`;
    companyLegend.innerHTML = series.map((item) => `<span class="legend-item"><span class="legend-swatch" style="background:${item.color}"></span>${item.label}</span>`).join("");
    companyChartNote.textContent = `${company.note} 縦の色帯はガイダンスレンジ。`;
    renderLineChart(companyChart, {
      labels,
      series,
      leftLabel: `左軸: ${company.unit}`,
      rightLabel: "右軸: OPM",
      note: `期間表記はCY基準 / 表示中: ${shortPeriod(labels[0])} - ${shortPeriod(labels[labels.length - 1])}`,
    });
  } else {
    const metricKey = "revenue";
    const series = selectedCompanies.map((key) => ({
      label: companies[key].name,
      color: companies[key].color,
      values: metricValuesForCompany(key, metricKey, labels, true),
    }));
    companyChartTitle.textContent = `${selectedCompanies.length}社比較: 売上指数`;
    companyLegend.innerHTML = series.map((item) => `<span class="legend-item"><span class="legend-swatch" style="background:${item.color}"></span>${item.label}</span>`).join("");
    companyChartNote.textContent = "2社以上を選ぶと、通貨差を避けるため初期値=100の指数で比較します。細かい指標比較は「指標比較」ページで切り替えられます。";
    renderLineChart(companyChart, {
      labels,
      series,
      leftLabel: "左軸: 初期値=100",
      note: `期間表記はCY基準 / 表示中: ${shortPeriod(labels[0])} - ${shortPeriod(labels[labels.length - 1])}`,
    });
  }
}

function renderCompanyNotes() {
  companyNotes.innerHTML = selectedCompanies
    .map((key) => {
      const company = companies[key];
      return `<article class="panel">
        <p class="eyebrow">${company.shortName}</p>
        <h2>データメモ</h2>
        <div class="insight-list">
          <div class="insight-item"><strong>開示粒度</strong><p>${company.note}</p></div>
          <div class="insight-item"><strong>在庫</strong><p>${company.inventoryNotes.map(([period, note]) => `${period}: ${note}`).join(" ")}</p></div>
        </div>
      </article>`;
    })
    .join("");
}

function renderCompanyPage() {
  companyModeBadge.textContent = selectedCompanies.length === 1 ? "単独表示" : `${selectedCompanies.length}社比較`;
  companyModeBadge.className = `status-badge ${selectedCompanies.length === 1 ? "neutral" : "positive"}`;
  renderCompanySummary();
  renderCompanyChart();
  renderCompanyNotes();
}

function renderMetricPage() {
  renderBasePeriodSelect();
  const labels = metricLabels(activeMetric);
  const metric = metrics[activeMetric];
  const useUsd = displayMode === "usd" && metric.format === "number";
  const series = metricSelectedCompanies.map((key) => ({
    label: companies[key].name,
    color: companies[key].color,
    values: metricValuesForCompany(key, activeMetric, labels, metric.indexed),
  }));
  metricChartTitle.textContent = `${metric.label}の企業比較`;
  metricLegend.innerHTML = series.map((item) => `<span class="legend-item"><span class="legend-swatch" style="background:${item.color}"></span>${item.label}</span>`).join("");
  metricChartNote.textContent = useUsd
    ? "期中平均FXでUSD十億ドルに換算。FXテーブルは暫定値のため、厳密化する場合は各社の期中平均レートを更新してください。"
    : metric.indexed
      ? `通貨が異なるため、${basePeriod === "first" ? "各社の最初の値" : shortPeriod(basePeriod)}を100とする指数で表示。`
      : activeMetric === "inventoryTurnover"
        ? "在庫回転率は定量値がある会社だけ表示。Samsungは会社全体ベースで、DS単独ではありません。"
        : "OPMは%の実数で表示。";
  renderLineChart(metricChart, {
    labels,
    series,
    leftLabel: useUsd ? "左軸: USD十億ドル" : `左軸: ${metric.unitLabel}`,
    note: `期間表記はCY基準 / 指標: ${metric.label} / 表示: ${useUsd ? "USD換算" : metric.indexed ? "指数" : "実数"}`,
  });
  renderInventoryNotes();
  renderInventoryTurnover();
  renderSuggestedMetrics();
}

function renderInventoryNotes() {
  const notes = metricSelectedCompanies.flatMap((key) => {
    const company = companies[key];
    const companyNotes = company.memoNotes?.[activeMemoTab] || company.inventoryNotes || [];
    return companyNotes.map(([period, note]) => [period, company.name, note]);
  });
  inventoryNotes.innerHTML = notes
    .map(([period, company, note]) => `<article class="timeline-item"><time>${period}</time><strong>${company}</strong><p>${note}</p></article>`)
    .join("");
}

function renderInventoryTurnover() {
  const series = metricSelectedCompanies
    .map((key) => ({
      label: companies[key].name,
      color: companies[key].color,
      values: (companies[key].inventoryTurnover || []).map((item) => ({ label: item.label, value: item.value })),
    }))
    .filter((item) => item.values.length);
  if (!series.length) {
    inventoryChart.innerHTML = `<div class="empty-chart">在庫回転率は、売上原価 ÷ 平均棚卸資産で計算します。比較可能な売上原価・棚卸資産データがまだ未投入です。</div>`;
    return;
  }
  const labels = Array.from(new Set(series.flatMap((item) => item.values.map((value) => value.label)))).sort();
  renderLineChart(inventoryChart, {
    labels,
    series,
    leftLabel: "左軸: 回転率",
    note: "計算式: 売上原価 ÷ 平均棚卸資産。Samsungは会社全体ベースの在庫回転率で、DS単独ではありません。",
    height: 300,
  });
}

function renderSuggestedMetrics() {
  suggestedMetricsTarget.innerHTML = suggestedMetrics
    .map(([label, text]) => `<article class="timeline-item"><time>候補</time><strong>${label}</strong><p>${text}</p></article>`)
    .join("");
}

const rawMetricLabels = {
  revenue: "売上",
  costOfRevenue: "売上原価",
  grossProfit: "粗利益",
  grossMargin: "粗利率",
  nonGaapGrossMargin: "Non-GAAP粗利率",
  opex: "営業費用",
  nonGaapOpex: "Non-GAAP営業費用",
  operating: "営業利益",
  nonGaapOperating: "Non-GAAP営業利益",
  opm: "OPM",
  nonGaapOpm: "Non-GAAP OPM",
  netIncome: "純利益",
  nonGaapNetIncome: "Non-GAAP純利益",
  netMargin: "純利益率",
  dilutedEps: "希薄化EPS",
  nonGaapDilutedEps: "Non-GAAP希薄化EPS",
  datacenterRevenue: "Datacenter売上",
  edgeRevenue: "Edge売上",
  consumerRevenue: "Consumer売上",
  operatingCashFlow: "営業CF",
  capex: "設備投資",
  freeCashFlow: "FCF",
};

function rawMetricUnit(metricKey, company) {
  if (metricKey.includes("Margin") || metricKey === "opm" || metricKey === "nonGaapOpm" || metricKey === "netMargin") return "%";
  if (metricKey.includes("Eps")) return "USD/株";
  return company.unit;
}

function renderRawDataTable() {
  const rows = Object.entries(companies).flatMap(([key, company]) =>
    companyData(key).flatMap((row) =>
      Object.entries(rawMetricLabels)
        .filter(([metricKey]) => row[metricKey] !== undefined)
        .map(([metricKey, metricLabel]) => ({
          company: company.name,
          label: row.label,
          metric: metricLabel,
          value: row[metricKey],
          unit: rawMetricUnit(metricKey, company),
          note: company.note,
        })),
    ),
  );
  rawDataTable.innerHTML = `<table>
    <thead>
      <tr>
        <th>企業</th>
        <th>期間</th>
        <th>指標</th>
        <th>値</th>
        <th>単位</th>
        <th>注記</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (row) => `<tr>
            <td>${row.company}</td>
            <td>${row.label}</td>
            <td>${row.metric}</td>
            <td>${formatNumber(row.value)}</td>
            <td>${row.unit}</td>
            <td>${row.note}</td>
          </tr>`,
        )
        .join("")}
    </tbody>
  </table>`;
}

function switchPage(page) {
  activePage = page;
  pageTabs.forEach((button) => button.classList.toggle("active", button.dataset.page === page));
  companyPage.classList.toggle("active", page === "company");
  metricPage.classList.toggle("active", page === "metric");
  rawPage.classList.toggle("active", page === "raw");
}

function init() {
  renderCheckboxes(companySelector, selectedCompanies, "company", (values) => {
    selectedCompanies = values;
    renderCompanyPage();
  });
  renderCheckboxes(metricCompanySelector, metricSelectedCompanies, "metric-company", (values) => {
    metricSelectedCompanies = values;
    renderMetricPage();
  });
  renderMetricRadios();
  renderBasePeriodSelect();
  basePeriodSelect.addEventListener("change", () => {
    basePeriod = basePeriodSelect.value;
    renderMetricPage();
  });
  document.querySelectorAll(".range-controls button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".range-controls button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeRange = button.dataset.range;
      renderCompanyPage();
    });
  });
  document.querySelectorAll("[data-display-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-display-mode]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      displayMode = button.dataset.displayMode;
      renderMetricPage();
    });
  });
  document.querySelectorAll("[data-memo-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-memo-tab]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeMemoTab = button.dataset.memoTab;
      renderInventoryNotes();
    });
  });
  pageTabs.forEach((button) => {
    button.addEventListener("click", () => switchPage(button.dataset.page));
  });
  renderCompanyPage();
  renderMetricPage();
  renderRawDataTable();
}

init();
