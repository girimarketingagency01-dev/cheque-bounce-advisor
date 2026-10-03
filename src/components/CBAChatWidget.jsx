"use client";

import { useEffect, useState } from "react";

const HELPLINE = "9891188400";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export default function CBAChatWidget() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connectionStep, setConnectionStep] = useState(0);
  const [language, setLanguage] = useState(null);
  const [name, setName] = useState("");
  const [matter, setMatter] = useState(null);
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [stage, setStage] = useState("start");

  // Show widget only after the CBA intro animation finishes.
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 6200);

    return () => clearTimeout(timer);
  }, []);

  const startChat = () => {
    setOpen(true);
    setConnecting(true);
    setConnectionStep(0);

    setTimeout(() => setConnectionStep(1), 1200);
    setTimeout(() => setConnectionStep(2), 2600);
    setTimeout(() => setConnectionStep(3), 4100);

    setTimeout(() => {
      setConnecting(false);
      setStage("language");
    }, 6000);
  };

  const handleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setStage("name");
  };

  const handleNameSubmit = () => {
    if (!name.trim()) return;
    setStage("matter");
  };

 const handleMatter = (selectedMatter) => {
  setMatter(selectedMatter);
  setStage("state");
};

  const handlePhoneSubmit = () => {
    if (phone.replace(/\D/g, "").length < 10) return;
    setStage("email");
  };

  const handleEmailSubmit = () => {
    if (!email.trim()) return;
    setStage("consent");
  };

  const handleFinalSubmit = async () => {
  if (!agreed) return;

  try {
    const response = await fetch("/api/cba-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language,
        name,
        matter,
        state,
        phone,
        email,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Unable to submit lead.");
    }

    setStage("complete");
  } catch (error) {
    console.error("CBA Lead Submission Error:", error);

    alert(
      "Sorry, we could not submit your request right now. Please call our helpline at 9891188400."
    );
  }
};

  const resetChat = () => {
    setLanguage(null);
    setName("");
    setMatter(null);
    setPhone("");
    setEmail("");
    setAgreed(false);
    setConnectionStep(0);
    setStage("language"); 
    setConnecting(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cba-chat-widget">
      {!open && (
        <button
          type="button"
          className="cba-chat-launcher"
          onClick={startChat}
          aria-label="Chat with CBA Support"
        >
          <span className="cba-chat-pulse"></span>

          <span className="cba-chat-launcher-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11.5C20 15.64 16.42 19 12 19C10.62 19 9.32 18.68 8.18 18.12L4 19.5L5.3 15.8C4.48 14.58 4 13.1 4 11.5C4 7.36 7.58 4 12 4C16.42 4 20 7.36 20 11.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M8 11.5H8.01M12 11.5H12.01M16 11.5H16.01"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      )}

      {open && (
        <div className="cba-chat-panel">
          <div className="cba-chat-header">
            <div className="cba-chat-header-left">
              <div className="cba-chat-avatar">
  <img
    src="/logo-white.png"
    alt="Cheque Bounce Advisor"
  />
</div>

              <div>
                <div className="cba-chat-title">
                  CBA Expert Team
                </div>

                <div className="cba-chat-status">
                  <span></span>
                  Support Available
                </div>
              </div>
            </div>

            <div className="cba-chat-header-actions">
              <a
                href={`tel:${HELPLINE}`}
                className="cba-call-button"
                aria-label="Call CBA Helpline"
                title="Call CBA Helpline"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.94C17.55 15.31 18.75 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <button
                type="button"
                className="cba-close-button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          <div className="cba-chat-body">
            {connecting && (
              <div className="cba-connection-screen">
                <div className="cba-connection-animation">
                  <div className="cba-connection-ring"></div>
                  <div className="cba-connection-center">
  <img
    src="/logo-white.png"
    alt="Cheque Bounce Advisor"
  />
</div>
                </div>

                <div className="cba-connection-title">
                  Connecting to CBA Support
                </div>

                <div className="cba-connection-message">
                  {connectionStep === 0 &&
                    "Starting secure support session..."}

                  {connectionStep === 1 &&
                    "Checking CBA support availability..."}

                  {connectionStep === 2 &&
                    "Preparing your support session..."}

                  {connectionStep === 3 &&
                    "Almost connected..."}
                </div>

                <div className="cba-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="cba-connection-progress">
                  <span
                    style={{
                      width:
                        connectionStep === 0
                          ? "15%"
                          : connectionStep === 1
                            ? "38%"
                            : connectionStep === 2
                              ? "67%"
                              : "92%",
                    }}
                  ></span>
                </div>

                <small>
                  Please wait while we prepare your chat.
                </small>
              </div>
            )}

            {!connecting && stage === "language" && (
              <div className="cba-step">
                <div className="cba-message">
                  Hi! How can I help you today?
                </div>

                <div className="cba-message">
                  Which language would you prefer?
                </div>

                <div className="cba-options">
                  <button
                    type="button"
                    onClick={() => handleLanguage("English")}
                  >
                    English
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLanguage("Hindi")}
                  >
                    हिंदी
                  </button>
                </div>
              </div>
            )}

            {!connecting && stage === "name" && (
              <div className="cba-step">
                <div className="cba-message">
                  {language === "Hindi"
                    ? "कृपया अपना नाम बताइए।"
                    : "Please tell me your name."}
                </div>

                <div className="cba-input-area">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={
                      language === "Hindi"
                        ? "अपना नाम यहाँ दर्ज करें"
                        : "Enter your name here"
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleNameSubmit();
                      }
                    }}
                  />

                  <button
                    type="button"
                    onClick={handleNameSubmit}
                    disabled={!name.trim()}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {!connecting && stage === "matter" && (
              <div className="cba-step">
                <div className="cba-message">
                  {language === "Hindi"
                    ? "आपका मामला किससे संबंधित है?"
                    : "What is your matter related to?"}
                </div>

                <div className="cba-options">
                  <button
                    type="button"
                    onClick={() => handleMatter("Cheque Bounce")}
                  >
                    {language === "Hindi"
                      ? "चेक बाउंस"
                      : "Cheque Bounce"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMatter("Cheque Misuse")}
                  >
                    {language === "Hindi"
                      ? "चेक मिसयूज़"
                      : "Cheque Misuse"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMatter("Other")}
                  >
                    {language === "Hindi" ? "अन्य" : "Other"}
                  </button>
                </div>
              </div>
            )}

            {!connecting && stage === "state" && (
  <div className="cba-step">
    <div className="cba-message">
      {language === "Hindi"
        ? "कृपया अपना राज्य चुनें।"
        : "Please select your state."}
    </div>

    <div className="cba-state-select-area">
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="cba-state-select"
      >
        <option value="">
          {language === "Hindi"
            ? "अपना राज्य चुनें"
            : "Select your state"}
        </option>

        {INDIAN_STATES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        type="button"
        className="cba-state-continue"
        onClick={() => setStage("phone")}
        disabled={!state}
      >
        {language === "Hindi" ? "आगे बढ़ें" : "Continue"}
      </button>
    </div>
  </div>
)}

            {!connecting && stage === "phone" && (
              <div className="cba-step">
                <div className="cba-message">
                  {language === "Hindi"
                    ? "कृपया अपना मोबाइल नंबर दर्ज करें ताकि हमारी CBA टीम आपके मामले के बारे में आपसे संपर्क कर सके।"
                    : "Please enter your mobile number so our CBA team can get back to you regarding your matter."}
                </div>

                <div className="cba-input-area">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    maxLength={10}
                    placeholder={
                      language === "Hindi"
                        ? "अपना मोबाइल नंबर दर्ज करें"
                        : "Enter your mobile number"
                    }
                  />

                  <button
                    type="button"
                    onClick={handlePhoneSubmit}
                    disabled={phone.length !== 10}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {!connecting && stage === "email" && (
              <div className="cba-step">
                <div className="cba-message">
                  {language === "Hindi"
                    ? "कृपया अपना ईमेल पता दर्ज करें।"
                    : "Please enter your email address."}
                </div>

                <div className="cba-input-area">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      language === "Hindi"
                        ? "अपना ईमेल यहाँ दर्ज करें"
                        : "Enter your email here"
                    }
                  />

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={!email.trim()}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {!connecting && stage === "consent" && (
              <div className="cba-step">
                <div className="cba-message">
                  {language === "Hindi"
                    ? "आपकी जानकारी सुरक्षित रूप से हमारी टीम तक भेजने से पहले कृपया नीचे दिए गए विकल्प को स्वीकार करें।"
                    : "Before submitting your details to our team, please acknowledge the following."}
                </div>

                <label className="cba-consent">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />

                  <span>
                    I acknowledge and agree to the{" "}
                    <a href="/terms-and-conditions">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                <button
                  type="button"
                  className="cba-submit-button"
                  onClick={handleFinalSubmit}
                  disabled={!agreed}
                >
                  Submit Details
                </button>
              </div>
            )}

            {!connecting && stage === "complete" && (
              <div className="cba-complete">
                <div className="cba-success-icon">
                  ✓
                </div>

                <div className="cba-message cba-message-center">
                  {language === "Hindi"
                    ? `धन्यवाद ${name}। आपका मामला CBA टीम के पास दर्ज कर लिया गया है। हमारी टीम आपसे जल्द संपर्क करेगी।`
                    : `Thank you, ${name}. Your matter has been registered with the CBA team. Our team will get back to you shortly.`}
                </div>

                <div className="cba-summary">
                  <strong>Selected matter</strong>
                  <span>{matter}</span>
                </div>

                <button
                  type="button"
                  className="cba-new-chat"
                  onClick={resetChat}
                >
                  Start New Chat
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .cba-chat-widget {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 99999;
          font-family: var(--font-manrope), Arial, sans-serif;
        }

        .cba-chat-launcher {
          position: relative;
          width: 64px;
          height: 64px;
          border: 0;
          border-radius: 50%;
          background: #d71920;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow:
            0 12px 30px rgba(215, 25, 32, 0.32),
            0 0 0 6px rgba(215, 25, 32, 0.1);
          animation: launcherAppear 0.7s ease-out both,
            launcherPulse 2.2s ease-in-out 0.7s infinite;
        }

        .cba-chat-launcher-icon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .cba-chat-launcher-icon svg {
          width: 100%;
          height: 100%;
        }

        .cba-chat-pulse {
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 2px solid rgba(215, 25, 32, 0.3);
          animation: pulseRing 2s ease-out infinite;
        }

        .cba-chat-panel {
          width: 390px;
          height: 570px;
          overflow: hidden;
          background: #ffffff;
          border-radius: 22px;
          border: 1px solid rgba(215, 25, 32, 0.12);
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.2),
            0 8px 25px rgba(0, 0, 0, 0.08);
          animation: panelOpen 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: bottom right;
        }

        .cba-chat-header {
          min-height: 76px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #d71920;
          color: #ffffff;
        }

        .cba-chat-header-left {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .cba-chat-avatar {
           width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #d71920;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  padding: 7px;
  box-sizing: border-box;
}

.cba-chat-avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

        .cba-chat-title {
          font-size: 15px;
          font-weight: 800;
        }

        .cba-chat-status {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 4px;
          font-size: 11px;
          opacity: 0.92;
        }

        .cba-chat-status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #6dff8b;
          box-shadow: 0 0 7px rgba(109, 255, 139, 0.8);
        }

        .cba-chat-header-actions {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .cba-call-button,
        .cba-close-button {
          width: 38px;
          height: 38px;
          border: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cba-call-button {
          background: #ffffff;
          color: #d71920;
          text-decoration: none;
        }

        .cba-call-button svg {
          width: 19px;
          height: 19px;
        }

        .cba-close-button {
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff;
          font-size: 25px;
          line-height: 1;
        }

        .cba-chat-body {
          height: calc(100% - 76px);
          overflow-y: auto;
          background: #f8f8f8;
        }

        .cba-connection-screen {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 35px 25px;
          text-align: center;
        }

        .cba-connection-animation {
          position: relative;
          width: 92px;
          height: 92px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .cba-connection-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid rgba(215, 25, 32, 0.12);
          border-top-color: #d71920;
          animation: spin 1s linear infinite;
        }

        .cba-connection-center {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #d71920;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(215, 25, 32, 0.25);
  padding: 10px;
  box-sizing: border-box;
}

.cba-connection-center img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
        .cba-connection-title {
          font-size: 18px;
          font-weight: 800;
          color: #191919;
        }

        .cba-connection-message {
          margin-top: 9px;
          color: #666666;
          font-size: 13px;
          min-height: 20px;
        }

        .cba-typing {
          display: flex;
          gap: 5px;
          margin: 18px 0;
        }

        .cba-typing span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d71920;
          animation: typing 1.1s infinite;
        }

        .cba-typing span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .cba-typing span:nth-child(3) {
          animation-delay: 0.3s;
        }

        .cba-connection-progress {
          width: 210px;
          height: 5px;
          border-radius: 20px;
          background: #e8e8e8;
          overflow: hidden;
        }

        .cba-connection-progress span {
          display: block;
          height: 100%;
          background: #d71920;
          border-radius: inherit;
          transition: width 0.8s ease;
        }

        .cba-connection-screen small {
          margin-top: 14px;
          color: #999999;
          font-size: 10px;
        }

        .cba-step {
          padding: 22px 18px;
          animation: messageIn 0.35s ease-out;
        }

        .cba-message {
          display: inline-block;
          max-width: 90%;
          padding: 12px 14px;
          margin-bottom: 10px;
          background: #ffffff;
          color: #272727;
          border-radius: 4px 16px 16px 16px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
          font-size: 13px;
          line-height: 1.55;
        }

        .cba-options {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: 10px;
        }

        .cba-options button,
        .cba-input-area button,
        .cba-submit-button,
        .cba-new-chat {
          border: 0;
          border-radius: 11px;
          padding: 12px 14px;
          background: #d71920;
          color: #ffffff;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .cba-options button:hover,
        .cba-input-area button:hover,
        .cba-submit-button:hover,
        .cba-new-chat:hover {
          transform: translateY(-1px);
        }

        .cba-input-area {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .cba-input-area input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #dddddd;
          border-radius: 11px;
          padding: 13px;
          outline: none;
          background: #ffffff;
          color: #222222;
          font-size: 13px;
        }

        .cba-input-area input:focus {
          border-color: #d71920;
          box-shadow: 0 0 0 3px rgba(215, 25, 32, 0.08);
        }

        .cba-input-area button:disabled,
        .cba-submit-button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          transform: none;
        }

        .cba-consent {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          margin-top: 18px;
          font-size: 11px;
          color: #555555;
          line-height: 1.5;
        }

        .cba-consent input {
          margin-top: 3px;
          accent-color: #d71920;
        }

        .cba-consent a {
          color: #d71920;
          font-weight: 700;
          text-decoration: underline;
        }

        .cba-submit-button {
          width: 100%;
          margin-top: 17px;
        }

        .cba-complete {
          padding: 35px 22px;
          text-align: center;
          animation: messageIn 0.4s ease-out;
        }

        .cba-success-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #d71920;
          color: #ffffff;
          font-size: 30px;
          font-weight: 700;
        }

        .cba-message-center {
          max-width: 100%;
          border-radius: 16px;
        }

        .cba-summary {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 15px 0;
          padding: 13px;
          background: #ffffff;
          border-radius: 12px;
          font-size: 12px;
          color: #555555;
        }

        .cba-summary span {
          color: #d71920;
          font-weight: 700;
        }

        .cba-new-chat {
          width: 100%;
        }

        .cba-state-select-area {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.cba-state-select {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d71920;
  border-radius: 11px;
  padding: 13px;
  outline: none;
  background: #ffffff;
  color: #222222;
  font-size: 13px;
  font-family: inherit;
  cursor: pointer;
  appearance: auto;
}

.cba-state-select:focus {
  border-color: #d71920;
  box-shadow: 0 0 0 3px rgba(215, 25, 32, 0.08);
}

.cba-state-select option {
  background: #ffffff;
  color: #222222;
}

.cba-state-continue {
  border: 0;
  border-radius: 11px;
  padding: 12px 14px;
  background: #d71920;
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.cba-state-continue:hover {
  transform: translateY(-1px);
}

.cba-state-continue:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}

        @keyframes launcherAppear {
          0% {
            opacity: 0;
            transform: scale(0.2) translateY(20px);
          }

          70% {
            transform: scale(1.08) translateY(-2px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes launcherPulse {
          0%,
          100% {
            box-shadow:
              0 12px 30px rgba(215, 25, 32, 0.32),
              0 0 0 6px rgba(215, 25, 32, 0.1);
          }

          50% {
            box-shadow:
              0 14px 35px rgba(215, 25, 32, 0.42),
              0 0 0 10px rgba(215, 25, 32, 0.05);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.85);
            opacity: 0.7;
          }

          70% {
            transform: scale(1.35);
            opacity: 0;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @keyframes panelOpen {
          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.72);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.45;
          }

          30% {
            transform: translateY(-5px);
            opacity: 1;
          }
        }

        @keyframes messageIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .cba-chat-widget {
            right: 14px;
            bottom: 14px;
          }

          .cba-chat-launcher {
            width: 58px;
            height: 58px;
          }

          .cba-chat-launcher-icon {
            width: 28px;
            height: 28px;
          }

          .cba-chat-panel {
            width: min(390px, calc(100vw - 28px));
            height: min(570px, calc(100vh - 100px));
            border-radius: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cba-chat-launcher,
          .cba-chat-pulse,
          .cba-connection-ring,
          .cba-typing span {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}