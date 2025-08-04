const fileNames = [
    "tljd1.36(onLine)-transientHidden.apk",
    "tljd1.36(onLine)-tabbarLogoChange.apk",
    "tljd1.36(onLine)-tabbarButtonShow.apk",
    "tljd1.36(onLine)-logoChange.apk.apk",
    "tljd1.36(onLine)-interfaceOptimize.apk",
    "tljd1.36(onLine)-initTime.apk",
    "tljd1.36(onLine)-ignoreRemind.apk",
    "tljd1.36(onLine)-hiddenChangePassword.apk",
    "tljd1.36(onLine)-endTimeAhead.apk",
    "tljd1.36(4.225)-transientHidden.apk",
    "tljd1.36(4.225)-logoChange.apk",
    "tljd1.36(4.225)-initTime.apk",
    "tljd1.36(1.50)-cancelConvertTime.apk",
    "tljd1.35(onLine)-twoWayControl.apk",
    "tljd1.35(4.225).apk",
    "tljd1.35(4.225)-twoWayControl.apk",
    "tljd1.35(4.225)-resetTypeSetting.apk",
    "tljd1.35(4.225)-detailTask.apk",
    "tljd1.3-onLine.apk",
    "tljd1.3(4.225).apk",
    "tljd1.3(4.225 ).apk",
    "tljd1.2(9.205).apk",
    "tljd1.2(4.225).apk",
    "tljd1.1-onLine.apk",
    "tljd1.1(4.225).apk",
    "tljd1.0-onLine(form).apk",
    "tljd1.0(9.205).apk"
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
  fileNames.forEach(file => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="https://chris-g-h.github.io/chris_resume/downloads/${file}" download>${file}</a>`;
    fileList.appendChild(li);
  });
  downloadList.classList.remove("hidden");
}