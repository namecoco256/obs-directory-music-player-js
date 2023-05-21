
connectionBtn = document.getElementById("connectionBtn");//別に書かなくてもいいんだけどねっ

connectionBtn.addEventListener("click", async () => {
	await window.connectionOnClick();//preload.jsの中の関数を呼んで、メインプロセスさんにボタンが押されたことを教えてあげる。
});