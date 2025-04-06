let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

const params = new URLSearchParams(window.location.search);
let username = params.get("name");

// 限制用户名长度，避免页面样式崩坏
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

// 防止 `null` 变成 `"null"`
if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0; // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
  "是不是点错了？o(╥﹏╥)o",
  "再考虑考虑？",
  "我觉得他可以姐",
  "我呱呱也来为他求求情！",
  "我小白龙来为他求求情！",
  "我做人质，你答应他吧！",
  "我能做饭的~",
  "也能洗衣服~",
  "工资不多~也会上交~",
  "看来还是得使出我的杀手锏~",
  "屏幕是不是不够大了？",
  "拒绝不了我了吧？",
  "还能点到？",
];

// No 按钮点击事件
noButton.addEventListener("click", function () {
  clickCount++;

  // 让 Yes 变大，每次放大 2 倍
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // 挤压 No 按钮，每次右移 50px
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 让图片和文字往上移动
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // No 文案变化（前 13 次变化）
  if (clickCount <= 13) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 图片变化（前 13 次变化）
  if (clickCount === 1) mainImage.src = "images/kelian.png"; // 可怜
  if (clickCount === 2) mainImage.src = "images/kaolv.png"; // 考虑
  if (clickCount === 3) mainImage.src = "images/juju.png"; // 橘橘
  if (clickCount === 4) mainImage.src = "images/guagua.png"; // 呱呱
  if (clickCount === 5) mainImage.src = "images/xiaobailong.png"; // 小白龙
  if (clickCount === 6) mainImage.src = "images/renzhi.png"; // 人质
  if (clickCount === 7) mainImage.src = "images/zuofan.png"; // 做饭
  if (clickCount === 8) mainImage.src = "images/xiyifu.png"; // 洗衣服
  if (clickCount === 9) mainImage.src = "images/gongzi.png"; // 工资
  if (clickCount === 10) mainImage.src = "images/shashou.png"; // 杀手
  if (clickCount === 11) mainImage.src = "images/decheng.png"; // 得逞
  if (clickCount === 12) mainImage.src = "images/crying.png"; // 哭
  if (clickCount >= 13) mainImage.src = "images/crying.png"; // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面
const loveTest = `!!!喜欢你!! ( >᎑<)♡︎ᐝ  ${
  username ? `${safeUsername}  ♡︎ᐝ(>᎑< )` : ""
}`;

yesButton.addEventListener("click", function () {
  // 先创建基础 HTML 结构
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

  // 确保用户名安全地插入
  document.querySelector(".yes-text").innerText = loveTest;

  // 禁止滚动，保持页面美观
  document.body.style.overflow = "hidden";
});
