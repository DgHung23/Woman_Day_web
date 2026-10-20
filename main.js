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
  try { setupVideoPreviewModal(); } catch (e) { console.warn("Video modal init:", e); }
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
  // Copy Wish as High-Resolution Rendered PNG Image (for instant pasting) + 1080p Video Generation
  let isGeneratingVideo = false;
  copyBtn?.addEventListener("click", async () => {
    if (isGeneratingVideo) return;
    isGeneratingVideo = true;
    const origBtnHtml = copyBtn.innerHTML;
    copyBtn.innerHTML = '<span>⏳</span> Đang tạo Video 1080p...';
    copyBtn.disabled = true;

    const rName = displayName.textContent.trim() || "Bóng Hồng ARL";
    const wText = wishTextEl.textContent.trim();
    showToast("🎬 Đang sao chép hình & render video mở thiệp 1080p Full HD...");

    try {
      // 1. Generate crisp 1080x1080 PNG card immediately (< 30ms) for clipboard
      const pngBlob = await generateCardPngBlob(rName, wText);
      currentCardPngBlob = pngBlob;
      let copiedImageToClipboard = false;

      // Write PNG image to clipboard immediately within user gesture window
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

      // 2. Generate smooth 1080x1080 Motion Opening Video (stops and freezes on opened card)
      const { videoBlob, mimeType } = await generateOpeningCardVideoBlob(rName, wText);
      currentVideoBlob = videoBlob;
      if (currentVideoUrl) {
        URL.revokeObjectURL(currentVideoUrl);
      }
      currentVideoUrl = URL.createObjectURL(videoBlob);

      // Auto-download video file
      const ext = mimeType.includes("mp4") ? "mp4" : "webm";
      const downloadLink = document.createElement("a");
      downloadLink.style.display = "none";
      const cleanName = rName.replace(/[^\w\s\u00C0-\u1EF9]/gi, "").replace(/\s+/g, "_");
      downloadLink.download = `ARL_Thiep_20_10_MoThiep_${cleanName || "Chuc_Mung"}.${ext}`;
      downloadLink.href = currentVideoUrl;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      setTimeout(() => downloadLink.remove(), 1000);

      // 3. Open Video Preview Modal & auto-play
      const videoModal = document.getElementById("video-preview-modal");
      const videoPlayer = document.getElementById("card-video-player");
      if (videoModal && videoPlayer) {
        videoPlayer.src = currentVideoUrl;
        videoModal.classList.add("active");
        videoModal.setAttribute("aria-hidden", "false");
        videoPlayer.play().catch(() => {});
      }

      if (copiedImageToClipboard) {
        showToast("🎬 Đã tải video 1080p & sao chép hình thiệp (Ctrl+V để dán)! ✨");
      } else {
        showToast("🎬 Đã tải video 1080p mở thiệp thành công! ✨");
      }
    } catch (err) {
      console.error("Render video error:", err);
      // Fallback: auto-download PNG card
      if (currentCardPngBlob) {
        const pngUrl = URL.createObjectURL(currentCardPngBlob);
        const a = document.createElement("a");
        a.href = pngUrl;
        const cleanName = rName.replace(/[^\w\s\u00C0-\u1EF9]/gi, "").replace(/\s+/g, "_");
        a.download = `ARL_Thiep_20_10_${cleanName || "Chuc_Mung"}.png`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          a.remove();
          URL.revokeObjectURL(pngUrl);
        }, 15000);
      }
      const textFallback = `Thân gửi ${rName},\n\n${wText}\n\n— Trân trọng, Applied Robotic Lab (ARL) ❤️🤖`;
      navigator.clipboard?.writeText(textFallback).catch(() => {});
      showToast("Đã tải hình ảnh thiệp 1080p & lưu lời chúc! 🌸");
    } finally {
      isGeneratingVideo = false;
      copyBtn.innerHTML = origBtnHtml;
      copyBtn.disabled = false;
    }
  });
}

/* ==========================================================================
   VIDEO PREVIEW MODAL LOGIC & CONTROLS
   ========================================================================== */
let currentVideoBlob = null;
let currentVideoUrl = null;
let currentCardPngBlob = null;

function setupVideoPreviewModal() {
  const modal = document.getElementById("video-preview-modal");
  const closeBtn = document.getElementById("video-close-btn");
  const player = document.getElementById("card-video-player");
  const replayBtn = document.getElementById("video-replay-btn");
  const downloadBtn = document.getElementById("video-download-btn");
  const copyImgBtn = document.getElementById("video-copy-img-btn");

  function closeVideoModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    if (player) {
      player.pause();
    }
  }

  closeBtn?.addEventListener("click", closeVideoModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeVideoModal();
  });

  replayBtn?.addEventListener("click", () => {
    if (player) {
      player.currentTime = 0;
      player.play().catch(() => {});
    }
  });

  downloadBtn?.addEventListener("click", () => {
    if (!currentVideoUrl) {
      showToast("Chưa có video để tải!");
      return;
    }
    const displayName = document.getElementById("display-name");
    const rName = displayName ? displayName.textContent.trim() : "Bong_Hong_ARL";
    const cleanName = rName.replace(/[^\w\s\u00C0-\u1EF9]/gi, "").replace(/\s+/g, "_");
    const ext = (currentVideoBlob && currentVideoBlob.type && currentVideoBlob.type.includes("mp4")) ? "mp4" : "webm";
    const a = document.createElement("a");
    a.href = currentVideoUrl;
    a.download = `ARL_Thiep_20_10_MoThiep_${cleanName || "Chuc_Mung"}.${ext}`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => a.remove(), 1000);
    showToast("🎬 Đang tải lại video mở thiệp 1080p!");
  });

  copyImgBtn?.addEventListener("click", async () => {
    if (!currentCardPngBlob) {
      const displayName = document.getElementById("display-name");
      const wishTextEl = document.getElementById("typewriter-wish");
      const rName = displayName ? displayName.textContent.trim() : "Bóng Hồng ARL";
      const wText = wishTextEl ? wishTextEl.textContent.trim() : "";
      currentCardPngBlob = await generateCardPngBlob(rName, wText);
    }
    if (navigator.clipboard && window.ClipboardItem && currentCardPngBlob) {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": currentCardPngBlob })
        ]);
        showToast("✨ Đã sao chép hình thiệp vào clipboard (Ctrl+V để dán)! 📋");
      } catch (err) {
        showToast("Không thể ghi vào bộ nhớ tạm trình duyệt!");
      }
    }
  });
}

/* ==========================================================================
   SHARED 1080P DRAWING HELPERS
   ========================================================================== */
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

function drawCard(ctx, cx, cy, cw, ch, rName, wText) {
  // Pure White Card
  ctx.fillStyle = "#ffffff";
  roundRect(ctx, cx, cy, cw, ch, 32);
  ctx.fill();

  // Outer Solid Rose Border
  ctx.strokeStyle = "#f472b6";
  ctx.lineWidth = 5.5;
  roundRect(ctx, cx, cy, cw, ch, 32);
  ctx.stroke();

  // Inner Delicate Accent Border
  ctx.strokeStyle = "#fda4af";
  ctx.lineWidth = 2.8;
  roundRect(ctx, cx + 12, cy + 12, cw - 24, ch - 24, 24);
  ctx.stroke();

  // Header badge
  const pillW = Math.min(cw - 120, 480);
  const pillH = 48;
  const pillX = cx + (cw - pillW) / 2;
  const pillY = cy + 30;
  ctx.fillStyle = "#fff1f5";
  roundRect(ctx, pillX, pillY, pillW, pillH, 24);
  ctx.fill();
  ctx.strokeStyle = "#f472b6";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.fillStyle = "#9d174d";
  ctx.font = "bold 19px 'Montserrat', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("APPLIED ROBOTIC LAB (ARL)", cx + cw / 2, pillY + 31);

  // Titles
  ctx.fillStyle = "#831843";
  ctx.font = "bold 25px 'Montserrat', sans-serif";
  ctx.fillText("CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM", cx + cw / 2, cy + 124);

  ctx.fillStyle = "#e11d48";
  ctx.font = "bold 46px 'Montserrat', sans-serif";
  ctx.fillText("20 THÁNG 10", cx + cw / 2, cy + 180);

  ctx.fillStyle = "#f472b6";
  ctx.font = "20px sans-serif";
  ctx.fillText("─── 🌸 ✨ 💖 ✨ 🌸 ───", cx + cw / 2, cy + 218);

  // Recipient Pill
  const rPillW = Math.min(cw - 80, 620);
  const rPillH = 60;
  const rPillX = cx + (cw - rPillW) / 2;
  const rPillY = cy + 242;
  ctx.fillStyle = "#fff1f2";
  roundRect(ctx, rPillX, rPillY, rPillW, rPillH, 30);
  ctx.fill();
  ctx.strokeStyle = "#e11d48";
  ctx.lineWidth = 3.5;
  ctx.stroke();

  ctx.fillStyle = "#9f1239";
  ctx.font = "bold 28px 'Montserrat', sans-serif";
  ctx.fillText("Thân gửi: " + rName + " 💖", cx + cw / 2, rPillY + 41);

  // Wish Content Box
  const boxX = cx + 32;
  const boxY = cy + 326;
  const boxW = cw - 64;
  const boxH = ch - 460;
  ctx.fillStyle = "#fafaf9";
  roundRect(ctx, boxX, boxY, boxW, boxH, 22);
  ctx.fill();
  ctx.strokeStyle = "#fcd34d";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Quotation marks
  ctx.fillStyle = "rgba(244, 114, 182, 0.45)";
  ctx.font = "bold 64px serif";
  ctx.fillText("“", boxX + 38, boxY + 58);
  ctx.fillText("”", boxX + boxW - 38, boxY + boxH - 16);

  // Text wrapping
  ctx.fillStyle = "#1e293b";
  ctx.font = "23px 'Montserrat', sans-serif";
  const maxTextW = boxW - 78;
  const lineHeight = 36;
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
  let startY = boxY + 52 + Math.max(0, (boxH - 85 - totalH) / 2);
  lines.forEach(line => {
    ctx.fillText(line, cx + cw / 2, startY);
    startY += lineHeight;
  });

  // Signatures
  ctx.fillStyle = "#475569";
  ctx.font = "italic 20px 'Montserrat', sans-serif";
  ctx.fillText("— Trân trọng, Applied Robotic Lab (ARL) ❤️🤖", cx + cw / 2, cy + ch - 96);

  ctx.fillStyle = "#0284c7";
  ctx.font = "bold 18px 'Courier New', monospace";
  ctx.fillText("while (alive) { happiness++; love = ∞; }", cx + cw / 2, cy + ch - 62);

  ctx.fillStyle = "#64748b";
  ctx.font = "16px 'Montserrat', sans-serif";
  ctx.fillText("🌸 https://dghung23.github.io/Woman_Day_web 🌸", cx + cw / 2, cy + ch - 28);
}

/* ==========================================================================
   HIGH-RESOLUTION GREETING CARD PNG GENERATOR (1080x1080 FULL HD)
   ========================================================================== */
function generateCardPngBlob(recipientName, wishText) {
  return new Promise((resolve) => {
    const width = 1080;
    const height = 1080;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // Soft bright feminine pink gradient
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, "#fff5f8");
    bgGrad.addColorStop(0.35, "#ffe4ec");
    bgGrad.addColorStop(0.7, "#fce7f3");
    bgGrad.addColorStop(1, "#f9a8d4");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Radiant soft glow
    const glow = ctx.createRadialGradient(540, 540, 60, 540, 540, 520);
    glow.addColorStop(0, "rgba(255, 255, 255, 0.88)");
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    // Top banner
    ctx.fillStyle = "#be185d";
    ctx.font = "bold 18px 'Montserrat', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("APPLIED ROBOTIC LAB (ARL) • 20/10/2026", 540, 42);

    // Floating petals
    const petals = [
      { x: 100, y: 120, s: 22, a: 0.3 },
      { x: 240, y: 280, s: 18, a: 0.9 },
      { x: 920, y: 160, s: 24, a: -0.5 },
      { x: 860, y: 400, s: 20, a: 1.3 },
      { x: 130, y: 700, s: 22, a: -0.7 },
      { x: 950, y: 820, s: 18, a: 0.6 },
      { x: 500, y: 100, s: 16, a: 0.1 },
      { x: 720, y: 900, s: 22, a: -0.8 }
    ];
    petals.forEach(p => {
      drawPetal(ctx, p.x, p.y, p.s, p.a, "rgba(244, 114, 182, 0.75)");
    });

    // Draw full crisp 1080p card
    drawCard(ctx, 50, 50, 980, 980, recipientName, wishText);

    // Sparkles
    drawSparkle(ctx, 90, 100, 20, "#ffffff", 0.4);
    drawSparkle(ctx, 990, 110, 22, "#fef08a", 0.8);

    canvas.toBlob((blob) => {
      resolve(blob);
    }, "image/png");
  });
}

/* ==========================================================================
   1080P FULL HD MOTION OPENING VIDEO GENERATOR (STOPS ON OPENED LETTER)
   ========================================================================== */
function generateOpeningCardVideoBlob(recipientName, wishText) {
  return new Promise(async (resolve, reject) => {
    try {
      const width = 1080;
      const height = 1080;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      const petals = [
        { x: 100, y: 120, s: 22, a: 0.3, sp: 2 },
        { x: 240, y: 280, s: 18, a: 0.9, sp: 2.4 },
        { x: 920, y: 160, s: 24, a: -0.5, sp: 1.8 },
        { x: 860, y: 400, s: 20, a: 1.3, sp: 2.2 },
        { x: 130, y: 700, s: 22, a: -0.7, sp: 2 },
        { x: 950, y: 820, s: 18, a: 0.6, sp: 2.3 },
        { x: 500, y: 100, s: 16, a: 0.1, sp: 1.6 },
        { x: 720, y: 900, s: 22, a: -0.8, sp: 2.1 }
      ];

      const sparkles = [
        [120, 340, 14, "#fef08a"],
        [940, 280, 16, "#ffffff"],
        [140, 880, 12, "#ffffff"],
        [900, 680, 15, "#fef08a"],
        [540, 130, 18, "#ffffff"]
      ];

      function drawBg(timeSec) {
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, "#fff5f8");
        bgGrad.addColorStop(0.35, "#ffe4ec");
        bgGrad.addColorStop(0.7, "#fce7f3");
        bgGrad.addColorStop(1, "#f9a8d4");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        const glow = ctx.createRadialGradient(540, 540, 60, 540, 540, 520);
        glow.addColorStop(0, "rgba(255, 255, 255, 0.88)");
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#be185d";
        ctx.font = "bold 18px 'Montserrat', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("APPLIED ROBOTIC LAB (ARL) • 20/10/2026", 540, 42);

        petals.forEach((p) => {
          const curY = (p.y + timeSec * p.sp * 60) % (height + 40);
          const curA = p.a + timeSec * 1.2;
          drawPetal(ctx, p.x, curY, p.s, curA, "rgba(244, 114, 182, 0.75)");
        });

        sparkles.forEach(([sx, sy, ss, sc], idx) => {
          const pulse = ss + Math.sin(timeSec * 4 + idx) * 3.5;
          drawSparkle(ctx, sx, sy, Math.max(4, pulse), sc, timeSec * 1.5 + idx);
        });
      }

      const envW = 680;
      const envH = 410;
      const envX = 200;
      const envY = 530;

      function drawEnvelope(flapP, sealA) {
        ctx.fillStyle = "#ffe4ec";
        roundRect(ctx, envX, envY, envW, envH, 28);
        ctx.fill();
        ctx.strokeStyle = "#f472b6";
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.fillStyle = "#fff0f5";
        roundRect(ctx, envX + 12, envY + 12, envW - 24, envH - 24, 22);
        ctx.fill();

        if (flapP < 1) {
          const peakY = (envY + 230) - flapP * 230;
          ctx.beginPath();
          ctx.moveTo(envX, envY);
          ctx.lineTo(envX + envW, envY);
          ctx.lineTo(envX + envW / 2, peakY);
          ctx.closePath();
          ctx.fillStyle = "#fff5f8";
          ctx.fill();
          ctx.strokeStyle = "#f472b6";
          ctx.lineWidth = 5;
          ctx.stroke();

          if (sealA > 0) {
            ctx.save();
            ctx.globalAlpha = sealA;
            ctx.fillStyle = "#fef08a";
            ctx.strokeStyle = "#d97706";
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.arc(envX + envW / 2, peakY - 26, 32, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#e11d48";
            ctx.beginPath();
            ctx.arc(envX + envW / 2, peakY - 26, 25, 0, Math.PI * 2);
            ctx.fill();

            drawHeart(ctx, envX + envW / 2, peakY - 38, 30, "#ffffff");
            ctx.restore();
          }

          if (flapP > 0.15 && flapP < 0.8) {
            for (let i = 0; i < 8; i++) {
              const ang = (i * Math.PI) / 4;
              const dist = 32 + flapP * 45;
              drawSparkle(ctx, envX + envW / 2 + Math.cos(ang) * dist, peakY + Math.sin(ang) * dist, 6, "#fef08a", i);
            }
          }
        } else {
          const peakY = envY - (flapP - 1) * 220;
          ctx.beginPath();
          ctx.moveTo(envX, envY);
          ctx.lineTo(envX + envW, envY);
          ctx.lineTo(envX + envW / 2, peakY);
          ctx.closePath();
          ctx.fillStyle = "#fed7e2";
          ctx.fill();
          ctx.strokeStyle = "#f472b6";
          ctx.lineWidth = 5;
          ctx.stroke();
        }
      }

      function drawPocket(alpha = 1) {
        if (alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = alpha;

        ctx.beginPath();
        ctx.moveTo(envX, envY);
        ctx.lineTo(envX, envY + envH);
        ctx.lineTo(envX + envW / 2, envY + 230);
        ctx.closePath();
        ctx.fillStyle = "#fff5f8";
        ctx.fill();
        ctx.strokeStyle = "#fbcfe8";
        ctx.lineWidth = 3.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(envX + envW, envY);
        ctx.lineTo(envX + envW, envY + envH);
        ctx.lineTo(envX + envW / 2, envY + 230);
        ctx.closePath();
        ctx.fillStyle = "#fff0f5";
        ctx.fill();
        ctx.strokeStyle = "#fbcfe8";
        ctx.lineWidth = 3.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(envX, envY + envH);
        ctx.lineTo(envX + envW, envY + envH);
        ctx.lineTo(envX + envW / 2, envY + 215);
        ctx.closePath();
        ctx.fillStyle = "#fff5f8";
        ctx.fill();
        ctx.strokeStyle = "#f472b6";
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.restore();
      }

      const mimeType = (window.MediaRecorder && MediaRecorder.isTypeSupported('video/mp4;codecs=avc1'))
        ? 'video/mp4;codecs=avc1'
        : ((window.MediaRecorder && MediaRecorder.isTypeSupported('video/mp4'))
            ? 'video/mp4'
            : 'video/webm;codecs=vp9');

      const stream = canvas.captureStream(30);
      const recorder = new MediaRecorder(stream, {
        mimeType: mimeType,
        videoBitsPerSecond: 6000000
      });

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      const recordPromise = new Promise((res) => {
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: mimeType });
          res({ videoBlob: blob, mimeType });
        };
      });

      recorder.start();

      const totalFrames = 135; // 4.5 seconds @ 30fps
      const fps = 30;

      for (let i = 0; i < totalFrames; i++) {
        const t = i / fps;
        ctx.clearRect(0, 0, width, height);
        drawBg(t);

        if (t < 0.6) {
          drawEnvelope(0, 1);
          drawPocket(1);
        } else if (t >= 0.6 && t < 1.6) {
          const p = (t - 0.6) / 1.0;
          const flapP = p * 2.0;
          const sealA = Math.max(0, 1 - p * 2.2);
          drawEnvelope(flapP, sealA);
          if (flapP >= 1) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(0, 0, width, envY + envH - 8);
            ctx.clip();
            const peekProg = (flapP - 1);
            drawCard(ctx, 230, 520 - peekProg * 60, 620, 400, recipientName, wishText);
            ctx.restore();
          }
          drawPocket(1);
        } else if (t >= 1.6 && t < 2.5) {
          drawEnvelope(2.0, 0);
          const slideP = (t - 1.6) / 0.9;
          const curY = 460 - slideP * 240;
          ctx.save();
          ctx.beginPath();
          ctx.rect(0, 0, width, envY + envH - 8);
          ctx.clip();
          drawCard(ctx, 230, curY, 620, 520, recipientName, wishText);
          ctx.restore();
          drawPocket(0.95);
        } else if (t >= 2.5 && t < 3.5) {
          const expP = (t - 2.5) / 1.0;
          const curW = 620 + (980 - 620) * expP;
          const curH = 520 + (980 - 520) * expP;
          const curX = (width - curW) / 2;
          const curY = 220 - (220 - 50) * expP;
          const envA = Math.max(0, 1 - expP * 1.5);
          if (envA > 0) {
            drawEnvelope(2.0, 0);
            drawPocket(envA);
          }
          drawCard(ctx, curX, curY, curW, curH, recipientName, wishText);
        } else {
          // STATIONARY FULL OPEN LETTER: STOPS HERE SO USER CAN READ COMFORTABLY
          drawCard(ctx, 50, 50, 980, 980, recipientName, wishText);
          drawSparkle(ctx, 90, 100, 20, "#ffffff", t);
          drawSparkle(ctx, 990, 110, 22, "#fef08a", t * 1.2);
        }

        await new Promise((r) => setTimeout(r, 33));
      }

      recorder.stop();
      const result = await recordPromise;
      resolve(result);
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