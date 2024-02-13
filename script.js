let inputText = ""; // 入力された語形
let displayNum = 0; // 表示する意味の行番号（切り替えることで別の意味を表示できる）
let lemma_list = []; // 取得した原形

function calcConfidence(getHitsStr) {
    // 検索ヒット数を用いてヒット指数を計算する
    const getHitsInt = parseInt(getHitsStr.replace(/,/g, ''));
    const maxHits = 3370000000;  // 「する」のヒット数が最大
    const logScaleHits = Math.log10(getHitsInt + 1) / Math.log10(maxHits + 1) * 100;
    return logScaleHits.toFixed(2);
}

function num2comma(numStr) {
    // String型の数値を3桁ごとにカンマ区切りにする
    comma = Number(numStr).toLocaleString();
    return comma;
}

function checkOnOff(inLabel, outLabels, inInt, outInt) {
    // inLabelのチェックボックスがX1になったら，outLabelsのチェックボックスをX2にする
    // ただし，X1: inIntが1のときON，0のときOFF，X2: outIntが1のときON，0のときOFF
    let flag = false;
    if(inInt == 1){
        flag = true;
    }
    document.getElementById(`chk_${inLabel}`).addEventListener('change', function() {
        if(document.getElementById(`chk_${inLabel}`).checked == flag){
            outLabels.forEach(label => {
                if(outInt == 1){
                    document.getElementById(`chk_${label}`).checked = true;
                }else{
                    document.getElementById(`chk_${label}`).checked = false;
                }
            });
        }
    });
}

function displayResult(displayNum, dataArray, inputText, labels, mode) {
    // ボタンを押したあとの処理をまとめて関数化
    let matchingRows;
    let lemma;
    let hits;
    let confidence;
    let retrieval_num = 0; // 該当した件数
    let hitsAndConfidence;
    let matchingRowsForDisplay;
    try {
        // 入力値と一致する行のフィルタリング（完全一致）
        matchingRows = dataArray.filter(row => row[1] === inputText);
        if(mode == "search"){
            displayNum = 0;
        }else if(mode == "change"){
            displayNum = (displayNum + 1) % matchingRows.length; // 意味表示の行番号を更新
        }
        
        // 表示のために，1列目と3列目だけ残す．加えて，1列目の左側に行番号を追加する
        // 例：['1: 行く V;PRS;IPFV;POT', '2: 来る V;PRS;IPFV;POT']
        lemma = matchingRows[displayNum][0]; // 原形
        lemma_list = matchingRows.map(row => row[0]); // 原形のリスト
        console.log(lemma_list);
        hits = matchingRows[displayNum][3]; // ヒット件数
        confidence = calcConfidence(hits); // ヒット指数
        hitsAndConfidence = `＜検索結果＞\n`;
        //hitsAndConfidence += `ヒット件数: ${num2comma(hits)}，ヒット指数: ${confidence}`;
        hitsAndConfidence += `ヒット指数: ${confidence}`;
        matchingRowsForDisplay = matchingRows.map((row, index) => `${index + 1}: ${row[0]} ${row[2]}`);
        retrieval_num = matchingRows.length;
        let add_message = "";
        if(retrieval_num == 1 && mode == "change"){
            add_message = "　　※他の意味はありません．";
        }
        let message = `「${inputText}」には${retrieval_num}件の意味が存在します．表示中：${(displayNum + 1)} / ${retrieval_num}`;
        document.getElementById("result").innerText = message + "\nLemma: " + lemma + add_message;
    } catch (error){
        document.getElementById("result").innerText = "No match found. 該当する語がありません．他の語を試してみてください．";
        // チェックボックスの状態をリセット
        labels.forEach(label => {
            document.getElementById(`chk_${label}`).checked = false;
            document.getElementById(`chk_${label}`).setAttribute("pattern", "out");
        });
        document.getElementById("resultDisplay").innerText = "検索結果がここに表示されます";
        document.getElementById("relateWords").innerText = "関連語がここに表示されます";
        return 0;
    }

    // 結果の表示
    document.getElementById("resultDisplay").innerText = hitsAndConfidence + "\n" + matchingRowsForDisplay.join('\n');

    // チェックボックスの状態を更新
    const hit_labels = matchingRows[displayNum][2].split(';'); // 例：['V', 'PRS', 'IPFV', 'POT']
    
    // 一旦全てのチェックボックスをOFFにする
    labels.forEach(label => {
        document.getElementById(`chk_${label}`).checked = false;
        document.getElementById(`chk_${label}`).setAttribute("pattern", "out");
    });
    //document.getElementById(`myCheckbox1`).pattern = 'out';
    
    // 一致するラベルのチェックボックスをONにする
    hit_labels.forEach(label => {
        if(label == "IPFV" || label == "PFV" || label == "OPT"){
            return;
        }
        document.getElementById(`chk_${label}`).checked = true;
        document.getElementById(`chk_${label}`).setAttribute("pattern", "in");
    });

    // 関連語（同じラベルを持つ語）の表示（;で区切られたラベルは順不同である）
    const retrievalResult = dataArray.filter(row => row[0] === lemma && 
        row[2].split(';').sort().join(";") === hit_labels.sort().join(";"));
    // retrievalResultを，ヒット指数の降順にソートしてから表示する
    retrievalResult.sort((row1, row2) => row2[3] - row1[3]);
    const relatedWordsForDisplay = retrievalResult.map(row => `${row[1]} (${calcConfidence(row[3])})`);
    //const displayRelated = `＜「${lemma} ${hit_labels}」である語＞\n`;
    const displayRelated = `＜関連語＞\n`;
    document.getElementById('relateWords').innerText = displayRelated + relatedWordsForDisplay.join('\n');
    
    return displayNum;
}



window.onload = async function() {
    // 説明
    //document.getElementById("description").innerText = "語形を入力して「検索」ボタンを押してください．例：走りません，いらっしゃった，食べられる";

    // ファイルのパス
    document.getElementById("result").innerText = "";
    // ローカルにはアクセスできない（セキュリティ上の理由）
    //const filePath = 'file:///Users/~~~/Desktop/~~~/dataset/Japanese.txt';
    const filePath = 'https://raw.githubusercontent.com/cl-tohoku/J-UniMorph/main/jap_with_hits.txt'
    
    // ファイルを読み込み
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error(`Failed to fetch txt file: ${response.status} ${response.statusText}`);
    }
    const csvData = await response.text();
    const lines = csvData.split('\n');
    const dataArray = lines.map(line => line.trim().split('\t'));

    document.getElementById("resultDisplay").innerText = "検索結果がここに表示されます"
    document.getElementById("relateWords").innerText = "関連語がここに表示されます"
    document.getElementById("changedRelateWords").innerText = "検索後にチェックボックスを変更すると，その意味の語形がここに表示されます．"


    // チェックボックスのラベル
    //const labels = ['V', 'PRS', 'IPFV', 'PST', 'PFV', 'POL', 'FOREG', 'NEG', 'PROSP',
    //               'INTEN', 'OPT', '1', '3', 'IMP', 'OBLIG', 'POT', 'PASS', 'CAUS',
    //               'FORM', 'ELEV', 'HUMB', 'PERM', 'COL'];
    const labels = ['V', 'PRS', 'PST', 'POL', 'FOREG', 'NEG', 'PROSP',
                  'INTEN', '1', '3', 'IMP', 'OBLIG', 'POT', 'PASS', 'CAUS',
                  'FORM', 'ELEV', 'HUMB', 'PERM', 'COL'];

    // Tabを押したらテキストボックスにフォーカスする（2回押す必要がある）
    document.getElementById("inputText").addEventListener("keydown", function(e) {
        if (e.key === "Tab") {
            e.preventDefault();
            document.getElementById("inputText").focus();
        }
    });
    
    // Enterキーで検索ボタンを押せるようにする
    document.getElementById("inputText").addEventListener("keypress", function(e) {
        // ただし，入力内容が既存のものと一致していれば「別の意味を表示」ボタンを押したことにする
        if (e.key === "Enter") {
            if (inputText == document.getElementById("inputText").value){
                document.getElementById("changeBtn").click();
            }else{
                document.getElementById("searchBtn").click();
            }
        }
    });

    // 検索ボタンのクリックイベントリスナー
    document.getElementById("searchBtn").addEventListener("click", function() {
        inputText = document.getElementById("inputText").value;
        document.getElementById("result").innerText = "Input text: " + inputText;

        displayNum = displayResult(displayNum, dataArray, inputText, labels, "search");
    });

    // 意味表示切り替えボタンのクリックイベントリスナー
    document.getElementById("changeBtn").addEventListener("click", function() {
        // 仮で，ほぼ上のsearchBtnの処理をコピペしている（displayNumの値を変えるだけ）
        const inputText = document.getElementById("inputText").value;
        document.getElementById("result").innerText = "Input text: " + inputText;

        displayNum = displayResult(displayNum, dataArray, inputText, labels, "change");
    });


    // チェックが変更されたときの処理（例外対応）
    // Vは常にONにする
    document.getElementById("chk_V").addEventListener('change', function() {
        document.getElementById("chk_V").checked = true;
    });
    // PRSがONになったら，PSTとINTENはOFFにする
    checkOnOff("PRS", ["PST", "INTEN"], 1, 0);
    // PSTがONになったら，PRSとINTENはOFFにする
    checkOnOff("PST", ["PRS", "INTEN"], 1, 0);
    // INTENがONになったら，PRSとPSTはOFFにする
    checkOnOff("INTEN", ["PRS", "PST"], 1, 0);
    // ELEVがONになったら，HUMBはOFFにする
    checkOnOff("ELEV", ["HUMB"], 1, 0);
    // HUMBがONになったら，ELEVはOFFに，FORMはONにする
    checkOnOff("HUMB", ["ELEV"], 1, 0);
    checkOnOff("HUMB", ["FORM"], 1, 1);
    // FORMがOFFになったら，ELEVとHUMBはOFFにする
    checkOnOff("FORM", ["ELEV", "HUMB"], 0, 0);
    // FOREGがONになったら，POLはONにする
    checkOnOff("FOREG", ["POL"], 1, 1);
    // POLがOFFになったら，FOREGはOFFにする
    checkOnOff("POL", ["FOREG"], 0, 0);
    // 1がONになったら，3はOFFにする
    checkOnOff("1", ["3"], 1, 0);
    // 3がONになったら，1はOFFにする
    checkOnOff("3", ["1"], 1, 0);


    // チェックボックスの状態が変更された時のイベントリスナー
    labels.forEach(label => {
        document.getElementById(`chk_${label}`).addEventListener('change', function() {
            try {
                lemma = lemma_list[displayNum]; // 原形
                // チェックボックスがONになっているラベルを取得
                const checkedLabels = labels.filter(label => document.getElementById(`chk_${label}`).checked);
                // checkedLabelsに"PRS"が含まれている場合"IPFV"を追加し，"PST"が含まれている場合"PFV"を追加
                if(checkedLabels.includes("PRS")){
                    checkedLabels.push("IPFV");
                }
                if(checkedLabels.includes("PST")){
                    checkedLabels.push("PFV");
                }
                // checkedLabelsに"1"か"3"が含まれている場合"OPT"を追加
                if(checkedLabels.includes("1") || checkedLabels.includes("3")){
                    checkedLabels.push("OPT");
                }
                console.log(checkedLabels);
                const checkedLabelsStr = checkedLabels.join(';');
                // 原形がlemmaで，ラベルがcheckedLabelsと一致する行を取得
                const matchingRows = dataArray.filter(row => row[0] === lemma && 
                    row[2].split(';').sort().join(";") === checkedLabels.sort().join(";"));
                // matchingRowsを，ヒット指数の降順にソートしてから表示する
                matchingRows.sort((row1, row2) => row2[3] - row1[3]);
                const relatedWordsForDisplay = matchingRows.map(row => `${row[1]} (${calcConfidence(row[3])})`);
                let displayRelated = `＜「${lemma} ${checkedLabelsStr}」である語＞\n`;
                if(relatedWordsForDisplay.length == 0){
                    displayRelated += "※該当する語がありません．他のチェックを試してみてください．";
                }
                document.getElementById('changedRelateWords').innerText = displayRelated + relatedWordsForDisplay.join('\n');
            } catch (error){
                document.getElementById('changedRelateWords').innerText = "No match found.";
            }
        });
    });
};
