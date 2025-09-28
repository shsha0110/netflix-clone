// =================================================================
// Header
// =================================================================
import { create_component, create_component_with_img } from "../utils.js";
const img_dir = "./header/images/";

// Functions
function create_logo(parent, data) {
    const logo = create_component("div", "logo", parent);
    const logo_image = create_component("img", "logo-img", logo);
    logo_image.src = data.img_src;
    logo_image.alt = data.img_alt;
}

function create_primary_navigation(parent, data) {
    const primary_navigation = create_component("ul", "primary-navigation", parent);
    data.forEach(elem => {
        create_primary_navigation_item(primary_navigation, elem);
    });
}

function create_primary_navigation_item(parent, data) {
    const container = create_component("li", "primary-navigation-item-container", parent);
    const item = create_component("a", "primary-navigation-item", container);
    item.innerHTML = data.text;
    item.href = data.link;
}

function create_secondary_navigation(parent, data) {
    const secondary_navigation = create_component("ul", "secondary-navigation", parent);
    create_search(secondary_navigation, data.search);
    create_notification(secondary_navigation, data.notification);
    create_user_profile(secondary_navigation, data.profile);
}

function create_secondary_navigation_item(parent, img_src, alt) {
    const container = create_component("li", "secondary-navigation-item-container", parent);
    
    if (alt != "user-profile") {
        const item = create_component("button", alt, container);
        const icon = create_component("img", `${item.className}-icon`, item);
        icon.src = img_src;
        icon.alt = alt;
    } else {
        const user_profile_container = create_component("div", "user-profile-container", container);
        const item = create_component("button", alt, user_profile_container);
        const icon = create_component("img", `${item.className}-icon`, item);
        icon.src = img_src;
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

function create_search(parent, data) {
    create_secondary_navigation_item(parent, data.img_src, data.alt);
}

function create_notification(parent, data) {
    create_secondary_navigation_item(parent, data.img_src, data.alt);
    const notification_button = document.querySelector(".notification-button");
    create_notification_modal(notification_button, data.items);
}

function create_notification_modal(parent, data) {
    const notification_modal = create_component("div", "notification-modal", parent);
    const tooltip_arrow = create_component("div", "notification-tooltip-arrow", notification_modal);
    const tooltip_background = create_component("div", "notification-tooltip-background", notification_modal);
    data.forEach(elem => {
        create_notification_item(tooltip_background, elem.img_src, elem.text, elem.time);
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

function create_user_profile(parent, data) {
    create_secondary_navigation_item(parent, data.img_src, data.alt);
    const user_profile = document.querySelector(".user-profile");
    create_user_profile_modal(user_profile, data.items);
}

function create_user_profile_modal(parent, data) {
    const user_profile_modal = create_component("div", "user-profile-modal", parent);
    const tooltip_arrow = create_component("div", "profile-tooltip-arrow", user_profile_modal);
    const tooltip_background = create_component("div", "profile-tooltip-background", user_profile_modal);
    data.forEach(elem => {
        create_profile_item(tooltip_background, elem.img_src, elem.text)
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

export function create_header(parent, data) {
    const header = create_component("header", "header", parent);
    const header_left = create_component("div", "header-left", header, data);
    const header_right = create_component("div", "header-right", header, data);

    // Logo
    create_logo(header_left, data.logo);

    // Navigation
    create_primary_navigation(header_left, data.primary_navigation);
    create_secondary_navigation(header_right, data.secondary_navigation);
}