let dataArray;
let inputText;

window.onload = async function() {
    const filePath = 'dataset/Japanese_count.txt';
    document.getElementById("result").innerText = "OK";

    // ファイルを読み込み
    const response = await fetch(filePath);
    if (!response.ok) {
        document.getElementById("result").innerText = "error";
        throw new Error(`Failed to fetch txt file: ${response.status} ${response.statusText}`);
    }
    document.getElementById("result").innerText = "OK";
    const csvData = await response.text();
    const lines = csvData.split('\n'); // 改行で区切る
    dataArray = lines.map((line) => line.trim().split('\t'));

    // 検索ボタンが押されたときの処理
    document.getElementById("searchBtn").addEventListener("click", function() {
        inputText = document.getElementById("inputText").value;
        document.getElementById("result").innerText = "入力されたテキスト: " + inputText;

        const matchingRows = dataArray.filter(row => row[1] === inputText);
        document.getElementById("resultDisplay").innerText = matchingRows.map(row => row.join('\t')).join('\n');
    });
};


window.onload = function() {
    var elements = ['V', 'PRS', 'IPFV', 'PST', 'PFV', 'POL', 'FOREG', 'NEG', 'PROSP', 'INTEN', 'OPT',
                    '1', '3', 'IMP', 'OBLIG', 'POT', 'PASS', 'CAUS', 'FORM', 'ELEV', 'HUMB', 'PERM', 'COL'];

    // 指定された要素のリストに対応するチェックボックスを生成する
    for (var i = 0; i < elements.length; i++) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check_' + elements[i];
        document.body.appendChild(checkbox); // チェックボックスをページに追加

        var label = document.createElement('label');
        label.htmlFor = 'check_' + elements[i];
        label.appendChild(document.createTextNode(elements[i])); // ラベルを作成してテキストを追加
        document.body.appendChild(label); // ラベルをページに追加

        // 改行
        document.body.appendChild(document.createElement("br"));
    }
};

// 検索ボタンが押された時の処理
document.getElementById("searchBtn").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    document.getElementById("result").innerText = "入力されたテキスト: " + inputText + String(dataArray.length);

    const matchingRows = dataArray.filter(row => row[1] === inputText);
    document.getElementById("resultDisplay").innerText = matchingRows.join('\n');

});

