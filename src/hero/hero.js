// =================================================================
// Hero
// =================================================================
import { create_component } from "../utils.js";
const img_dir = "./hero/images/"

function create_hero(parent) {
    const hero = create_component("section", "hero", parent);

    const poster = create_component("img", "poster", hero);
    poster.src = `${img_dir}poster.webp`;
    poster.alt = "오징어게임 포스터";

    const overlay = create_component("div", "overlay", hero);
    const hero_content = create_component("div", "hero-content", hero);

    const hero_title = create_component("img", "hero-title", hero_content);
    hero_title.src = `${img_dir}title.webp`;
    hero_title.alt = "오징어게임 타이틀";

    const hero_description = create_component("p", "hero-description", hero_content);
    hero_description.innerHTML = "전 세계 시청 시간 16억 5천만을 넘기며 역대 최고의 인기를 기록한 시리즈<br>빚더미에서 허우적대던 참가자들이 거액을 차지하고자 목숨을 걸고<br>위험천만한 아이들의 놀이에 뛰어든다.";

    const hero_button_container = create_component("div", "hero-button-container", hero_content);

    // Play Button
    const play_button = create_component("button", "hero-play-button", hero_button_container);
    const play_button_icon = create_component("span", "hero-play-button-icon", play_button);
    play_button_icon.innerHTML = "►";
    const play_button_text = create_component("span", "hero-play-button-text", play_button);
    play_button_text.innerHTML = "재생";

    // Details Button
    const details_button = create_component("button", "hero-details-button", hero_button_container);
    const details_button_icon = create_component("span", "hero-details-button-icon", details_button);
    details_button_icon.innerHTML = "ⓘ";
    const details_button_text = create_component("span", "hero-details-button-text", details_button);
    details_button_text.innerHTML = "상세 정보";
}

export {create_hero}