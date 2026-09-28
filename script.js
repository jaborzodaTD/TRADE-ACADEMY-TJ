/* =========================================================
   TRADE ACADEMY
   Authors: JABORZODA and MUZAFARZODA
   Main JavaScript
   ========================================================= */

"use strict";

/* =========================================================
   APP STATE
   ========================================================= */

const appState = {
    user: null,
    isLoggedIn: false,
    language: "ru"
};

/* =========================================================
   DEMO USER STORAGE
   ========================================================= */

const USER_STORAGE_KEY = "tradeAcademyUser";

/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});

/* =========================================================
   INITIALIZE APP
   ========================================================= */

function initializeApp() {
    loadUser();
    initializeNavigation();
    initializeAuth();
    initializeLanguage();
    updateUserInterface();

    console.log("TRADE ACADEMY");
    console.log("Authors: JABORZODA and MUZAFARZODA");
}

/* =========================================================
   USER
   ========================================================= */

function loadUser() {
    try {
        const savedUser = localStorage.getItem(USER_STORAGE_KEY);

        if (savedUser) {
            appState.user = JSON.parse(savedUser);
            appState.isLoggedIn = true;
        }
    } catch (error) {
        console.error("Ошибка загрузки пользователя:", error);
        logoutUser();
    }
}

function saveUser(user) {
    appState.user = user;
    appState.isLoggedIn = true;

    localStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify(user)
    );

    updateUserInterface();
}

function logoutUser() {
    appState.user = null;
    appState.isLoggedIn = false;

    localStorage.removeItem(USER_STORAGE_KEY);

    updateUserInterface();
}

/* =========================================================
   AUTHENTICATION UI
   ========================================================= */

function initializeAuth() {

    const loginButtons = document.querySelectorAll(
        "[data-login], .login-btn, #login-btn"
    );

    loginButtons.forEach(button => {
        button.addEventListener("click", openLoginModal);
    });

    const logoutButtons = document.querySelectorAll(
        "[data-logout], .logout-btn, #logout-btn"
    );

    logoutButtons.forEach(button => {
        button.addEventListener("click", () => {
            logoutUser();
        });
    });

    const closeButtons = document.querySelectorAll(
        "[data-close-login], .close-login"
    );

    closeButtons.forEach(button => {
        button.addEventListener("click", closeLoginModal);
    });
}

/* =========================================================
   LOGIN MODAL
   ========================================================= */

function createLoginModal() {

    if (document.getElementById("login-modal")) {
        return;
    }

    const modal = document.createElement("div");

    modal.id = "login-modal";

    modal.innerHTML = `
        <div class="login-overlay"></div>

        <div class="login-modal-content">

            <button
                class="login-close"
                id="close-login-modal"
                aria-label="Close"
            >
                ×
            </button>

            <div class="login-header">

                <div class="login-logo">
                    TA
                </div>

                <h2>Добро пожаловать</h2>

                <p>
                    Войдите в Trade Academy,
                    чтобы сохранять свой прогресс.
                </p>

            </div>

            <div class="login-methods">

                <button
                    class="auth-provider google-auth"
                    id="google-login"
                >
                    <span>G</span>
                    <strong>Продолжить с Google</strong>
                </button>

                <button
                    class="auth-provider telegram-auth"
                    id="telegram-login"
                >
                    <span>✈</span>
                    <strong>Продолжить с Telegram</strong>
                </button>

                <div class="login-divider">
                    <span>или</span>
                </div>

                <input
                    type="email"
                    id="login-email"
                    placeholder="Ваш email"
                    autocomplete="email"
                >

                <input
                    type="password"
                    id="login-password"
                    placeholder="Пароль"
                    autocomplete="current-password"
                >

                <button
                    class="email-login-btn"
                    id="email-login"
                >
                    Войти
                </button>

                <button
                    class="create-account-btn"
                    id="create-account"
                >
                    Создать аккаунт
                </button>

            </div>

            <p class="login-note">
                Авторизация будет подключена через Supabase.
            </p>

        </div>
    `;

    document.body.appendChild(modal);

    document
        .getElementById("close-login-modal")
        .addEventListener("click", closeLoginModal);

    document
        .querySelector(".login-overlay")
        .addEventListener("click", closeLoginModal);

    document
        .getElementById("google-login")
        .addEventListener("click", handleGoogleLogin);

    document
        .getElementById("telegram-login")
        .addEventListener("click", handleTelegramLogin);

    document
        .getElementById("email-login")
        .addEventListener("click", handleEmailLogin);

    document
        .getElementById("create-account")
        .addEventListener("click", handleCreateAccount);
}

function openLoginModal() {

    createLoginModal();

    const modal = document.getElementById("login-modal");

    modal.classList.add("active");

    document.body.classList.add("modal-open");
}

function closeLoginModal() {

    const modal = document.getElementById("login-modal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");
}

/* =========================================================
   GOOGLE LOGIN
   ========================================================= */

function handleGoogleLogin() {

    showNotification(
        "Google авторизация будет подключена на следующем шаге.",
        "info"
    );
}

/* =========================================================
   TELEGRAM LOGIN
   ========================================================= */

function handleTelegramLogin() {

    showNotification(
        "Telegram авторизация будет подключена на следующем шаге.",
        "info"
    );
}

/* =========================================================
   EMAIL LOGIN
   ========================================================= */

function handleEmailLogin() {

    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");

    if (!emailInput || !passwordInput) {
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {

        showNotification(
            "Введите email и пароль.",
            "error"
        );

        return;
    }

    if (!email.includes("@")) {

        showNotification(
            "Введите корректный email.",
            "error"
        );

        return;
    }

    /*
     * Временный локальный режим.
     * Настоящая авторизация будет подключена
     * через Supabase.
     */

    const user = {
        id: "local_" + Date.now(),
        name: email.split("@")[0],
        email: email,
        avatar: "",
        provider: "email",
        createdAt: new Date().toISOString()
    };

    saveUser(user);

    closeLoginModal();

    showNotification(
        "Вы вошли в Trade Academy.",
        "success"
    );
}

/* =========================================================
   CREATE ACCOUNT
   ========================================================= */

function handleCreateAccount() {

    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");

    if (!emailInput || !passwordInput) {
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {

        showNotification(
            "Введите email и пароль.",
            "error"
        );

        return;
    }

    if (password.length < 6) {

        showNotification(
            "Пароль должен содержать минимум 6 символов.",
            "error"
        );

        return;
    }

    const user = {
        id: "local_" + Date.now(),
        name: email.split("@")[0],
        email: email,
        avatar: "",
        provider: "email",
        createdAt: new Date().toISOString()
    };

    saveUser(user);

    closeLoginModal();

    showNotification(
        "Демо-профиль создан.",
        "success"
    );
}

/* =========================================================
   USER INTERFACE
   ========================================================= */

function updateUserInterface() {

    const loginButtons = document.querySelectorAll(
        "[data-login], .login-btn, #login-btn"
    );

    const profileElements = document.querySelectorAll(
        "[data-user-profile], .user-profile"
    );

    if (appState.isLoggedIn && appState.user) {

        loginButtons.forEach(button => {
            button.textContent =
                appState.user.name || "Мой профиль";
        });

        profileElements.forEach(element => {

            element.innerHTML = `
                <div class="user-avatar">
                    ${getUserInitials(appState.user.name)}
                </div>

                <div class="user-info">
                    <strong>
                        ${escapeHTML(appState.user.name)}
                    </strong>

                    <small>
                        ${escapeHTML(appState.user.email || "")}
                    </small>
                </div>
            `;
        });

    } else {

        loginButtons.forEach(button => {
            button.textContent = "Войти";
        });

        profileElements.forEach(element => {
            element.innerHTML = `
                <span>👤</span>
                <span>Войти</span>
            `;
        });
    }
}

/* =========================================================
   USER INITIALS
   ========================================================= */

function getUserInitials(name) {

    if (!name) {
        return "TA";
    }

    const parts = name.trim().split(/\s+/);

    if (parts.length === 1) {
        return parts[0].substring(0, 2).toUpperCase();
    }

    return (
        parts[0][0] +
        parts[1][0]
    ).toUpperCase();
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function initializeNavigation() {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");
    });

    const links = navMenu.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");

        });

    });
}

/* =========================================================
   LANGUAGE
   ========================================================= */

function initializeLanguage() {

    const languageButtons =
        document.querySelectorAll(".language-btn");

    languageButtons.forEach(button => {

        button.addEventListener("click", () => {

            const language =
                button.dataset.language;

            if (!language) {
                return;
            }

            appState.language = language;

            localStorage.setItem(
                "tradeAcademyLanguage",
                language
            );

            updateLanguageButtons();

            showNotification(
                language === "ru"
                    ? "Язык: русский"
                    : "Забон: тоҷикӣ",
                "success"
            );
        });

    });

    const savedLanguage =
        localStorage.getItem("tradeAcademyLanguage");

    if (savedLanguage) {
        appState.language = savedLanguage;
    }

    updateLanguageButtons();
}

function updateLanguageButtons() {

    const languageButtons =
        document.querySelectorAll(".language-btn");

    languageButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.language === appState.language
        );

    });
}

/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function showNotification(message, type = "info") {

    let container =
        document.getElementById("notifications");

    if (!container) {

        container = document.createElement("div");

        container.id = "notifications";

        document.body.appendChild(container);
    }

    const notification =
        document.createElement("div");

    notification.className =
        `notification notification-${type}`;

    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("hide");

        setTimeout(() => {
            notification.remove();
        }, 300);

    }, 3000);
}

/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.TradeAcademy = {

    login: openLoginModal,

    logout: logoutUser,

    getUser: () => appState.user,

    isLoggedIn: () => appState.isLoggedIn

};
