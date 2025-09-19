// =================================================================
// Rank
// =================================================================
import { create_component, create_component_with_img } from "../../utils.js";

// Functions
function create_slider(parent, content) {
    const container = create_component("div", "rank-slider-container", parent);
    const header = create_component("div", "rank-header", container);
    header.textContent = content.header_text;
    const slider = create_component("ul", "rank-slider", container);
    for (var i = 0; i < 6; i++) {
        create_rank_slider_card(slider, content.cards[i].icon_src, content.cards[i].img_src, content.cards[i].inner_img_src);
    };
}

function create_rank_slider_card(parent, icon_src, img_src, inner_img_src) {
    const card = create_component("li", "rank-slider-card", parent);
    const rank_icon = create_component("img", "rank-slider-icon", card);
    rank_icon.src = icon_src;
    const card_img = create_component("img", "rank-slider-card-img", card);
    card_img.src = img_src;

    const inner_card = create_component("div", "slider-inner-card", card);
    const inner_card_img = create_component("img", "slider-inner-card-img", inner_card);
    inner_card_img.src = inner_img_src;
    
    const inner_card_canvas = create_component("div", "slider-inner-card-canvas", inner_card);
    const button_container = create_component("div", "button-container", inner_card_canvas);

    const left_button_container = create_component("div", "left-button-container", button_container);
    create_component_with_img("button", "content-play-button", left_button_container, "./content/rank/images/play_button.png");
    create_component_with_img("button", "content-add-button", left_button_container, "./content/rank/images/add_button.png");
    create_component_with_img("button", "content-like-button", left_button_container, "./content/rank/images/like_button.png");
    
    const right_button_container = create_component("div", "right-button-container", button_container);
    create_component_with_img("button", "content-dropdown-button", right_button_container, "./content/rank/images/dropdown_button.png");

    const description = create_component("p", "slider-inner-card-description", inner_card_canvas);
    description.innerHTML = "Content Description";
}

function create_rank(parent, content) {
    const rank = create_component("section", "rank", parent);
    create_slider(rank, content);
}

export {create_rank}