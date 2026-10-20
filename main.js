// ARL - Applied Robotic Lab Interactive Experience
// Happy Women's Day 20/10 Special Edition (Cybernetics & Florals)

const ARL_WISHES = [
  "Nhân ngày Phụ nữ Việt Nam 20/10, đại gia đình Applied Robotic Lab (ARL) xin gửi tới bạn lời chúc ngập tràn niềm vui, nụ cười rạng rỡ và nguồn năng lượng tích cực nhất! Cảm ơn bạn vì đã luôn là nguồn cảm hứng thông tuệ, kiên định và rực rỡ trong học tập, nghiên cứu và cuộc sống! 💐🤖",
  "Chúc 'bóng hồng' tuyệt vời của ARL luôn xinh đẹp như những cánh hoa nở rộ, thông minh và sắc bén như những dòng thuật toán tối ưu, và luôn giữ trọn ngọn lửa đam mê để vươn tới mọi đỉnh cao công nghệ! ✨💻",
  "Người ta bảo dân kỹ thuật khô khan, nhưng với ARL, các bạn nữ chính là nốt nhạc ngọt ngào nhất giữa muôn vàn mạch điện và dòng code. Chúc bạn một ngày thật hạnh phúc, nhận được thật nhiều hoa, quà và những lời yêu thương chân thành nhất! 🌸❤️",
  "Chúc bạn có một ngày lễ thật ý nghĩa: Bug thì tự fix, code chạy mượt mà không warning, đồ án và nghiên cứu luôn đạt điểm tuyệt đối, và quan trọng nhất là mỗi ngày trôi qua đều ngập tràn niềm vui và bình yên! 🚀🌟",
  "Gửi tới người phụ nữ tài năng và kiên cường: Mong bạn luôn tự tin vào giá trị của chính mình. Dù ở phòng lab nghiên cứu hay ngoài cuộc sống, bạn luôn là phiên bản độc nhất vô nhị, đáng trân quý và yêu thương! 🌹✨"
];

const CYBER_CODE_SNIPPETS = [
  {
    lang: "Python",
    tag: "PY",
    badgeClass: "badge-python",
    preview: "she.happiness += ∞",
    title: "arl_ai_core/celebrate_2010.py",
    code: `# Applied Robotic Lab // AI & Deep Learning Core
import torch
import arl_robotics as arl

def celebrate_women_day():
    women = arl.get_members(gender="female")
    for woman in women:
        woman.happiness = float('inf')
        woman.beauty.requires_grad = False  # Vẻ đẹp tự nhiên không cần tối ưu
        woman.confidence += 100
        print(f"💐 [20/10] Chúc {woman.name} luôn rạng rỡ và thành công rực rỡ!")
        arl.robot.deliver_rose(woman)

if __name__ == "__main__":
    celebrate_women_day()`,
    output: `>> [ARL-SYSTEM]: Initializing Neural Affection Network...
>> Model Status: 100% Convergence. Loss = 0.000.
>> Detected: ∞ nụ cười rạng ngời từ phái đẹp ARL & Greenwich!
>> Robot ARL đang cúi chào và trao gửi ngàn đóa hoa rực rỡ nhất! 💐🤖`
  },
  {
    lang: "ROS 2",
    tag: "ROS",
    badgeClass: "badge-cpp",
    preview: "publish<Love>(2010)",
    title: "arl_ros2_ws/src/celebrate_node.cpp",
    code: `// ROS 2 Humble // Autonomous Systems Lab
#include <rclcpp/rclcpp.hpp>
#include <arl_msgs/msg/women_day.hpp>

class ARLCelebrationNode : public rclcpp::Node {
public:
  ARLCelebrationNode() : Node("arl_women_day_2010") {
    publisher_ = this->create_publisher<arl_msgs::msg::WomenDay>("/arl/love", 100);
    auto msg = arl_msgs::msg::WomenDay();
    msg.date = "20/10/2026";
    msg.wishes = "Chúc toàn thể phái đẹp ARL vạn dặm bình an, nghiên cứu xuất sắc!";
    publisher_->publish(msg);
    RCLCPP_INFO(this->get_logger(), "Packet 20/10 Delivered Successfully! ❤️");
  }
};`,
    output: `[INFO] [arl_women_day_2010]: Spinning ROS 2 node across all Lab actuators...
[INFO] Actuator Servo: Góc quay 360° ôm trọn niềm vui và nụ cười.
[INFO] Status: QoS Best-Effort -> Guaranteed 100% Hạnh Phúc! 🌸`
  },
  {
    lang: "Rust",
    tag: "RS",
    badgeClass: "badge-rust",
    preview: "happy::<2010>()",
    title: "arl_kernel/src/wishes_safe.rs",
    code: `// Memory-safe, concurrency-proof unconditional love
use arl_lab::{Woman, Robotics, Blessing};

pub fn radiate_wishes() -> Result<(), Blessing> {
    let female_engineers = Woman::query_lab("ARL_Greenwich");
    for engineer in female_engineers {
        engineer.shine(Inspiration::Maximum);
        println!("🦀 [Rust Core]: Chúc bạn 20/10 không panic, chỉ có niềm vui!");
    }
    Ok(())
}`,
    output: `Compiling arl_kernel v20.10.0 (release [optimized])
Running target/release/wishes_safe:
>> Zero memory leaks. Zero runtime errors.
>> 100% tình cảm chân thành và sự trân trọng từ đại gia đình ARL! ✨`
  },
  {
    lang: "x86 ASM",
    tag: "ASM",
    badgeClass: "badge-asm",
    preview: "MOV JOY, 2010h",
    title: "arl_low_level/firmware_2010.asm",
    code: `; Low-level Hardware Firmware // ARL Robot Brain
section .text
global _start
_start:
    MOV RAX, 0x20_10_2026     ; Date: Vietnamese Women's Day
    MOV RBX, INFINITE_SMILES  ; Register RBX = Joy
    MOV RDX, ARL_RESPECT      ; Deep admiration for our women
    CALL ACTUATE_ROBOT_FLOWER ; Trigger physical flower mechanism
    SYSCALL                   ; Deliver happiness directly`,
    output: `REGISTER RAX = 0x2010 (HAPPY VIETNAMESE WOMEN'S DAY)
CPU INTERRUPT 0x80: Mọi chip vi xử lý của ARL đồng loạt thắp sáng đèn led trái tim! 💖`
  },
  {
    lang: "MCU C",
    tag: "MCU",
    badgeClass: "badge-binary",
    preview: "analogWrite(LOVE)",
    title: "arl_mcu/motor_control_2010.ino",
    code: `// Arduino / ESP32 Hardware Lab
const int PIN_LOVE = 10;
const int PIN_SMILE = 20;

void setup() {
  Serial.begin(115200);
  pinMode(PIN_LOVE, OUTPUT);
  pinMode(PIN_SMILE, OUTPUT);
}

void loop() {
  analogWrite(PIN_LOVE, 255);    // 100% Duty Cycle
  digitalWrite(PIN_SMILE, HIGH);  // Tràn ngập nụ cười
  Serial.println("[ARL-MCU] Chúc mừng ngày 20/10 rực rỡ nhất! 🌹");
  delay(2010);
}`,
    output: `[UART 115200] Hardware Diagnostic: OK.
PWM Signal: Frequency 20.10 kHz | Duty Cycle = 100%.
Điện thế yêu thương: VCC = 5.0V không sụt áp! ⚡`
  },
  {
    lang: "SQL",
    tag: "SQL",
    badgeClass: "badge-js",
    preview: "SELECT * FROM Love",
    title: "arl_db/wishes_query.sql",
    code: `-- ARL Database Query
SELECT 
    name, 
    'Xinh Đẹp & Thông Tuệ' AS status, 
    '20/10/2026' AS special_occasion,
    'Hạnh Phúc Vô Cực' AS wish
FROM Greenwich_ARL_Lab
WHERE role = 'Female_Researcher'
ORDER BY radiant_smile DESC;`,
    output: `Query executed successfully in 0.002s.
Rows returned: All wonderful women in ARL!
Database Note: Dữ liệu đã được lưu trữ vĩnh viễn trong trái tim ARL! 🌸`
  }
];

let currentWishIndex = 0;
let currentCodeIndex = 0;
let isARLInitialized = false;

function initializeARL() {
  if (isARLInitialized) return;
  isARLInitialized = true;

  // 1. Initial Bloom Animation Trigger
  document.body.classList.remove("not-loaded");
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 300);

  // 2. Safely initialize each module
  try { initParticles(); } catch (e) { console.warn("Particles init:", e); }
  try { setupModal(); } catch (e) { console.warn("Modal init:", e); }
  try { setupAudio(); } catch (e) { console.warn("Audio init:", e); }
  try { setupFlowerRain(); } catch (e) { console.warn("Rain init:", e); }
  try { setupPanelToggle(); } catch (e) { console.warn("Toggle init:", e); }
  try { setupFloatingCodeSystem(); } catch (e) { console.warn("Code init:", e); }
  try { setupFacebookPageLink(); } catch (e) { console.warn("FB link init:", e); }

  // Periodic subtle petal & wish banner drop
  setInterval(() => {
    try { createPetal(); } catch(e) {}
  }, 3500);

  setInterval(() => {
    try { createWishBanner(); } catch(e) {}
  }, 12000);
}

// Mobile and readyState aware bootstrapper (guaranteed single run via isARLInitialized)
if (document.readyState === "complete" || document.readyState === "interactive") {
  initializeARL();
} else {
  document.addEventListener("DOMContentLoaded", initializeARL);
  window.addEventListener("load", initializeARL);
}

/* ==========================================================================
   HEADER PANEL TOGGLE (ZEN VIEW)
   ========================================================================== */
function setupPanelToggle() {
  const header = document.getElementById("arl-header");
  const toggleBtn = document.getElementById("toggle-panel-btn");
  const floatingBtn = document.getElementById("floating-open-btn");

  function toggleHeader(show) {
    if (show) {
      header.classList.remove("minimized");
      floatingBtn.classList.remove("show");
    } else {
      header.classList.add("minimized");
      floatingBtn.classList.add("show");
      showToast("🌸 Đã thu gọn panel để ngắm trọn hoa!");
    }
  }

  toggleBtn?.addEventListener("click", () => toggleHeader(false));
  floatingBtn?.addEventListener("click", () => toggleHeader(true));
}

/* ==========================================================================
   WISHING MODAL LOGIC
   ========================================================================== */
function setupModal() {
  const modalOverlay = document.getElementById("wishes-modal");
  const openBtn = document.getElementById("open-wishes-btn");
  const closeBtn = document.getElementById("modal-close-btn");
  const nextWishBtn = document.getElementById("next-wish-btn");
  const copyBtn = document.getElementById("copy-wish-btn");
  const nameInput = document.getElementById("recipient-name");
  const applyNameBtn = document.getElementById("apply-name-btn");
  const displayName = document.getElementById("display-name");
  const wishTextEl = document.getElementById("typewriter-wish");

  function openModal() {
    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    triggerPetalBurst(15);
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
  }

  openBtn?.addEventListener("click", openModal);
  closeBtn?.addEventListener("click", closeModal);

  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Apply Recipient Name
  function updateRecipientName() {
    const val = nameInput.value.trim();
    if (val) {
      displayName.textContent = val;
      showToast(`Đã cập nhật lời chúc cho ${val}! ✨`);
    } else {
      displayName.textContent = "Bóng Hồng ARL";
    }
  }

  applyNameBtn?.addEventListener("click", updateRecipientName);
  nameInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") updateRecipientName();
  });

  // Next Wish
  nextWishBtn?.addEventListener("click", () => {
    currentWishIndex = (currentWishIndex + 1) % ARL_WISHES.length;
    animateWishText(wishTextEl, ARL_WISHES[currentWishIndex]);
  });

  // Copy Wish as High-Resolution Rendered Greeting Card Image
  // Copy Wish as High-Resolution Rendered PNG Image (for instant pasting) + Silent Background Animated GIF Download
  let isGeneratingCard = false;
  copyBtn?.addEventListener("click", async () => {
    if (isGeneratingCard) return;
    isGeneratingCard = true;
    const rName = displayName.textContent.trim() || "Bóng Hồng ARL";
    const wText = wishTextEl.textContent.trim();
    showToast("⏳ Đang sao chép hình & tạo GIF mở thiệp...");

    try {
      // 1. Generate crisp 720x720 PNG card immediately (< 20ms) for clipboard
      const pngBlob = await generateCardPngBlob(rName, wText);
      let copiedImageToClipboard = false;

      // 2. Write PNG image to clipboard immediately within user gesture window
      if (navigator.clipboard && window.ClipboardItem) {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": pngBlob })
          ]);
          copiedImageToClipboard = true;
        } catch (clipErr) {
          console.warn("Clipboard image write not permitted by browser:", clipErr);
        }
      }

      // Fallback text copy if image clipboard was blocked (e.g. strict in-app browsers)
      if (!copiedImageToClipboard && navigator.clipboard?.writeText) {
        const textFallback = `🌸 CHÚC MỪNG 20/10 - APPLIED ROBOTIC LAB (ARL) 🌸\nThân gửi: ${rName}\n\n"${wText}"\n\n— Trân trọng, Applied Robotic Lab (ARL) ❤️🤖\nhttps://dghung23.github.io/Woman_Day_web`;
        navigator.clipboard.writeText(textFallback).catch(() => {});
      }

      // 3. Generate smooth 720x720 Animated Opening Envelope GIF in background and auto-download
      try {
        const gifBlob = await generateOpeningCardGifBlob(rName, wText);
        const gifUrl = URL.createObjectURL(gifBlob);
        const downloadLink = document.createElement("a");
        downloadLink.style.display = "none";
        const cleanName = rName.replace(/[^\w\s\u00C0-\u1EF9]/gi, "").replace(/\s+/g, "_");
        downloadLink.download = `ARL_Thiep_20_10_MoThiep_${cleanName || "Chuc_Mung"}.gif`;
        downloadLink.href = gifUrl;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        setTimeout(() => {
          downloadLink.remove();
          URL.revokeObjectURL(gifUrl);
        }, 15000);
      } catch (gifErr) {
        console.warn("GIF generation error:", gifErr);
        // Fallback to downloading the PNG card if GIF encoder failed
        const pngUrl = URL.createObjectURL(pngBlob);
        const downloadLink = document.createElement("a");
        downloadLink.style.display = "none";
        const cleanName = rName.replace(/[^\w\s\u00C0-\u1EF9]/gi, "").replace(/\s+/g, "_");
        downloadLink.download = `ARL_Thiep_20_10_${cleanName || "Chuc_Mung"}.png`;
        downloadLink.href = pngUrl;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        setTimeout(() => {
          downloadLink.remove();
          URL.revokeObjectURL(pngUrl);
        }, 15000);
      }

      if (copiedImageToClipboard) {
        showToast("🎁 Đã sao chép hình thiệp (Dán / Ctrl+V ngay) & tải ngầm GIF mở thiệp! 🌸");
      } else {
        showToast("🎁 Đã tải ngầm GIF mở thiệp & sao chép lời chúc về máy! 🌸");
      }
    } catch (err) {
      console.error("Render card error:", err);
      const textFallback = `Thân gửi ${rName},\n\n${wText}\n\n— Trân trọng, Applied Robotic Lab (ARL) ❤️🤖`;
      navigator.clipboard?.writeText(textFallback).then(() => {
        showToast("Đã sao chép lời chúc vào bộ nhớ tạm! 📋");
      }).catch(() => {
        showToast("Đã chọn lời chúc! ✨");
      });
    } finally {
      isGeneratingCard = false;
    }
  });
}

/* ==========================================================================
   CANVAS GREETING CARD GENERATOR (HIGH-RES 1080x1080 IMAGE)
   ========================================================================== */
function generateWishCardBlob(recipientName, wishText) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");

    // Helper: Draw rounded rectangle
    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    // 1. Deep Celestial Background
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1080);
    bgGrad.addColorStop(0, "#0c1224");
    bgGrad.addColorStop(0.45, "#1b1433");
    bgGrad.addColorStop(1, "#280f27");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1080);

    // 2. Soft Center Romantic Glow
    const radGlow = ctx.createRadialGradient(540, 520, 60, 540, 520, 500);
    radGlow.addColorStop(0, "rgba(236, 72, 153, 0.22)");
    radGlow.addColorStop(0.55, "rgba(0, 210, 255, 0.08)");
    radGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = radGlow;
    ctx.fillRect(0, 0, 1080, 1080);

    // 3. Starlight / Sparkles
    ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    const stars = [
      [120, 140, 2.5], [920, 160, 3], [160, 890, 2], [880, 910, 3],
      [110, 520, 2], [960, 560, 2.5], [260, 220, 1.8], [780, 240, 2.2],
      [320, 940, 2], [740, 930, 2.5], [190, 380, 2.5], [890, 420, 2.2]
    ];
    stars.forEach(([sx, sy, sr]) => {
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    });

    // 4. Double Cyber-Floral Border
    ctx.strokeStyle = "rgba(0, 210, 255, 0.4)";
    ctx.lineWidth = 3;
    roundRect(38, 38, 1004, 1004, 28);
    ctx.stroke();

    ctx.strokeStyle = "rgba(236, 72, 153, 0.45)";
    ctx.lineWidth = 1.5;
    roundRect(50, 50, 980, 980, 22);
    ctx.stroke();

    // 5. Header Pill Badge
    ctx.fillStyle = "rgba(0, 210, 255, 0.12)";
    roundRect(360, 75, 360, 44, 22);
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 210, 255, 0.5)";
    ctx.lineWidth = 1.5;
    roundRect(360, 75, 360, 44, 22);
    ctx.stroke();

    ctx.fillStyle = "#00d2ff";
    ctx.font = "bold 15px 'Montserrat', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("APPLIED ROBOTIC LAB (ARL)", 540, 103);

    // 6. Header Titles
    ctx.fillStyle = "#ffd166";
    ctx.font = "bold 28px 'Montserrat', sans-serif";
    ctx.fillText("CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM", 540, 168);

    const titleGrad = ctx.createLinearGradient(380, 0, 700, 0);
    titleGrad.addColorStop(0, "#ff7eb3");
    titleGrad.addColorStop(0.5, "#ff4b8b");
    titleGrad.addColorStop(1, "#00d2ff");
    ctx.fillStyle = titleGrad;
    ctx.font = "bold 44px 'Montserrat', sans-serif";
    ctx.fillText("20 THÁNG 10", 540, 226);

    // Divider
    ctx.fillStyle = "#ff7eb3";
    ctx.font = "20px sans-serif";
    ctx.fillText("─── 🌸 ✨ 🌸 ───", 540, 265);

    // 7. Recipient Pill
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    roundRect(260, 298, 560, 56, 28);
    ctx.fill();
    ctx.strokeStyle = "rgba(236, 72, 153, 0.6)";
    ctx.lineWidth = 2;
    roundRect(260, 298, 560, 56, 28);
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 25px 'Montserrat', sans-serif";
    ctx.fillText(`Thân gửi: ${recipientName} 💖`, 540, 336);

    // 8. Main Wish Content Container Box
    const boxX = 90;
    const boxY = 385;
    const boxW = 900;
    const boxH = 490;
    ctx.fillStyle = "rgba(10, 18, 36, 0.88)";
    roundRect(boxX, boxY, boxW, boxH, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 210, 255, 0.28)";
    ctx.lineWidth = 2;
    roundRect(boxX, boxY, boxW, boxH, 24);
    ctx.stroke();

    // Decorative quotation marks
    ctx.fillStyle = "rgba(236, 72, 153, 0.35)";
    ctx.font = "bold 70px serif";
    ctx.fillText("“", boxX + 50, boxY + 70);
    ctx.fillText("”", boxX + boxW - 50, boxY + boxH - 25);

    // 9. Wrapped Wish Message
    ctx.fillStyle = "#f8fafc";
    ctx.font = "25px 'Montserrat', sans-serif";
    ctx.textAlign = "center";
    const maxWidth = 760;
    const lineHeight = 44;

    const words = wishText.split(/\s+/);
    const lines = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);

    // Center lines vertically within message area
    const totalTextHeight = lines.length * lineHeight;
    let textStartY = boxY + 80 + Math.max(0, (230 - totalTextHeight) / 2);
    lines.forEach((line) => {
      ctx.fillText(line, 540, textStartY);
      textStartY += lineHeight;
    });

    // Signature inside box
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "italic 20px 'Montserrat', sans-serif";
    ctx.fillText("— Trân trọng từ Applied Robotic Lab (ARL) ❤️🤖", 540, boxY + boxH - 85);

    // Cyber code snippet
    ctx.fillStyle = "#38bdf8";
    ctx.font = "16px 'Courier New', monospace";
    ctx.fillText("while (alive) { happiness += 1; love += Infinity; }", 540, boxY + boxH - 42);

    // 10. Footer Website
    ctx.fillStyle = "#94a3b8";
    ctx.font = "15px 'Montserrat', sans-serif";
    ctx.fillText("🌸 https://dghung23.github.io/Woman_Day_web 🌸", 540, 945);

    canvas.toBlob((blob) => {
      resolve(blob);
    }, "image/png");
  });
}

/* ==========================================================================
   HIGH-RESOLUTION GREETING CARD PNG GENERATOR (720x720) FOR INSTANT CLIPBOARD
   ========================================================================== */
function generateCardPngBlob(recipientName, wishText) {
  return new Promise((resolve) => {
    const width = 720;
    const height = 720;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    function drawSparkle(ctx, x, y, size, color, rot = 0) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
        ctx.lineTo(Math.cos(((i + 0.5) * Math.PI) / 2) * (size * 0.28), Math.sin(((i + 0.5) * Math.PI) / 2) * (size * 0.28));
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // 1. Soft bright feminine pink background
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, "#fff5f8");
    bgGrad.addColorStop(0.35, "#ffe4ec");
    bgGrad.addColorStop(0.7, "#fce7f3");
    bgGrad.addColorStop(1, "#f9a8d4");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Center radiant glow
    const glow = ctx.createRadialGradient(360, 360, 40, 360, 360, 350);
    glow.addColorStop(0, "rgba(255, 255, 255, 0.85)");
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    // Top banner
    ctx.fillStyle = "#be185d";
    ctx.font = "bold 13px 'Montserrat', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("APPLIED ROBOTIC LAB (ARL) • 20/10/2026", 360, 28);

    // 2. Pure White Greeting Card
    const cx = 35, cy = 40, cw = 650, ch = 640;
    ctx.fillStyle = "#ffffff";
    roundRect(ctx, cx, cy, cw, ch, 24);
    ctx.fill();

    // Solid outer rose border
    ctx.strokeStyle = "#f472b6";
    ctx.lineWidth = 4;
    roundRect(ctx, cx, cy, cw, ch, 24);
    ctx.stroke();

    // Inner delicate accent border
    ctx.strokeStyle = "#fda4af";
    ctx.lineWidth = 2;
    roundRect(ctx, cx + 8, cy + 8, cw - 16, ch - 16, 18);
    ctx.stroke();

    // Header badge
    const pillW = 320, pillH = 34, pillX = cx + (cw - pillW) / 2, pillY = cy + 22;
    ctx.fillStyle = "#fff1f5";
    roundRect(ctx, pillX, pillY, pillW, pillH, 17);
    ctx.fill();
    ctx.strokeStyle = "#f472b6";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#9d174d";
    ctx.font = "bold 13.5px 'Montserrat', sans-serif";
    ctx.fillText("APPLIED ROBOTIC LAB (ARL)", cx + cw / 2, pillY + 22);

    // Main Titles
    ctx.fillStyle = "#831843";
    ctx.font = "bold 18px 'Montserrat', sans-serif";
    ctx.fillText("CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM", cx + cw / 2, cy + 88);

    ctx.fillStyle = "#e11d48";
    ctx.font = "bold 32px 'Montserrat', sans-serif";
    ctx.fillText("20 THÁNG 10", cx + cw / 2, cy + 126);

    ctx.fillStyle = "#f472b6";
    ctx.font = "15px sans-serif";
    ctx.fillText("─── 🌸 ✨ 💖 ✨ 🌸 ───", cx + cw / 2, cy + 152);

    // Recipient Pill
    const rPillW = 440, rPillH = 44, rPillX = cx + (cw - rPillW) / 2, rPillY = cy + 170;
    ctx.fillStyle = "#fff1f2";
    roundRect(ctx, rPillX, rPillY, rPillW, rPillH, 22);
    ctx.fill();
    ctx.strokeStyle = "#e11d48";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = "#9f1239";
    ctx.font = "bold 20px 'Montserrat', sans-serif";
    ctx.fillText("Thân gửi: " + recipientName + " 💖", cx + cw / 2, rPillY + 29);

    // Wish Box
    const boxX = cx + 22, boxY = cy + 230, boxW = cw - 44, boxH = ch - 330;
    ctx.fillStyle = "#fafaf9";
    roundRect(ctx, boxX, boxY, boxW, boxH, 16);
    ctx.fill();
    ctx.strokeStyle = "#fcd34d";
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // Quotation marks
    ctx.fillStyle = "rgba(244, 114, 182, 0.45)";
    ctx.font = "bold 46px serif";
    ctx.fillText("“", boxX + 28, boxY + 42);
    ctx.fillText("”", boxX + boxW - 28, boxY + boxH - 12);

    // Text wrapping
    ctx.fillStyle = "#1e293b";
    ctx.font = "16.5px 'Montserrat', sans-serif";
    const maxTextW = boxW - 56;
    const lineHeight = 25;
    const words = wishText.split(/\s+/);
    const lines = [];
    let curr = "";
    for (let i = 0; i < words.length; i++) {
      const test = curr ? curr + " " + words[i] : words[i];
      if (ctx.measureText(test).width > maxTextW && curr) {
        lines.push(curr);
        curr = words[i];
      } else {
        curr = test;
      }
    }
    if (curr) lines.push(curr);

    const totalH = lines.length * lineHeight;
    let startY = boxY + 38 + Math.max(0, (boxH - 60 - totalH) / 2);
    lines.forEach(line => {
      ctx.fillText(line, cx + cw / 2, startY);
      startY += lineHeight;
    });

    // Signature
    ctx.fillStyle = "#475569";
    ctx.font = "italic 14.5px 'Montserrat', sans-serif";
    ctx.fillText("— Trân trọng, Applied Robotic Lab (ARL) ❤️🤖", cx + cw / 2, cy + ch - 68);

    ctx.fillStyle = "#0284c7";
    ctx.font = "bold 13px 'Courier New', monospace";
    ctx.fillText("while (alive) { happiness++; love = ∞; }", cx + cw / 2, cy + ch - 44);

    ctx.fillStyle = "#64748b";
    ctx.font = "11.5px 'Montserrat', sans-serif";
    ctx.fillText("🌸 https://dghung23.github.io/Woman_Day_web 🌸", cx + cw / 2, cy + ch - 20);

    drawSparkle(ctx, 60, 65, 16, "#ffffff", 0.2);
    drawSparkle(ctx, 660, 75, 18, "#fef08a", 0.5);

    canvas.toBlob((blob) => {
      resolve(blob);
    }, "image/png");
  });
}

/* ==========================================================================
   SMOOTH & SHARP ANIMATED OPENING ENVELOPE GIF GENERATOR (720x720)
   ========================================================================== */
function generateOpeningCardGifBlob(recipientName, wishText) {
  return new Promise((resolve, reject) => {
    try {
      const gifModule = window.gifenc || (typeof GIFEncoder !== "undefined" ? { GIFEncoder, quantize, applyPalette } : null);
      if (!gifModule || !gifModule.GIFEncoder) {
        throw new Error("GIFEncoder not loaded");
      }

      const { GIFEncoder, quantize, applyPalette } = gifModule;
      const width = 720;
      const height = 720;
      const gif = GIFEncoder();

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      function roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      }

      function drawSparkle(ctx, x, y, size, color, rot = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
          ctx.lineTo(Math.cos(((i + 0.5) * Math.PI) / 2) * (size * 0.28), Math.sin(((i + 0.5) * Math.PI) / 2) * (size * 0.28));
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      function drawHeart(ctx, x, y, size, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = color;
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
        ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 2, 0, size);
        ctx.bezierCurveTo(0, (size + topCurveHeight) / 2, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
        ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      function drawPetal(ctx, x, y, size, angle, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.bezierCurveTo(size * 0.8, -size * 0.8, size * 0.7, size * 0.6, 0, size);
        ctx.bezierCurveTo(-size * 0.7, size * 0.6, -size * 0.8, -size * 0.8, 0, -size);
        ctx.fill();
        ctx.restore();
      }

      const petals = [
        { x: 70, y: 80, s: 16, a: 0.3, sp: 2 },
        { x: 160, y: 190, s: 14, a: 0.9, sp: 2.4 },
        { x: 620, y: 110, s: 18, a: -0.5, sp: 1.8 },
        { x: 580, y: 280, s: 15, a: 1.3, sp: 2.2 },
        { x: 90, y: 480, s: 17, a: -0.7, sp: 2 },
        { x: 640, y: 560, s: 14, a: 0.6, sp: 2.3 },
        { x: 340, y: 70, s: 13, a: 0.1, sp: 1.6 },
        { x: 490, y: 620, s: 16, a: -0.8, sp: 2.1 }
      ];

      const sparkles = [
        [80, 240, 10, "#fef08a"],
        [640, 200, 12, "#ffffff"],
        [100, 600, 9, "#ffffff"],
        [610, 460, 11, "#fef08a"],
        [360, 90, 13, "#ffffff"]
      ];

      function drawBg(fIdx) {
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, "#fff5f8");
        bgGrad.addColorStop(0.35, "#ffe4ec");
        bgGrad.addColorStop(0.7, "#fce7f3");
        bgGrad.addColorStop(1, "#f9a8d4");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        const glow = ctx.createRadialGradient(360, 360, 40, 360, 360, 350);
        glow.addColorStop(0, "rgba(255, 255, 255, 0.85)");
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);

        // Top banner
        ctx.fillStyle = "#be185d";
        ctx.font = "bold 13px 'Montserrat', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("APPLIED ROBOTIC LAB (ARL) • 20/10/2026", 360, 28);

        petals.forEach((p, idx) => {
          const curY = (p.y + fIdx * p.sp * 4) % (height + 30);
          const curA = p.a + fIdx * 0.08;
          drawPetal(ctx, p.x, curY, p.s, curA, "rgba(244, 114, 182, 0.75)");
        });

        sparkles.forEach(([sx, sy, ss, sc], idx) => {
          const pulse = ss + Math.sin(fIdx * 0.5 + idx) * 2.5;
          drawSparkle(ctx, sx, sy, Math.max(3, pulse), sc, fIdx * 0.1 + idx);
        });
      }

      function drawEnvelope(flapProgress, sealAlpha) {
        const envW = 460;
        const envH = 280;
        const envX = 130;
        const envY = 360;

        // Envelope back
        ctx.fillStyle = "#ffe4ec";
        roundRect(ctx, envX, envY, envW, envH, 20);
        ctx.fill();
        ctx.strokeStyle = "#f472b6";
        ctx.lineWidth = 3.5;
        ctx.stroke();

        // Inner liner
        ctx.fillStyle = "#fff0f5";
        roundRect(ctx, envX + 8, envY + 8, envW - 16, envH - 16, 16);
        ctx.fill();

        // Flap
        if (flapProgress < 1) {
          const peakY = (envY + 160) - flapProgress * 160;
          ctx.beginPath();
          ctx.moveTo(envX, envY);
          ctx.lineTo(envX + envW, envY);
          ctx.lineTo(envX + envW / 2, peakY);
          ctx.closePath();
          ctx.fillStyle = "#fff5f8";
          ctx.fill();
          ctx.strokeStyle = "#f472b6";
          ctx.lineWidth = 3.5;
          ctx.stroke();

          // Luxury Wax Seal
          if (sealAlpha > 0) {
            ctx.save();
            ctx.globalAlpha = sealAlpha;
            ctx.fillStyle = "#fef08a";
            ctx.strokeStyle = "#d97706";
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(envX + envW / 2, peakY - 18, 22, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#e11d48";
            ctx.beginPath();
            ctx.arc(envX + envW / 2, peakY - 18, 17, 0, Math.PI * 2);
            ctx.fill();

            drawHeart(ctx, envX + envW / 2, peakY - 26, 22, "#ffffff");
            ctx.restore();
          }

          if (flapProgress > 0.15 && flapProgress < 0.75) {
            for (let i = 0; i < 8; i++) {
              const ang = (i * Math.PI) / 4;
              const dist = 24 + flapProgress * 30;
              drawSparkle(ctx, envX + envW / 2 + Math.cos(ang) * dist, peakY + Math.sin(ang) * dist, 4, "#fef08a", i);
            }
          }
        } else {
          // Flap folded up behind card
          const peakY = envY - (flapProgress - 1) * 150;
          ctx.beginPath();
          ctx.moveTo(envX, envY);
          ctx.lineTo(envX + envW, envY);
          ctx.lineTo(envX + envW / 2, peakY);
          ctx.closePath();
          ctx.fillStyle = "#fed7e2";
          ctx.fill();
          ctx.strokeStyle = "#f472b6";
          ctx.lineWidth = 3.5;
          ctx.stroke();
        }
      }

      function drawPocket(envAlpha = 1) {
        if (envAlpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = envAlpha;
        const envW = 460;
        const envH = 280;
        const envX = 130;
        const envY = 360;

        // Front left
        ctx.beginPath();
        ctx.moveTo(envX, envY);
        ctx.lineTo(envX, envY + envH);
        ctx.lineTo(envX + envW / 2, envY + 160);
        ctx.closePath();
        ctx.fillStyle = "#fff5f8";
        ctx.fill();
        ctx.strokeStyle = "#fbcfe8";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Front right
        ctx.beginPath();
        ctx.moveTo(envX + envW, envY);
        ctx.lineTo(envX + envW, envY + envH);
        ctx.lineTo(envX + envW / 2, envY + 160);
        ctx.closePath();
        ctx.fillStyle = "#fff0f5";
        ctx.fill();
        ctx.strokeStyle = "#fbcfe8";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Front bottom
        ctx.beginPath();
        ctx.moveTo(envX, envY + envH);
        ctx.lineTo(envX + envW, envY + envH);
        ctx.lineTo(envX + envW / 2, envY + 145);
        ctx.closePath();
        ctx.fillStyle = "#fff5f8";
        ctx.fill();
        ctx.strokeStyle = "#f472b6";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.restore();
      }

      function drawCard(cx, cy, cw, ch, rName, wText) {
        // Pure White Card
        ctx.fillStyle = "#ffffff";
        roundRect(ctx, cx, cy, cw, ch, 24);
        ctx.fill();

        // Outer Solid Rose Border
        ctx.strokeStyle = "#f472b6";
        ctx.lineWidth = 4;
        roundRect(ctx, cx, cy, cw, ch, 24);
        ctx.stroke();

        // Inner Delicate Accent Border
        ctx.strokeStyle = "#fda4af";
        ctx.lineWidth = 2;
        roundRect(ctx, cx + 8, cy + 8, cw - 16, ch - 16, 18);
        ctx.stroke();

        // Header pill badge
        const pillW = Math.min(cw - 80, 320);
        const pillH = 34;
        const pillX = cx + (cw - pillW) / 2;
        const pillY = cy + 22;
        ctx.fillStyle = "#fff1f5";
        roundRect(ctx, pillX, pillY, pillW, pillH, 17);
        ctx.fill();
        ctx.strokeStyle = "#f472b6";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = "#9d174d";
        ctx.font = "bold 13.5px 'Montserrat', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("APPLIED ROBOTIC LAB (ARL)", cx + cw / 2, pillY + 22);

        // Titles
        ctx.fillStyle = "#831843";
        ctx.font = "bold 18px 'Montserrat', sans-serif";
        ctx.fillText("CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM", cx + cw / 2, cy + 88);

        ctx.fillStyle = "#e11d48";
        ctx.font = "bold 32px 'Montserrat', sans-serif";
        ctx.fillText("20 THÁNG 10", cx + cw / 2, cy + 126);

        ctx.fillStyle = "#f472b6";
        ctx.font = "15px sans-serif";
        ctx.fillText("─── 🌸 ✨ 💖 ✨ 🌸 ───", cx + cw / 2, cy + 152);

        // Recipient Pill
        const rPillW = Math.min(cw - 50, 440);
        const rPillH = 44;
        const rPillX = cx + (cw - rPillW) / 2;
        const rPillY = cy + 170;
        ctx.fillStyle = "#fff1f2";
        roundRect(ctx, rPillX, rPillY, rPillW, rPillH, 22);
        ctx.fill();
        ctx.strokeStyle = "#e11d48";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = "#9f1239";
        ctx.font = "bold 20px 'Montserrat', sans-serif";
        ctx.fillText("Thân gửi: " + rName + " 💖", cx + cw / 2, rPillY + 29);

        // Wish Content Box
        const boxX = cx + 22, boxY = cy + 230, boxW = cw - 44, boxH = ch - 330;
        ctx.fillStyle = "#fafaf9";
        roundRect(ctx, boxX, boxY, boxW, boxH, 16);
        ctx.fill();
        ctx.strokeStyle = "#fcd34d";
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Quotation marks
        ctx.fillStyle = "rgba(244, 114, 182, 0.45)";
        ctx.font = "bold 46px serif";
        ctx.fillText("“", boxX + 28, boxY + 42);
        ctx.fillText("”", boxX + boxW - 28, boxY + boxH - 12);

        // Text wrapping
        ctx.fillStyle = "#1e293b";
        ctx.font = "16.5px 'Montserrat', sans-serif";
        const maxTextW = boxW - 56;
        const lineHeight = 25;
        const words = wText.split(/\s+/);
        const lines = [];
        let curr = "";
        for (let i = 0; i < words.length; i++) {
          const test = curr ? curr + " " + words[i] : words[i];
          if (ctx.measureText(test).width > maxTextW && curr) {
            lines.push(curr);
            curr = words[i];
          } else {
            curr = test;
          }
        }
        if (curr) lines.push(curr);

        const totalH = lines.length * lineHeight;
        let startY = boxY + 38 + Math.max(0, (boxH - 60 - totalH) / 2);
        lines.forEach(line => {
          ctx.fillText(line, cx + cw / 2, startY);
          startY += lineHeight;
        });

        // Signatures
        ctx.fillStyle = "#475569";
        ctx.font = "italic 14.5px 'Montserrat', sans-serif";
        ctx.fillText("— Trân trọng, Applied Robotic Lab (ARL) ❤️🤖", cx + cw / 2, cy + ch - 68);

        ctx.fillStyle = "#0284c7";
        ctx.font = "bold 13px 'Courier New', monospace";
        ctx.fillText("while (alive) { happiness++; love = ∞; }", cx + cw / 2, cy + ch - 44);

        ctx.fillStyle = "#64748b";
        ctx.font = "11.5px 'Montserrat', sans-serif";
        ctx.fillText("🌸 https://dghung23.github.io/Woman_Day_web 🌸", cx + cw / 2, cy + ch - 20);
      }

      // Smooth gradual opening sequence (21 frames total)
      const totalFrames = 21;
      for (let f = 0; f < totalFrames; f++) {
        ctx.clearRect(0, 0, width, height);
        drawBg(f);

        let delay = 100;
        if (f <= 2) {
          drawEnvelope(0, 1);
          drawPocket(1);
          delay = 140;
        } else if (f >= 3 && f <= 9) {
          const p = (f - 3) / 6;
          const flapP = p * 2.0;
          const sealA = Math.max(0, 1 - p * 2.5);
          drawEnvelope(flapP, sealA);
          if (flapP >= 1) {
            const peekProg = (flapP - 1);
            drawCard(150, 340 - peekProg * 50, 420, 260, recipientName, wishText);
          }
          drawPocket(1);
          delay = 90;
        } else if (f >= 10 && f <= 13) {
          drawEnvelope(2.0, 0);
          const slideProg = (f - 9) / 4;
          const curCardY = 290 - slideProg * 140;
          drawCard(150, curCardY, 420, 320, recipientName, wishText);
          drawPocket(0.95);
          delay = 100;
        } else if (f >= 14 && f <= 18) {
          const expP = (f - 13) / 5;
          const curW = 420 + (650 - 420) * expP;
          const curH = 320 + (640 - 320) * expP;
          const curX = (width - curW) / 2;
          const curY = 150 - (150 - 40) * expP;
          const envAlpha = Math.max(0, 1 - expP * 1.6);
          if (envAlpha > 0) {
            drawEnvelope(2.0, 0);
            drawPocket(envAlpha);
          }
          drawCard(curX, curY, curW, curH, recipientName, wishText);
          delay = 100;
        } else if (f === 19) {
          drawCard(35, 40, 650, 640, recipientName, wishText);
          drawSparkle(ctx, 65, 70, 14, "#ffffff", 0.4);
          drawSparkle(ctx, 655, 80, 16, "#fef08a", 0.8);
          delay = 160;
        } else if (f === 20) {
          drawCard(35, 40, 650, 640, recipientName, wishText);
          drawSparkle(ctx, 60, 65, 16, "#ffffff", 0.2);
          drawSparkle(ctx, 660, 75, 18, "#fef08a", 0.5);
          delay = 4000;
        }

        const imgData = ctx.getImageData(0, 0, width, height);
        const palette = quantize(imgData.data, 256);
        const index = applyPalette(imgData.data, palette);
        gif.writeFrame(index, width, height, { palette, delay });
      }

      gif.finish();
      const bytes = gif.bytes();
      const blob = new Blob([bytes], { type: "image/gif" });
      resolve(blob);
    } catch (err) {
      reject(err);
    }
  });
}

/* ==========================================================================
   FACEBOOK IN-APP BROWSER (IAB) REDIRECT HANDLING
   ========================================================================== */
function setupFacebookPageLink() {
  const logoBtn = document.getElementById("arl-logo-btn");
  if (!logoBtn) return;

  const fbPageId = "61595098361933";
  const fbWebUrl = "https://www.facebook.com/profile.php?id=61595098361933";
  const isFbInApp = /FBAN|FBAV|FB_IAB|FB4A|FBIOS/i.test(navigator.userAgent);

  if (isFbInApp) {
    logoBtn.removeAttribute("target");
    logoBtn.setAttribute("target", "_self");

    logoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const deepLink = isIOS 
        ? `fb://profile?id=${fbPageId}` 
        : `fb://page/${fbPageId}`;

      const timeout = setTimeout(() => {
        window.location.href = fbWebUrl;
      }, 700);

      window.location.href = deepLink;
      window.addEventListener("pagehide", () => clearTimeout(timeout), { once: true });
    });
  }
}

function animateWishText(element, text) {
  element.style.opacity = "0";
  element.style.transform = "translateY(5px)";
  setTimeout(() => {
    element.textContent = text;
    element.style.transition = "all 0.4s ease";
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, 200);
}

function showToast(msg) {
  const toast = document.getElementById("toast-notice");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* ==========================================================================
   FLOATING CYBER CODE SYSTEM & TERMINAL CONSOLE
   ========================================================================== */
function setupFloatingCodeSystem() {
  const container = document.getElementById("floating-code-container");
  const terminalOverlay = document.getElementById("terminal-modal");
  const closeDot = document.getElementById("terminal-close-dot");
  const closeBtn = document.getElementById("terminal-close-btn");
  const nextCodeBtn = document.getElementById("terminal-next-btn");
  const rerunBtn = document.getElementById("terminal-rerun-btn");

  // Spawn a floating code badge with stable mover wrapper
  function spawnBadge(snippetData) {
    if (!container) return;

    const isMobile = window.innerWidth <= 768;
    const maxActive = isMobile ? 2 : 4;
    if (container.children.length >= maxActive) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "floating-code-item";

    const card = document.createElement("div");
    card.className = `code-badge-content ${snippetData.badgeClass}`;
    card.setAttribute("title", "Chạm để xem code terminal chúc mừng 20/10!");
    card.innerHTML = `
      <span class="code-lang-tag">${snippetData.tag || snippetData.lang.split(" ")[0]}</span>
      <span class="code-snippet-text">${snippetData.preview}</span>
    `;

    wrapper.appendChild(card);

    // Lateral gutter positioning (keeps flowers in center completely unobstructed)
    const isLeft = Math.random() > 0.5;
    let xPos;
    if (isMobile) {
      // Mobile gutters: Left 3% to 10%, or Right 60% to 68%
      xPos = isLeft ? Math.random() * 7 + 3 : Math.random() * 7 + 61;
    } else {
      xPos = isLeft ? Math.random() * 18 + 4 : Math.random() * 18 + 76;
    }
    const duration = Math.random() * 4 + (isMobile ? 14 : 16);

    wrapper.style.left = `${xPos}%`;
    wrapper.style.animationDuration = `${duration}s`;

    // Click handling: Reliable, instant 1-click trigger
    function handleClick(e) {
      e.stopPropagation();
      openTerminal(snippetData);
    }

    wrapper.addEventListener("click", handleClick);
    container.appendChild(wrapper);

    setTimeout(() => {
      wrapper.remove();
    }, duration * 1000);
  }

  // Periodic auto spawn with mobile-friendly pacing
  let spawnCount = 0;
  setInterval(() => {
    const item = CYBER_CODE_SNIPPETS[spawnCount % CYBER_CODE_SNIPPETS.length];
    spawnBadge(item);
    spawnCount++;
  }, 5000);

  // Spawn initial set
  setTimeout(() => {
    spawnBadge(CYBER_CODE_SNIPPETS[0]);
    if (window.innerWidth > 768) {
      setTimeout(() => spawnBadge(CYBER_CODE_SNIPPETS[1]), 2500);
    }
  }, 1500);

  // Terminal Open & Render
  function openTerminal(snippet) {
    if (!terminalOverlay) return;
    currentCodeIndex = CYBER_CODE_SNIPPETS.indexOf(snippet);
    renderTerminalContent(snippet);
    terminalOverlay.classList.add("active");
    terminalOverlay.setAttribute("aria-hidden", "false");
  }

  function closeTerminal() {
    terminalOverlay.classList.remove("active");
    terminalOverlay.setAttribute("aria-hidden", "true");
  }

  function renderTerminalContent(snippet) {
    const titleEl = document.getElementById("terminal-lang-title");
    const langTag = document.getElementById("terminal-lang-tag");
    const codeEl = document.getElementById("terminal-code-display");
    const outputEl = document.getElementById("terminal-output-text");

    if (titleEl) titleEl.textContent = `arl_bot@ai-lab:~ /${snippet.title}`;
    if (langTag) langTag.textContent = snippet.lang.toUpperCase();
    if (codeEl) codeEl.textContent = snippet.code;

    // Animated execution output
    if (outputEl) {
      outputEl.textContent = ">> Executing script...";
      setTimeout(() => {
        outputEl.innerHTML = snippet.output.replace(/\n/g, "<br>");
      }, 350);
    }
  }

  closeDot?.addEventListener("click", closeTerminal);
  closeBtn?.addEventListener("click", closeTerminal);
  terminalOverlay?.addEventListener("click", (e) => {
    if (e.target === terminalOverlay) closeTerminal();
  });

  // Re-run animation
  rerunBtn?.addEventListener("click", () => {
    const outputEl = document.getElementById("terminal-output-text");
    if (!outputEl) return;
    outputEl.textContent = ">> Compiling & executing firmware...";
    showToast("⚡ Đang biên dịch và thực thi mã!");
    setTimeout(() => {
      const cur = CYBER_CODE_SNIPPETS[currentCodeIndex];
      outputEl.innerHTML = cur.output.replace(/\n/g, "<br>");
    }, 450);
  });

  // Next Code
  nextCodeBtn?.addEventListener("click", () => {
    currentCodeIndex = (currentCodeIndex + 1) % CYBER_CODE_SNIPPETS.length;
    renderTerminalContent(CYBER_CODE_SNIPPETS[currentCodeIndex]);
  });
}

/* ==========================================================================
   ROMANTIC BACKGROUND MUSIC (CANON IN D MAJOR - 20/10 SPECIAL)
   ========================================================================== */
function setupAudio() {
  const bgMusic = document.getElementById("bg-music");
  const musicToggleBtn = document.getElementById("music-toggle-btn");
  const musicText = document.getElementById("music-text");
  const musicIcon = document.getElementById("music-icon");
  const soundIndicator = document.getElementById("sound-indicator");

  if (!bgMusic) return;

  // Set comfortable ambient volume (45%)
  bgMusic.volume = 0.45;

  function updateAudioUI(isPlaying) {
    if (isPlaying) {
      if (musicText) musicText.textContent = "Tắt Nhạc";
      if (musicIcon) musicIcon.textContent = "🔊";
      musicToggleBtn?.classList.add("playing");
      soundIndicator?.classList.add("active");
    } else {
      if (musicText) musicText.textContent = "Bật Nhạc";
      if (musicIcon) musicIcon.textContent = "🎵";
      musicToggleBtn?.classList.remove("playing");
      soundIndicator?.classList.remove("active");
    }
  }

  // Sync state directly with HTML5 Audio element events
  bgMusic.addEventListener("play", () => updateAudioUI(true));
  bgMusic.addEventListener("pause", () => updateAudioUI(false));
  bgMusic.addEventListener("ended", () => updateAudioUI(false));

  // Toggle button click handler
  musicToggleBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        showToast("🎵 Đang phát: Canon in D (Giai điệu 20/10) 🌸");
      }).catch((err) => {
        console.warn("Audio play prevented:", err);
      });
    } else {
      bgMusic.pause();
      showToast("Đã tắt nhạc nền.");
    }
  });

  // Autoplay handler with automatic gesture fallback
  let gestureUnlocked = false;
  function setupOneTimeGestureUnlock() {
    if (gestureUnlocked) return;
    const unlockAndPlay = () => {
      if (gestureUnlocked) return;
      gestureUnlocked = true;
      if (bgMusic.paused) {
        bgMusic.play().then(() => {
          showToast("🎵 Đang phát: Canon in D (Giai điệu tri ân 20/10) 🌸");
        }).catch(() => {});
      }
      ["click", "touchstart", "keydown"].forEach((evt) => {
        document.removeEventListener(evt, unlockAndPlay);
      });
    };

    ["click", "touchstart", "keydown"].forEach((evt) => {
      document.addEventListener(evt, unlockAndPlay, { once: true, passive: true });
    });
  }

  // Attempt unprompted autoplay on page entrance
  const startPromise = bgMusic.play();
  if (startPromise !== undefined) {
    startPromise.then(() => {
      updateAudioUI(true);
    }).catch((err) => {
      // Browser autoplay policy prevented unmuted playback without prior user interaction
      console.log("Browser autoplay policy waiting for user interaction:", err);
      setupOneTimeGestureUnlock();
    });
  } else {
    setupOneTimeGestureUnlock();
  }
}

/* ==========================================================================
   PARTICLE CANVAS (FIREFLIES & CYBER LIGHTS)
   ========================================================================== */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(w > 768 ? 60 : 30, 65);

  const colors = [
    "rgba(0, 210, 255,",   // ARL Cyan
    "rgba(255, 126, 179,", // Pastel Pink
    "rgba(52, 211, 153,",  // Emerald Green
    "rgba(139, 92, 246,"   // Soft Purple
  ];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2.2 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4 - 0.15,
      alpha: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.008
    });
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);

    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += p.pulseSpeed;

      if (p.alpha > 0.85 || p.alpha < 0.15) {
        p.pulseSpeed = -p.pulseSpeed;
      }

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color} ${Math.max(0.1, p.alpha)})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `${p.color} 0.8)`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   FLOWER RAIN & 20/10 WISH BANNERS ANIMATION
   ========================================================================== */
const PETAL_SYMBOLS = ["🌸", "🌺", "🌹", "✨", "💐", "🌷"];

const FALLING_WISH_MESSAGES = [
  "🌸 Chúc Mừng 20/10! ✨",
  "💖 Happy Women's Day! 💖",
  "🌷 Xinh Đẹp & Rạng Rỡ! 🌟",
  "💐 Luôn Hạnh Phúc & Thành Công! 🌸",
  "❤️ Yêu Thương Đong Đầy! ✨",
  "🤖 ARL Gửi Ngàn Yêu Thương! 🌹",
  "🌺 20/10 Ngập Tràn Niềm Vui! 💐"
];

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "falling-petal";
  petal.textContent = PETAL_SYMBOLS[Math.floor(Math.random() * PETAL_SYMBOLS.length)];

  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * 3 + 4;
  const size = Math.random() * 12 + 16;

  petal.style.left = `${startX}px`;
  petal.style.fontSize = `${size}px`;
  petal.style.animationDuration = `${duration}s`;
  petal.style.opacity = (Math.random() * 0.6 + 0.4).toFixed(2);

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

function triggerPetalBurst(count = 20) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createPetal();
    }, i * 120);
  }
}

function createWishBanner() {
  const banner = document.createElement("div");
  banner.className = "falling-wish-banner";
  const text = FALLING_WISH_MESSAGES[Math.floor(Math.random() * FALLING_WISH_MESSAGES.length)];
  banner.textContent = text;

  const isMobile = window.innerWidth <= 768;
  const bannerWidth = isMobile ? 180 : 260;
  const maxLeft = Math.max(10, window.innerWidth - bannerWidth);
  const startX = Math.random() * maxLeft;
  const duration = Math.random() * 2 + 5.5; // 5.5s - 7.5s

  banner.style.left = `${startX}px`;
  banner.style.animationDuration = `${duration}s`;

  document.body.appendChild(banner);

  setTimeout(() => {
    banner.remove();
  }, duration * 1000);
}

function triggerWishBannerBurst(count = 4) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createWishBanner();
    }, i * 380);
  }
}

function playFlowerSFX() {
  const sfx = document.getElementById("flower-sfx");
  if (sfx) {
    try {
      sfx.currentTime = 0;
      sfx.volume = 0.75;
      sfx.play().catch(() => {});
    } catch (e) {
      console.warn("SFX error:", e);
    }
  }
}

function setupFlowerRain() {
  const rainBtn = document.getElementById("petal-rain-btn");
  rainBtn?.addEventListener("click", () => {
    playFlowerSFX();
    triggerPetalBurst(28);
    triggerWishBannerBurst(4);
    showToast("🌸 Chúc bạn luôn rạng rỡ như hoa mùa xuân! ✨");
  });
}

// Prevent mobile background rubber-band scrolling while keeping modal scrolling smooth
document.addEventListener("touchmove", (e) => {
  const scrollable = e.target.closest(".modal-card, .terminal-window, .terminal-body");
  if (!scrollable) {
    e.preventDefault();
  }
}, { passive: false });