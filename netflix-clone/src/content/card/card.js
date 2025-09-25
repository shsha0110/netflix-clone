import { create_component, create_component_with_img } from "../../utils.js";

class Card {
    constructor(parent, index, width, height, icon_data, card_data, type) {
        this.parent = parent;
        this.index = index;
        this.width = width;
        this.height = height;
        this.icon_data = icon_data;
        this.card_data = card_data;
        this.img_src = card_data.img_src;
        this.inner_img_src = card_data.inner_img_src;
        this.type = type;

        this.create_card();
    }

    create_card() {
        if (this.type === "category") {
            this.create_category_card();
        }

        if (this.type === "rank") {
            this.create_rank_card();
        }
    }

    create_category_card() {
        const card = create_component_with_img("div", "category-slider-card", this.parent, this.img_src);
        this.create_inner_card(card, this.img_src);
    }

    create_rank_card() {
        const card = create_component("li", "rank-slider-card", this.parent);
        const rank_icon = this.create_rank_icon(card, this.icon_data.ranks[this.index]);
        const card_img = create_component("img", "rank-slider-card-img", card);
        card_img.src = this.img_src;
        this.create_inner_card(card, this.inner_img_src);
    }

    create_rank_icon(parent, icon_src) {
        const rank_icon = create_component("div", "rank-slider-icon", parent);

        fetch(icon_src)
            .then(response => { return response.text(); })
            .then(icon_html => { rank_icon.innerHTML = icon_html; })
        return rank_icon
    }

    create_inner_card(parent, inner_img_src) {
        const inner_card = create_component_with_img("div", "slider-inner-card", parent, inner_img_src);
        const inner_card_canvas = create_component("div", "slider-inner-card-canvas", inner_card);
        const button_container = create_component("div", "button-container", inner_card_canvas);

        const left_button_container = create_component("div", "left-button-container", button_container);
        create_component_with_img("button", "content-play-button", left_button_container, this.icon_data.play_button);
        create_component_with_img("button", "content-add-button", left_button_container, this.icon_data.add_button);
        create_component_with_img("button", "content-like-button", left_button_container, this.icon_data.like_button);
        
        const right_button_container = create_component("div", "right-button-container", button_container);
        create_component_with_img("button", "content-dropdown-button", right_button_container, this.icon_data.dropdown_button);

        const description = create_component("p", "slider-inner-card-description", inner_card_canvas);
        description.innerHTML = "Content Description";
    }
}

export { Card }