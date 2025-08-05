const fileNames = [
  "tljd1.36(onLine)-coverButton.zip",
  "tljd1.36(onLine)-transientHidden.zip",
  "tljd1.36(onLine)-tabbarLogoChange.zip",
  "tljd1.36(onLine)-tabbarButtonShow.zip",
  "tljd1.36(onLine)-logoChange.apk.zip",
  "tljd1.36(onLine)-interfaceOptimize.zip",
  "tljd1.36(onLine)-initTime.zip",
  "tljd1.36(onLine)-ignoreRemind.zip",
  "tljd1.36(onLine)-hiddenChangePassword.zip",
  "tljd1.36(onLine)-endTimeAhead.zip",
  "tljd1.36(4.225)-transientHidden.zip",
  "tljd1.36(4.225)-logoChange.zip",
  "tljd1.36(4.225)-initTime.zip",
  "tljd1.36(1.50)-cancelConvertTime.zip",
  "tljd1.35(onLine)-twoWayControl.zip",
  "tljd1.35(4.225)-twoWayControl.zip",
  "tljd1.35(4.225)-resetTypeSetting.zip",
  "tljd1.35(4.225)-detailTask.zip",
  "tljd1.35(4.225).zip",
  "tljd1.3-onLine.zip",
  "tljd1.3(4.225).zip",
  "tljd1.3(4.225 ).zip",
  "tljd1.2(9.205).zip",
  "tljd1.2(4.225).zip",
  "tljd1.1-onLine.zip",
  "tljd1.1(4.225).zip",
  "tljd1.0-onLine(form).zip",
  "tljd1.0(9.205).zip"
];


// 弹窗相关元素
const modal = document.getElementById("password-modal");
const openBtn = document.getElementById("show-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");
const confirmBtn = document.getElementById("confirm-password-btn");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");
const downloadList = document.getElementById("download-list");
const fileList = document.getElementById("file-list");

// 显示弹窗
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  errorMsg.textContent = "";
  passwordInput.value = "";
  passwordInput.focus();
});

// 关闭弹窗
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// 验证密码
confirmBtn.addEventListener("click", () => {
  const password = passwordInput.value.trim();
  if (password === "yhsoft123") {
    modal.classList.add("hidden");
    renderDownloadList();
  } else {
    errorMsg.textContent = "密码错误，请重试。";
  }
});

// 渲染下载文件列表
function renderDownloadList() {
  fileList.innerHTML = "";
  const downloadUrl =
    "https://chris-g-h.github.io/chris_resume/public/downloads/";
  fileNames.forEach((file) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${downloadUrl}${file}" download>${file}</a>`;
    fileList.appendChild(li);
  });
  downloadList.classList.remove("hidden");
}
