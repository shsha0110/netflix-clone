// =================================================================
// Hero
// =================================================================
import { create_component } from "../utils.js";
const img_dir = "./hero/images/"

export function create_hero(parent, data) {
    const hero = create_component("section", "hero", parent);

    const poster = create_component("img", "poster", hero);
    poster.src = data.poster.img_src;
    poster.alt = data.poster.alt;

    const overlay = create_component("div", "overlay", hero);
    const hero_content = create_component("div", "hero-content", hero);

    const hero_title = create_component("img", "hero-title", hero_content);
    hero_title.src = data.title.img_src;
    hero_title.alt = data.title.alt;

    const hero_description = create_component("p", "hero-description", hero_content);
    hero_description.innerHTML = data.description;

    const hero_button_container = create_component("div", "hero-button-container", hero_content);

    // Play Button
    const play_button = create_component("button", "hero-play-button", hero_button_container);
    const play_button_icon = create_component("span", "hero-play-button-icon", play_button);
    play_button_icon.innerHTML = data.buttons.play.icon;
    const play_button_text = create_component("span", "hero-play-button-text", play_button);
    play_button_text.innerHTML = data.buttons.play.text;

    // Details Button
    const details_button = create_component("button", "hero-details-button", hero_button_container);
    const details_button_icon = create_component("span", "hero-details-button-icon", details_button);
    details_button_icon.innerHTML = data.buttons.details.icon;
    const details_button_text = create_component("span", "hero-details-button-text", details_button);
    details_button_text.innerHTML = data.buttons.details.text;
}