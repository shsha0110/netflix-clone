// header
const header = document.querySelector(".header")

// logo
const logo = document.createElement("div");
logo.className = "logo";
header.appendChild(logo);

const logo_image = document.createElement("img");
logo_image.src = "images/logo.png";
logo_image.alt = "Netflix logo" ;
logo.appendChild(logo_image);

// navigation
const primary_navigation = document.createElement("ul");
primary_navigation.className = "primary-navigation";
header.appendChild(primary_navigation);

const primary_navigation_items = [{text: "홈", link: "#"}, {text: "시리즈", link: "#"}, 
                          {text: "영화", link: "#"}, {text: "게임", link: "#"},
                          {text: "NEW! 요즘 대세 컨텐츠", link: "#"}, 
                          {text: "내가 찜한 리스트", link: "#"},
                          {text: "언어별로 찾아보기", link: "#"}]

function create_primary_navigation_item(parent, text, link) {
    const navigation_item_container = document.createElement("li");
    const navigation_item = document.createElement("a");

    navigation_item_container.className = "primary-navigation-item-container";
    navigation_item.className = "primary-navigation-item";

    navigation_item.textContent = text;
    navigation_item.href = link;
    
    navigation_item_container.appendChild(navigation_item);
    parent.appendChild(navigation_item_container);

    return navigation_item_container;
}

primary_navigation_items.forEach(item => {
    create_primary_navigation_item(primary_navigation, item.text, item.link);
});

const secondary_navigation = document.createElement("ul");
secondary_navigation.className = "secondary-navigation";
header.appendChild(secondary_navigation);

const secondary_navigation_items = [{icon_src: "images/search_icon.png", alt: "search-button"}, 
                                    {icon_src: "images/notification_icon.png", alt: "notification-button"},
                                    {icon_src: "images/profile.jpg", alt: "profile"},]

function create_secondary_navigation_item(parent, icon_src, alt) {
    const navigation_item_container = document.createElement("li");
    const navigation_item = document.createElement("button");
    const navigation_icon = document.createElement("img");

    navigation_item_container.className = "secondary-navigation-item-container";
    navigation_item.className = alt;

    navigation_icon.src = icon_src;
    navigation_icon.alt = alt;
    
    navigation_item.append(navigation_icon);
    navigation_item_container.appendChild(navigation_item);
    parent.appendChild(navigation_item_container);

    return navigation_item_container;
}

secondary_navigation_items.forEach(item => {
    create_secondary_navigation_item(secondary_navigation, item.icon_src, item.alt);
});