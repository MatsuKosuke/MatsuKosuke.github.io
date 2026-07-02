const publications = [
  "<u>松﨑孝介</u>，谷口雅弥，坂口慶祐．<strong>日本語方言の音声認識における学習データの規模と特性</strong>．<a href=\"https://anlp.jp/nlp2026/\" target=\"_blank\" rel=\"noreferrer\">言語処理学会第32回年次大会（NLP2026）</a>，2026/3/10．<div class=\"links\"><a href=\"https://www.anlp.jp/proceedings/annual_meeting/2026/pdf_dir/C1-7.pdf\" target=\"_blank\" rel=\"noreferrer\">Paper</a></div>",
  "<u>松﨑孝介</u>，谷口雅弥．<strong>方言音声認識における古典的手法の再考</strong>．<a href=\"https://yans.anlp.jp/entry/yans2025\" target=\"_blank\" rel=\"noreferrer\">第20回言語処理若手シンポジウム（YANS2025）</a>，2025/9/19．<div class=\"links\"><a href=\"https://matsukosuke.github.io/images/YANS2025_Matsuzaki.pdf\" target=\"_blank\" rel=\"noreferrer\">Poster</a></div>",
  "本田恭平，<u>松﨑孝介</u>（代理発表），吉田遥音，坂口慶祐．<strong>認知言語学的イメージスキーマの生成と解釈における大規模言語モデルと画像生成モデルの評価</strong>．<a href=\"https://anlp.jp/nlp2025/\" target=\"_blank\" rel=\"noreferrer\">言語処理学会第31回年次大会（NLP2025）</a>，2025/3/11．<div class=\"links\"><a href=\"https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/P4-9.pdf\" target=\"_blank\" rel=\"noreferrer\">Paper</a></div>",
  "Kosei Kobayashi, Kosuke Matsuzaki, Masaya Taniguchi, Keisuke Sakaguchi, Kentaro Inui, Kentaro Abe. <strong>FinchGPT: A Transformer-based Language Model for Birdsong Analysis.</strong> arXiv, February 2025. <div class=\"links\"><a href=\"https://arxiv.org/abs/2502.00344\" target=\"_blank\" rel=\"noreferrer\">Paper</a></div>",
  "<u>Kosuke Matsuzaki</u>, Masaya Taniguchi, Kentaro Inui, Keisuke Sakaguchi. <strong>J-UniMorph: Japanese Morphological Annotation through the Universal Feature Schema.</strong> <a href=\"https://sigmorphon.github.io/workshops/2024/\" target=\"_blank\" rel=\"noreferrer\">21st SIGMORPHON Workshop</a>, pp. 7–19, 2024/6/20. <div class=\"links\"><a href=\"https://aclanthology.org/2024.sigmorphon-1.2/\" target=\"_blank\" rel=\"noreferrer\">Paper</a></div>",
  "<u>松﨑孝介</u>，谷口雅弥，乾健太郎，坂口慶祐．<strong>J-UniMorph: 日本語の形態論における意味分類の体系化</strong>．<a href=\"https://anlp.jp/nlp2024/\" target=\"_blank\" rel=\"noreferrer\">言語処理学会第30回年次大会（NLP2024）</a>，2024/3/13．<div class=\"links\"><a href=\"https://www.anlp.jp/proceedings/annual_meeting/2024/pdf_dir/C7-5.pdf\" target=\"_blank\" rel=\"noreferrer\">Paper</a></div>",
  "<u>松﨑孝介</u>．<strong>新しい動詞活用辞書 日本語UniMorphの紹介</strong>．<a href=\"https://sites.google.com/view/lingfes2024\" target=\"_blank\" rel=\"noreferrer\">言語学フェス2024</a>，2024/1/20．<div class=\"links\"><a href=\"https://matsukosuke.github.io/images/LingFes2024_A19.pdf\" target=\"_blank\" rel=\"noreferrer\">Poster</a></div>",
  "<u>松﨑孝介</u>，谷口雅弥，坂口慶祐，乾健太郎．<strong>日本語学習のための形態意味中心の動詞活用</strong>．<a href=\"https://yans.anlp.jp/entry/yans2023\" target=\"_blank\" rel=\"noreferrer\">NLP若手の会（YANS）第18回シンポジウム</a>，2023/8/30．<div class=\"links\"><a href=\"https://matsukosuke.github.io/images/YANS2023_Matsuzaki.pdf\" target=\"_blank\" rel=\"noreferrer\">Poster</a></div>"
];

window.siteContent = {
  ja: {
    hero: {
      group: "", // "Tohoku NLP Group"
      summary: "", //"東北大学大学院で自然言語処理の研究に取り組んでいます．"
    },
    toc: { title: "Contents" },
    sections: {
      news: "News",
      profile: "Profile",
      publications: "Publications",
      resources: "Resources",
      awards: "Awards",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      hobbies: "Hobbies",
      contact: "Contact"
    },
    profile: {
      affiliation: {
        label: "Affiliation",
        value: "東北大学 大学院情報科学研究科 博士後期課程1年"
      },
      fellowships: {
        label: "Fellowships / Programs",
        value: "日本学術振興会 特別研究員（DC1）<br>AIE卓越大学院プログラム"
      },
      group: { label: "Research group" },
      field: {
        label: "Research field",
        value: "日本語の動詞の語形変化<br>日本語方言の音声認識"
      }
    },
    news: [
      "2025/9/19: YANS2025にて奨励賞を受賞しました．",
      "2024/2/16: <a href=\"https://cl-tohoku.github.io/J-UniMorph/inflection_tool/inflection.html\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph Visualizer</a>（意味理解・語形変換ツール）を公開しました．",
      "2024/1/15: 日本語形態論のデータセット <a href=\"https://github.com/cl-tohoku/J-UniMorph\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph</a> を公開しました．"
    ],
    publications,
    resources: {
      junimorph: "<p><a href=\"https://github.com/cl-tohoku/J-UniMorph\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph</a> は，日本語形態論のためのデータセットです．世界中の言語の語形に共通のスキーマで特徴ラベルを付与する <a href=\"https://unimorph.github.io/\" target=\"_blank\" rel=\"noreferrer\">UniMorph</a> の日本語版として作成・公開しています．</p>"
    },
    awards: [
      "第20回言語処理若手シンポジウム（YANS2025）：<a href=\"https://yans.anlp.jp/entry/award#%E5%A5%A8%E5%8A%B1%E8%B3%9E-%E5%AF%BE%E8%B1%A1246%E4%BB%B6%E4%B8%AD24%E4%BB%B6\" target=\"_blank\" rel=\"noreferrer\">奨励賞</a>，2025/9/19．<div class=\"meta\">Rate: 24 / 246 (9.76%)</div>",
      "東北大学 総長賞（令和5年度），2024/3/26．<div class=\"meta\">Rate: 27 / 2,358 (1.15%)</div>",
      "NLP若手の会（YANS）第18回シンポジウム：<a href=\"https://yans.anlp.jp/entry/award/#スポンサー賞\" target=\"_blank\" rel=\"noreferrer\">Helpfeel賞</a>（スポンサー賞），2023/8/31．<div class=\"meta\">Rate: 1 / 138 (0.72%)</div>",
      "<a href=\"https://www.iee.jp/tokai/award/%E6%94%AF%E9%83%A8%E9%95%B7%E8%B3%9E%E5%8F%97%E8%B3%9E%E8%80%852021%E5%B9%B4/\" target=\"_blank\" rel=\"noreferrer\">電気学会東海支部長賞（令和3年度）</a>，2022/3/1．<div class=\"meta\">画像処理による常温硬化シンチレータの均一性評価に関する研究</div>"
    ],
    education: [
      { period: "2026/4 –", text: "東北大学大学院 情報科学研究科 博士後期課程" },
      { period: "2024/4 – 2026/3", text: "東北大学大学院 情報科学研究科 博士前期課程<br>修士（情報科学）取得" },
      { period: "2022/4 – 2024/3", text: "東北大学 工学部 電気情報物理工学科（3年次編入学）<br>学士（工学）取得" },
      { period: "2017/4 – 2022/3", text: "長野高専 電気電子工学科<br>準学士（工学）取得" }
    ],
    experience: [
      { period: "2026/4 – 2029/3", text: "日本学術振興会 特別研究員（DC1）" },
      { period: "2026/4 – 2026/6", text: "共同研究 リサーチ・アシスタント（RA）" },
      { period: "2025/10 – 2026/3", text: "情報通信研究機構（NICT） 共同研究インターンシップ" },
      { period: "2024/10 – 2029/3", text: "AIE卓越大学院プログラム リサーチ・アシスタント（RA）" },
      { period: "2024/10 – 2025/9", text: "自然科学総合実験 ティーチング・アシスタント（TA）" },
    ],
    skills: { eikenLabel: "英検", eikenValue: "実用英語技能検定2級" },
    hobbies: { text: "将棋，鉄道旅行" },
    footer: { updated: "ページ開設日：2023/8/21，最終更新日：2026/5/8" }
  },
  en: {
    hero: {
      group: "", // "Tohoku NLP Group",
      summary: "", // "I am working on natural language processing at the Graduate School of Information Sciences, Tohoku University."
    },
    toc: { title: "Contents" },
    sections: {
      news: "News",
      profile: "Profile",
      publications: "Publications",
      resources: "Resources",
      awards: "Awards",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      hobbies: "Hobbies",
      contact: "Contact"
    },
    profile: {
      affiliation: {
        label: "Affiliation",
        value: "First-year Ph.D. student, Graduate School of Information Sciences, Tohoku University"
      },
      fellowships: {
        label: "Fellowships / Programs",
        value: "JSPS Research Fellow (DC1)<br>AIE Program"
      },
      group: { label: "Research group" },
      field: {
        label: "Research field",
        value: "Automatic speech recognition of Japanese dialects<br>Japanese verb inflection"
      }
    },
    news: [
      "2025/9/19: I received an encouragement award at YANS2025.",
      "2024/2/16: I released the <a href=\"https://cl-tohoku.github.io/J-UniMorph/inflection_tool/inflection.html?lang=en\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph Visualizer</a>.",
      "2024/1/15: I released <a href=\"https://github.com/cl-tohoku/J-UniMorph\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph</a>, a dataset for Japanese morphology."
    ],
    publications,
    resources: {
      junimorph: "<p><a href=\"https://github.com/cl-tohoku/J-UniMorph\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph</a> is a dataset for Japanese morphology. It is created and released as the Japanese version of <a href=\"https://unimorph.github.io/\" target=\"_blank\" rel=\"noreferrer\">UniMorph</a>, a project that annotates word forms in languages around the world with a shared schema for morphological features.</p>"
    },
    awards: [
      "Encouragement Award, <a href=\"https://yans.anlp.jp/entry/award#%E5%A5%A8%E5%8A%B1%E8%B3%9E-%E5%AF%BE%E8%B1%A1246%E4%BB%B6%E4%B8%AD24%E4%BB%B6\" target=\"_blank\" rel=\"noreferrer\">YANS2025</a>, 2025/9/19. <div class=\"meta\">Rate: 24 / 246 (9.76%)</div>",
      "Tohoku University President's Award, 2024/3/26. <div class=\"meta\">Rate: 27 / 2,358 (1.15%)</div>",
      "<a href=\"https://yans.anlp.jp/entry/award/#スポンサー賞\" target=\"_blank\" rel=\"noreferrer\">Helpfeel Award</a>, Sponsor Award, YANS2023, 2023/8/31. <div class=\"meta\">Rate: 1 / 138 (0.72%)</div>",
      "<a href=\"https://www.iee.jp/tokai/award/%E6%94%AF%E9%83%A8%E9%95%B7%E8%B3%9E%E5%8F%97%E8%B3%9E%E8%80%852021%E5%B9%B4/\" target=\"_blank\" rel=\"noreferrer\">IEEJ Tokai Section Branch Director Award</a>, 2022/3/1. <div class=\"meta\">Research on uniformity evaluation of room-temperature-curing scintillators using image processing</div>"
    ],
    education: [
      { period: "2026/4 –", text: "Doctoral Program, Graduate School of Information Sciences, Tohoku University" },
      { period: "2024/4 – 2026/3", text: "Master's Program, Graduate School of Information Sciences, Tohoku University" },
      { period: "2022/4 – 2024/3", text: "Department of Electrical, Information and Physics Engineering, School of Engineering, Tohoku University (transferred as a third-year student)" },
      { period: "2017/4 – 2022/3", text: "Department of Electrical and Electronic Engineering, National Institute of Technology (Kosen), Nagano College" }
    ],
    experience: [
      { period: "2026/4 – 2029/3", text: "JSPS Research Fellow (DC1)" },
      { period: "2026/4 – 2026/6", text: "Research Assistant (Collaborative Research Project)" },
      { period: "2025/10 – 2026/3", text: "Research Internship, National Institute of Information and Communications Technology (NICT)" },
      { period: "2024/10 – 2029/3", text: "Research Assistant, AIE Program" },
      { period: "2024/10 – 2025/9", text: "Teaching Assistant for an undergraduate laboratory course in natural sciences" },
    ],
    skills: { eikenLabel: "EIKEN", eikenValue: "EIKEN Grade 2" },
    hobbies: { text: "Shogi (Japanese Chess), Railway travel" },
    footer: { updated: "Established: 2023/8/21; Last updated: 2026/5/8" }
  },
  mk: {
    hero: {
      group: "", // "Tohoku NLP Group"
      summary: "", //"東北大学大学院で自然言語処理の研究に取り組んでいます．"
    },
    toc: { title: "Contents" },
    sections: {
      news: "News",
      profile: "Profile",
      publications: "Publications",
      resources: "Resources",
      awards: "Awards",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      hobbies: "Hobbies",
      contact: "Contact"
    },
    profile: {
      affiliation: {
        label: "Affiliation",
        value: "とーほくだいがく　だいがくいん　ぞ拗ーほーかがくけんく拗ーか　はくしこーきかてー　１ねん"
      },
      fellowships: {
        label: "Fellowships / Programs",
        value: "にほんがくず拗つしんこーかい　とくべつけんく拗ーいん（DC１）<br>AIEたくえつ　だいがくいん　ぷろぐらむ"
      },
      group: { label: "Research group" },
      field: {
        label: "Research field",
        value: "にほんごの　どーしの　ごけーへんか<br>にほんご　ほーげんの　おんせい　にんしき"
      }
    },
    news: [
      "２０２５／９／１９: YANS２０２５　にて　そ拗ーれいそ拗ーを　ず拗そ拗ー　しました．",
      "２０２４／２／１６: <a href=\"https://cl-tohoku.github.io/J-UniMorph/inflection_tool/inflection.html\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph Visualizer</a>（いみりかい・ごけー　へんかん　つーる）を　こーかい　しました．",
      "２０２４／１／１５: にほんご　けーたいろんの　でーたせっと　<a href=\"https://github.com/cl-tohoku/J-UniMorph\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph</a> を　こーかい　しました．"
    ],
    publications,
    resources: {
      junimorph: "<p><a href=\"https://github.com/cl-tohoku/J-UniMorph\" target=\"_blank\" rel=\"noreferrer\">J-UniMorph</a>わ，にほんご　けーたいろん　のための　でーたせっと　です．せかいず拗ーの　げんごの　ごけーに　こ拗ーつーの　すきーまで　とくと拗ー　らべるを　ふよする　<a href=\"https://unimorph.github.io/\" target=\"_blank\" rel=\"noreferrer\">UniMorph</a>の　にほんごばん　として　さくせー・こーかい　しています．</p>"
    },
    awards: [
      "だい２０かい　げんごそ拗り　わかて　しんぽじうむ（YANS２０２５）：<a href=\"https://yans.anlp.jp/entry/award#%E5%A5%A8%E5%8A%B1%E8%B3%9E-%E5%AF%BE%E8%B1%A1246%E4%BB%B6%E4%B8%AD24%E4%BB%B6\" target=\"_blank\" rel=\"noreferrer\">奨励賞</a>，２０２５／９／１９．<div class=\"meta\">Rate: ２４ ／ ２４６ (９.７６%)</div>",
      "とーほくだいがく　そーと拗ーそ拗ー（れーわ５ねんど），２０２４／３／２６．<div class=\"meta\">Rate: ２７ ／ ２３５８ (１.１５%)</div>",
      "NLPわかてのかい（YANS）だい１８かい　しんぽじうむ：<a href=\"https://yans.anlp.jp/entry/award/#スポンサー賞\" target=\"_blank\" rel=\"noreferrer\">Helpfeel賞</a>（すぽんさーそ拗ー），２０２３／８／３１．<div class=\"meta\">Rate: １ ／ １３８ (０.７２%)</div>",
      "<a href=\"https://www.iee.jp/tokai/award/%E6%94%AF%E9%83%A8%E9%95%B7%E8%B3%9E%E5%8F%97%E8%B3%9E%E8%80%852021%E5%B9%B4/\" target=\"_blank\" rel=\"noreferrer\">電気学会東海支部長賞（令和3年度）</a>，２０２２／３／１．<div class=\"meta\">がぞーそ拗り　による　ぞ拗ーおんこーか　しんちれーたの　きんいつせー　ほ拗ーかに　かんする　けんく拗ー</div>"
    ],
    education: [
      { period: "２０２６／４ –", text: "とーほくだいがく　だいがくいん　ぞ拗ーほーかがくけんく拗ーか　はくしこーきかてー" },
      { period: "２０２４／４ – ２０２６／３", text: "とーほくだいがく　だいがくいん　ぞ拗ーほーかがくけんく拗ーか　はくしぜんきかてー<br>す拗ーし（ぞ拗ーほーかがく）す拗とく" },
      { period: "２０２２／４ – ２０２４／３", text: "とーほくだいがく　こーがくぶ　でんきぞ拗ーほーぶつり　こーがくか（３ねんじへんぬ拗ーがく）<br>がくし（こーがく）す拗とく" },
      { period: "２０１７／４ – ２０２２／３", text: "ながのこーせん　でんきでんし　こーがくか<br>ず拗んがくし（こーがく）す拗とく" }
    ],
    experience: [
      { period: "２０２６／４ – ２０２９／３", text: "にほんがくず拗つしんこーかい　とくべつけんく拗ーいん（DC１）" },
      { period: "２０２６／４ – ２０２６／６", text: "こ拗ーどーけんく拗ー　りさーち・あしすたんと（RA）" },
      { period: "２０２５／１０ – ２０２６／３", text: "ぞ拗ーほーつーしんけんく拗ーきこー（NICT）　こ拗ーどーけんく拗ー　いんたーんしっぷ" },
      { period: "２０２４／１０ – ２０２９／３", text: "AIEたくえつ　だいがくいん　ぷろぐらむ　りさーち・あしすたんと（RA）" },
      { period: "２０２４／１０ – ２０２５／９", text: "しぜんかがくそーごーじっけん　丁ーちんぐ・あしすたんと（TA）" },
    ],
    skills: { eikenLabel: "えーけん", eikenValue: "じつよー　えーご　ぎのー　けんてー　２く拗ー" },
    hobbies: { text: "そ拗ーぎ，てつどー　ろ拗こー" },
    footer: { updated: "ぺーじ　かいせつび：２０２３／８／２１，さいす拗ー　こーしんび：２０２６／６／１" }
  },
};
