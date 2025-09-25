import { create_component, create_component_with_img } from "../../utils.js";

class Card {
    constructor(parent, width, height, card_content, type) {
        this.parent = parent
        this.width = width;
        this.height = height;
        this.card_content = card_content;
        this.img_src = card_content.img_src;
        this.inner_img_src = card_content.inner_img_src;
        this.type = type;
        this.img_dir = `./content/${this.type}/images/`;

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
        this.icon_src = this.card_content.icon_src;
        const rank_icon = this.create_rank_icon(card, this.icon_src);
        const card_img = create_component("img", "rank-slider-card-img", card);
        card_img.src = this.img_src;
        this.create_inner_card(card, this.inner_img_src);
    }

    create_rank_icon(parent, icon_src) {
        const rank_icon = create_component("div", "rank-slider-icon", parent);
        document.addEventListener("DOMContentLoaded", () => {
            fetch(icon_src)
                .then(response => {return response.text();})
                .then(icon_html => {rank_icon.innerHTML = icon_html;})
        }, {once: true})
        return rank_icon
    }

    create_inner_card(parent, inner_img_src) {
        const inner_card = create_component_with_img("div", "slider-inner-card", parent, inner_img_src);
        const inner_card_canvas = create_component("div", "slider-inner-card-canvas", inner_card);
        const button_container = create_component("div", "button-container", inner_card_canvas);

        const left_button_container = create_component("div", "left-button-container", button_container);
        create_component_with_img("button", "content-play-button", left_button_container, `${this.img_dir}play_button.png`);
        create_component_with_img("button", "content-add-button", left_button_container, `${this.img_dir}add_button.png`);
        create_component_with_img("button", "content-like-button", left_button_container, `${this.img_dir}like_button.png`);
        
        const right_button_container = create_component("div", "right-button-container", button_container);
        create_component_with_img("button", "content-dropdown-button", right_button_container, `${this.img_dir}dropdown_button.png`);

        const description = create_component("p", "slider-inner-card-description", inner_card_canvas);
        description.innerHTML = "Content Description";
    }
}

export { Card }