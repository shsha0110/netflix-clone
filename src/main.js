//  * @param {string} tag - 생성할 HTML 태그 이름 (e.g., 'div', 'img', 'p')
//  * @param {string} class_name - 요소에 적용할 클래스 이름
//  * @param {HTMLElement} parent - 생성된 요소를 추가할 부모 요소
//  * @returns {HTMLElement} 생성된 DOM 요소
function create_component(tag, class_name, parent) {
    const component = document.createElement(tag);
    component.className = class_name;
    parent.appendChild(component);
    return component;
}

// =================================================================
// Header
// =================================================================
const header = document.querySelector(".header");
const header_left = create_component("div", "header-left", header);
const header_right = create_component("div", "header-right", header);

// Logo
const logo = create_component("div", "logo", header_left);
const logo_image = create_component("img", "", logo); // logo img에는 클래스 없음
logo_image.src = "images/logo.png";
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

function create_primary_navigation_item(parent, text, link) {
    const container = create_component("li", "primary-navigation-item-container", parent);
    const item = create_component("a", "primary-navigation-item", container);
    item.textContent = text;
    item.href = link;
}

primary_navigation_items.forEach(item => {
    create_primary_navigation_item(primary_navigation, item.text, item.link);
});

const secondary_navigation = create_component("ul", "secondary-navigation", header_right);

const secondary_navigation_items = [
    { icon_src: "images/search_icon.png", alt: "search-button" },
    { icon_src: "images/notification_icon.png", alt: "notification-button" },
    { icon_src: "images/profile.jpg", alt: "profile" },
];

function create_secondary_navigation_item(parent, icon_src, alt) {
    const container = create_component("li", "secondary-navigation-item-container", parent);
    const item = create_component("button", alt, container);
    const icon = create_component("img", "", item);
    icon.src = icon_src;
    icon.alt = alt;
}

secondary_navigation_items.forEach(item => {
    create_secondary_navigation_item(secondary_navigation, item.icon_src, item.alt);
});


// =================================================================
// Hero
// =================================================================
const hero = document.querySelector(".hero");

const poster = create_component("img", "poster", hero);
poster.src = "images/poster.webp";
poster.alt = "오징어게임 포스터";

const overlay = create_component("div", "overlay", hero);
const hero_content = create_component("div", "hero-content", hero);

const hero_title = create_component("img", "hero-title", hero_content);
hero_title.src = "images/title.webp";
hero_title.alt = "오징어게임 타이틀";

const hero_description = create_component("p", "hero-description", hero_content);
hero_description.innerHTML = "전 세계 시청 시간 16억 5천만을 넘기며 역대 최고의 인기를 기록한 시리즈<br>빚더미에서 허우적대던 참가자들이 거액을 차지하고자 목숨을 걸고<br>위험천만한 아이들의 놀이에 뛰어든다.";

const hero_button_container = create_component("div", "hero-button-container", hero_content);

// Play Button
const play_button = create_component("button", "play-button", hero_button_container);
const play_button_icon = create_component("span", "play-button-icon", play_button);
play_button_icon.innerHTML = "►";
const play_button_text = create_component("span", "play-button-text", play_button);
play_button_text.innerHTML = "재생";

// Details Button
const details_button = create_component("button", "details-button", hero_button_container);
const details_button_icon = create_component("span", "details-button-icon", details_button);
details_button_icon.innerHTML = "ⓘ";
const details_button_text = create_component("span", "details-button-text", details_button);
details_button_text.innerHTML = "상세정보";

// =================================================================
// Category
// =================================================================
function create_category_section(parent, items, header_text) {
    const container = create_component("div", "category-section-container", parent);
    const header = create_component("div", "category-section-header", container);
    header.textContent = header_text;
    const slider = create_component("ul", "category-section-slider", container);
    items.forEach(item => {
        create_slider_item(slider, item.img_src);
    });
}

function create_slider_item(parent, img_src) {
    const item = create_component("li", "category-section-slider-item", parent);
    const item_img = create_component("img", "category-section-slider-item-img", item);
    item_img.src = img_src;
}

const upper_category = document.querySelector(".upper-category");
const first_section_items = [{img_src: "images/slider_item1.jpg"}, {img_src: "images/slider_item2.jpg"},
                             {img_src: "images/slider_item3.jpg"}, {img_src: "images/slider_item4.jpg"},
                             {img_src: "images/slider_item5.jpg"}, {img_src: "images/slider_item6.jpg"}];
const first_section_header_text = "넷플릭스 시리즈"
create_category_section(upper_category, first_section_items, first_section_header_text);