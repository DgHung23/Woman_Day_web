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
    lang: "Python 3.12",
    badgeClass: "badge-python",
    preview: "while self.is_alive(): she.happiness += ∞",
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
    lang: "ROS 2 / C++",
    badgeClass: "badge-cpp",
    preview: "publish<Love>(\"/arl/women/joy\", 2010)",
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
    lang: "Rust 2024",
    badgeClass: "badge-rust",
    preview: "let woman: &'static Inspiration = Lab::genius()",
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
    lang: "x86_64 ASM",
    badgeClass: "badge-asm",
    preview: "MOV EAX, HAPPINESS; ADD EAX, 2010h; SYSCALL",
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
    lang: "Embedded C",
    badgeClass: "badge-binary",
    preview: "analogWrite(PIN_LOVE, 255); // 100% Duty Cycle",
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
    lang: "SQL / Database",
    badgeClass: "badge-js",
    preview: "SELECT beauty, talent FROM ARL_Women WHERE 20_10",
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
let isAudioPlaying = false;
let audioCtx = null;
let musicInterval = null;

function initializeARL() {
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

  // Periodic subtle petal drop
  setInterval(() => {
    try { createPetal(); } catch(e) {}
  }, 3500);
}

// Mobile and readyState aware bootstrapper
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
  const logoBtn = document.getElementById("arl-logo-btn");
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
  logoBtn?.addEventListener("click", openModal);
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

  // Copy Wish
  copyBtn?.addEventListener("click", () => {
    const textToCopy = `Thân gửi ${displayName.textContent},\n\n${wishTextEl.textContent.trim()}\n\n— Trân trọng, Applied Robotic Lab (ARL) ❤️🤖`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast("Đã sao chép lời chúc vào bộ nhớ tạm! 📋");
    }).catch(() => {
      showToast("Đã chọn lời chúc!");
    });
  });
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

    const wrapper = document.createElement("div");
    wrapper.className = "floating-code-item";

    const card = document.createElement("div");
    card.className = `code-badge-content ${snippetData.badgeClass}`;
    card.setAttribute("title", "Click để xem terminal code chúc mừng 20/10!");
    card.innerHTML = `
      <span class="code-lang-tag">${snippetData.lang.split(" ")[0]}</span>
      <span class="code-snippet-text">${snippetData.preview}</span>
      <span class="sparkle-icon">⚡</span>
    `;

    wrapper.appendChild(card);

    // Position on either Left (4% to 30%) or Right (70% to 92%) so flowers in center remain 100% visible
    const isLeft = Math.random() > 0.5;
    const xPos = isLeft ? Math.random() * 26 + 4 : Math.random() * 20 + 70;
    const duration = Math.random() * 5 + 15; // 15s - 20s smooth drift

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

  // Periodic auto spawn
  let spawnCount = 0;
  setInterval(() => {
    const item = CYBER_CODE_SNIPPETS[spawnCount % CYBER_CODE_SNIPPETS.length];
    spawnBadge(item);
    spawnCount++;
  }, 4000);

  // Spawn initial set
  setTimeout(() => {
    spawnBadge(CYBER_CODE_SNIPPETS[0]);
    setTimeout(() => spawnBadge(CYBER_CODE_SNIPPETS[1]), 1800);
    setTimeout(() => spawnBadge(CYBER_CODE_SNIPPETS[2]), 3400);
  }, 1200);

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
   WEB AUDIO API - AMBIENT PIANO / CHIME MUSIC
   ========================================================================== */
function setupAudio() {
  const musicToggleBtn = document.getElementById("music-toggle-btn");
  const musicText = document.getElementById("music-text");
  const soundIndicator = document.getElementById("sound-indicator");

  // Soothing Pentatonic Chords
  const notes = [
    261.63, 329.63, 392.00, 523.25, // C chord
    196.00, 246.94, 293.66, 392.00, // G chord
    220.00, 261.63, 329.63, 440.00, // Am chord
    174.61, 220.00, 261.63, 349.23  // F chord
  ];

  function playAmbientTone(freq, time, duration = 2.5) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.exponentialRampToValueAtTime(0.08, time + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(time);
      osc.stop(time + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  function startMusicLoop() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    let step = 0;
    musicInterval = setInterval(() => {
      const baseTime = audioCtx.currentTime;
      const chordIndex = Math.floor(step / 4) % 4;
      const noteInChord = step % 4;
      const noteFreq = notes[chordIndex * 4 + noteInChord];

      playAmbientTone(noteFreq, baseTime, 2.2);

      if (Math.random() > 0.6) {
        const bellFreq = [659.25, 783.99, 880.00, 1046.50][Math.floor(Math.random() * 4)];
        playAmbientTone(bellFreq, baseTime + 0.3, 1.8);
      }

      step++;
    }, 550);
  }

  function stopMusicLoop() {
    if (musicInterval) {
      clearInterval(musicInterval);
      musicInterval = null;
    }
  }

  musicToggleBtn?.addEventListener("click", () => {
    isAudioPlaying = !isAudioPlaying;
    if (isAudioPlaying) {
      startMusicLoop();
      musicText.textContent = "Tắt Nhạc";
      soundIndicator.classList.add("active");
      showToast("🎵 Đang phát giai điệu thư giãn...");
    } else {
      stopMusicLoop();
      musicText.textContent = "Bật Nhạc";
      soundIndicator.classList.remove("active");
      showToast("Đã tắt nhạc nền.");
    }
  });
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
   FLOWER RAIN ANIMATION
   ========================================================================== */
const PETAL_SYMBOLS = ["🌸", "🌺", "🌹", "✨", "💐", "🌷"];

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

function setupFlowerRain() {
  const rainBtn = document.getElementById("petal-rain-btn");
  rainBtn?.addEventListener("click", () => {
    triggerPetalBurst(25);
    showToast("🌸 Chúc bạn luôn rạng rỡ như hoa mùa xuân!");
  });
}