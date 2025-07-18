const resumeInfo = [
    { label: "👤 姓名", value: "Chris" },
    { label: "📍 来自", value: "China · Hubei" },
    { label: "💼 职位", value: "前端开发" },
    { label: "📅 工作年限", value: "3 年" },
    {
      label: "🔗 主页",
      value:
        '<a href="https://github.com/chris-g-h/" target="_blank" rel="noopener noreferrer">点击访问</a>',
    },
  ];
  
  const box = document.getElementById("resume-box");
  resumeInfo.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.style.animationDelay = `${0.5 + index * 0.3}s`; // 顺序延迟
    div.innerHTML = `<span class="label">${item.label}:</span><span class="value">${item.value}</span>`;
    box.appendChild(div);
  });
  