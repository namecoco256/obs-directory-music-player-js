wsPort = document.getElementById("wsPort");
wsPassword = document.getElementById("wsPassword");
connectionBtn = document.getElementById("connectionBtn");//別に書かなくてもいいんだけどねっ
selectDirectoryBtn = document.getElementById("selectDirectoryBtn");
displaySelectedDirectory = document.getElementById("selectedDirectory");

connectionBtn.addEventListener("click", async () => {
	await window.electron.connectionOnClick({port:wsPort.value,password:wsPassword.value});//preload.jsの中の関数を呼んで、メインプロセスさんにボタンが押されたことを教えてあげる。
});

selectDirectoryBtn.addEventListener("click", async () => {
	selectedDirectory = await window.electron.selectDirectoryOnClick(); //selectedDirectoryを{filePaths: "",audioFiles: "",};というかたちで受け取る
	displaySelectedDirectory.innerHTML = selectedDirectory.filePaths;
});