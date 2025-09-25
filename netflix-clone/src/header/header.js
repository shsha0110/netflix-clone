// =================================================================
// Header
// =================================================================
import { create_component, create_component_with_img } from "../utils.js";
const img_dir = "./header/images/";

// Functions
function create_logo(parent) {
    const logo = create_component("div", "logo", parent);
    const logo_image = create_component("img", "logo-img", logo);
    logo_image.src = `${img_dir}logo.png`;
    logo_image.alt = "Netflix logo";
}

function create_primary_navigation(parent) {
    const primary_navigation = create_component("ul", "primary-navigation", parent);

    const primary_navigation_items = [
        { text: "홈", link: "#" }, { text: "시리즈", link: "#" },
        { text: "영화", link: "#" }, { text: "게임", link: "#" },
        { text: "NEW! 요즘 대세 컨텐츠", link: "#" },
        { text: "내가 찜한 리스트", link: "#" },
        { text: "언어별로 찾아보기", link: "#" }
    ];

    primary_navigation_items.forEach(item => {
        create_primary_navigation_item(primary_navigation, item.text, item.link);
    });
}

function create_primary_navigation_item(parent, text, link) {
    const container = create_component("li", "primary-navigation-item-container", parent);
    const item = create_component("a", "primary-navigation-item", container);
    item.textContent = text;
    item.href = link;
}

function create_secondary_navigation(parent) {
    const secondary_navigation = create_component("ul", "secondary-navigation", parent);

    const secondary_navigation_items = {search: { icon_src: `${img_dir}search_icon.png`, alt: "search-button" },
                                        notification: { icon_src: `${img_dir}notification_icon.png`, alt: "notification-button" },
                                        user_profile: { icon_src: `${img_dir}user_profile_0.jpg`, alt: "user-profile" }};

    create_search(secondary_navigation, secondary_navigation_items.search);

    const notifications = [{img_src: `${img_dir}notification_1.webp`,
                            text: "9월 12일 공개<br>지금 예고편을 시청하세요",
                            time: "오늘"},
                            {img_src: `${img_dir}notification_2.webp`,
                            text: "신규 콘텐츠<br>나는 생존자다",
                            time: "3주 전"},
                            {img_src: `${img_dir}notification_3.webp`,
                            text: "손맛이 다른 세계가 온다<br>웬즈데이 시즌 2 공개",
                            time: "4주 전"},
                            {img_src: `${img_dir}notification_4.webp`,
                            text: "신규 콘텐츠<br>에스콰이어: 변호사를 꿈꾸는 변호사들",
                            time: "1개월"}];
    create_notification(secondary_navigation, secondary_navigation_items.notification, notifications);

    const profiles = [{img_src: `${img_dir}user_profile_1.jpg`, text: "User #1"},
                      {img_src: `${img_dir}user_profile_2.jpg`, text: "User #2"},
                      {img_src: `${img_dir}user_profile_3.jpg`, text: "User #3"},
                      {img_src: `${img_dir}user_profile_4.jpg`, text: "User #4"},
                      {img_src: `${img_dir}profile_management_icon.png`, text: "프로필 관리"},
                      {img_src: `${img_dir}profile_migration_icon.png`, text: "프로필 이전"},
                      {img_src: `${img_dir}account_icon.png`, text: "계정"},
                      {img_src: `${img_dir}customer_service_icon.png`, text: "고객센터"}];
    create_user_profile(secondary_navigation, secondary_navigation_items.user_profile, profiles);
}

function create_secondary_navigation_item(parent, icon_src, alt) {
    const container = create_component("li", "secondary-navigation-item-container", parent);

    if (alt != "user-profile") {
        const item = create_component("button", alt, container);
        const icon = create_component("img", `${item.className}-icon`, item);
        icon.src = icon_src;
        icon.alt = alt;
    } else {
        const user_profile_container = create_component("div", "user-profile-container", container);
        const item = create_component("button", alt, user_profile_container);
        const icon = create_component("img", `${item.className}-icon`, item);
        icon.src = icon_src;
        icon.alt = alt;
        const dropdown = create_component("div", "profile-dropdown", user_profile_container);
        user_profile_container.addEventListener('mouseenter', () => {
            dropdown.classList.add("is-rotated");
        })
        user_profile_container.addEventListener('mouseleave', () => {
            dropdown.classList.remove("is-rotated");
        })
    }
}

function create_search(parent, contents) {
    create_secondary_navigation_item(parent, contents.icon_src, contents.alt);
}

function create_notification(parent, contents, notifications) {
    create_secondary_navigation_item(parent, contents.icon_src, contents.alt);

    const notification_button = document.querySelector(".notification-button");
    create_notification_modal(notification_button, notifications);
}

function create_notification_modal(parent, notifications) {
    const notification_modal = create_component("div", "notification-modal", parent);
    const tooltip_arrow = create_component("div", "notification-tooltip-arrow", notification_modal);
    const tooltip_background = create_component("div", "notification-tooltip-background", notification_modal);
    notifications.forEach(notification => {
        create_notification_item(tooltip_background, notification.img_src, notification.text, notification.time);
    })
}

function create_notification_item(parent, img_src, text, time) {
    const container = create_component("div", "notification-item", parent);
    create_component_with_img("div", "notification-item-left", container, img_src);
    const container_right = create_component("div", "notification-item-right", container);
    const text_box = create_component("div", "notification-item-text", container_right);
    text_box.innerHTML = text;
    const time_box = create_component("div", "notification-item-time", container_right);
    time_box.innerHTML = time;
}

function create_user_profile(parent, contents, profiles) {
    create_secondary_navigation_item(parent, contents.icon_src, contents.alt);

    const user_profile = document.querySelector(".user-profile");
    create_user_profile_modal(user_profile, profiles);

}

function create_user_profile_modal(parent, profiles) {
    const user_profile_modal = create_component("div", "user-profile-modal", parent);
    const tooltip_arrow = create_component("div", "profile-tooltip-arrow", user_profile_modal);
    const tooltip_background = create_component("div", "profile-tooltip-background", user_profile_modal);
    profiles.forEach(profile => {
        create_profile_item(tooltip_background, profile.img_src, profile.text)
    })
    const logout_button = create_component("button", "logout-button", user_profile_modal);
    logout_button.innerHTML = "넷플릭스에서 로그아웃";
}

function create_profile_item(parent, img_src, text) {
    const container = create_component("div", "profile-item", parent);
    create_component_with_img("button", "profile-icon", container, img_src);
    const text_box = create_component("div", "profile-text", container);
    text_box.innerHTML = text;
}

function create_header(parent) {
    const header = create_component("header", "header", parent);
    const header_left = create_component("div", "header-left", header);
    const header_right = create_component("div", "header-right", header);

    // Logo
    create_logo(header_left);

    // Navigation
    create_primary_navigation(header_left);
    create_secondary_navigation(header_right);
}

export {create_header}