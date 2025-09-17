// =================================================================
// Header
// =================================================================
import { create_component } from "../utils.js";

// Functions
function create_primary_navigation_item(parent, text, link) {
    const container = create_component("li", "primary-navigation-item-container", parent);
    const item = create_component("a", "primary-navigation-item", container);
    item.textContent = text;
    item.href = link;
}

function create_secondary_navigation_item(parent, icon_src, alt) {
    const container = create_component("li", "secondary-navigation-item-container", parent);
    const item = create_component("button", alt, container);
    const icon = create_component("img", `${item.className}-icon` , item);
    icon.src = icon_src;
    icon.alt = alt;
}

function create_header(parent) {
    const header = create_component("header", "header", parent);
    const header_left = create_component("div", "header-left", header);
    const header_right = create_component("div", "header-right", header);

    // Logo
    const logo = create_component("div", "logo", header_left);
    const logo_image = create_component("img", "logo-img", logo);
    logo_image.src = "./header/images/logo.png";
    logo_image.alt = "Netflix logo";

    // Navigation
    const primary_navigation = create_component("ul", "primary-navigation", header_left);

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

    const secondary_navigation = create_component("ul", "secondary-navigation", header_right);

    const secondary_navigation_items = [
        { icon_src: "./header/images/search_icon.png", alt: "search-button" },
        { icon_src: "./header/images/notification_icon.png", alt: "notification-button" },
        { icon_src: "./header/images/profile.jpg", alt: "profile" },
    ];


    secondary_navigation_items.forEach(item => {
        create_secondary_navigation_item(secondary_navigation, item.icon_src, item.alt);
    });
}

export {create_header}