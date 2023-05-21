wsPort = document.getElementById("wsPort");
wsPassword = document.getElementById("wsPassword");
connectionBtn = document.getElementById("connectionBtn");//別に書かなくてもいいんだけどねっ

connectionBtn.addEventListener("click", async () => {
	await window.electron.connectionOnClick({port:wsPort.value,password:wsPassword.value});//preload.jsの中の関数を呼んで、メインプロセスさんにボタンが押されたことを教えてあげる。
});