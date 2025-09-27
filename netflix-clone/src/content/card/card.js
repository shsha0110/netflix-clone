import { create_component, create_component_with_img } from "../../utils.js";

export class Card {
    constructor(parent, index, width, height, icon_data, card_data, type) {
        this.parent = parent;
        this.index = index;
        this.width = width;
        this.height = height;
        this.icon_data = icon_data;
        this.card_data = card_data;
        this.content_id = card_data.id;
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
        this.create_play_modal(left_button_container);
        this.create_wishlist_modal(left_button_container);
        this.create_opinion_modal(left_button_container);
        
        const right_button_container = create_component("div", "right-button-container", button_container);
        create_component_with_img("button", "content-dropdown-button", right_button_container, this.icon_data.dropdown_button);

        const description = create_component("p", "slider-inner-card-description", inner_card_canvas);
        description.innerHTML = "Content Description";
    }

    create_play_modal(parent) {
        create_component_with_img("button", "content-play-button", parent, this.icon_data.play_button);
    }

    create_wishlist_modal(parent) {
        const wishlist_button = create_component_with_img("button", "content-wishlist-button", parent, this.icon_data.add_button);
    }

    create_opinion_modal(parent) {
        this.opinion_button = create_component_with_img("button", "content-opinion-button", parent, this.icon_data.like_button);
        this.opinion_modal_container = create_component("div", "content-opinion-modal-container", this.opinion_button);

        this.create_dislike(this.opinion_modal_container);
        this.create_like(this.opinion_modal_container);
        this.create_best(this.opinion_modal_container);
        
        this.update_opinion_buttons(null);
    }

    create_dislike(parent) {
        this.dislike_button = create_component_with_img("button", "content-dislike-button", parent, this.icon_data.dislike_button);
        this.dislike_button.addEventListener("click", () => {
            this.update_opinion_buttons("dislike");
            this.set_user_opinion("dislike");
        });

        this.dislike_tooltip = create_component("div", "content-dislike-tooltip", this.dislike_button);
        this.dislike_tooltip_text = create_component("span", "content-tooltip-text", this.dislike_tooltip);
        this.dislike_tooltip_text.textContent = "맘에 안 들어요";
        this.dislike_tooltip_arrow = create_component("div", "content-tooltip-arrow", this.dislike_tooltip);
    }

    create_like(parent) {
        this.like_button = create_component_with_img("button", "content-like-button",  parent, this.icon_data.like_button);
        this.like_button.addEventListener("click", () => {
            this.update_opinion_buttons("like");
            this.set_user_opinion("like");
        });

        this.like_tooltip = create_component("div", "content-like-tooltip", this.like_button);
        this.like_tooltip_text = create_component("span", "content-tooltip-text", this.like_tooltip);
        this.like_tooltip_text.textContent = "좋아요";
        this.like_tooltip_arrow = create_component("div", "content-tooltip-arrow", this.like_tooltip);
    }

    create_best(parent) {
        this.best_button = create_component_with_img("button", "content-best-button", parent, this.icon_data.best_button);
        this.best_button.addEventListener("click", () => {
            this.update_opinion_buttons("best");
            this.set_user_opinion("best");
        });

        this.best_tooltip = create_component("div", "content-best-tooltip", this.best_button);

        this.best_tooltip_text = create_component("span", "content-tooltip-text", this.best_tooltip);
        this.best_tooltip_text.textContent = "최고예요!";

        this.best_tooltip_arrow = create_component("div", "content-tooltip-arrow", this.best_tooltip);
    }

    update_opinion_buttons(opinion) {
        this.reset_opinion_buttons();
        const user_opinion = this.get_user_opinion();
        if (opinion) {
            if (user_opinion != opinion) {
                if (opinion === "dislike") {
                    this.dislike_button.querySelector("img").src = this.icon_data.dislike_button_active;
                    this.opinion_button.querySelector("img").src = this.icon_data.dislike_button_active;
                    this.dislike_tooltip_text.textContent = "평가함";
                } else if (opinion === "like") {
                    this.like_button.querySelector("img").src = this.icon_data.like_button_active;
                    this.opinion_button.querySelector("img").src = this.icon_data.like_button_active;
                    this.like_tooltip_text.textContent = "평가함";
                } else if (opinion === "best") {
                    this.best_button.querySelector("img").src = this.icon_data.best_button_active;
                    this.opinion_button.querySelector("img").src = this.icon_data.best_button_active;
                    this.best_tooltip_text.textContent = "평가함";
                }   
            } else {
                this.reset_opinion_buttons();
            }
        } else {
            if (opinion === "dislike") {
                    this.dislike_button.querySelector("img").src = this.icon_data.dislike_button_active;
                    this.opinion_button.querySelector("img").src = this.icon_data.dislike_button_active;
                    this.dislike_tooltip_text.textContent = "평가함";
                } else if (opinion === "like") {
                    this.like_button.querySelector("img").src = this.icon_data.like_button_active;
                    this.opinion_button.querySelector("img").src = this.icon_data.like_button_active;
                    this.like_tooltip_text.textContent = "평가함";
                } else if (opinion === "best") {
                    this.best_button.querySelector("img").src = this.icon_data.best_button_active;
                    this.opinion_button.querySelector("img").src = this.icon_data.best_button_active;
                    this.best_tooltip_text.textContent = "평가함";
                }
        }
    }

    reset_opinion_buttons() {
        this.opinion_button.querySelector("img").src = this.icon_data.like_button;
        this.dislike_button.querySelector("img").src = this.icon_data.dislike_button;
        this.like_button.querySelector("img").src = this.icon_data.like_button;
        this.best_button.querySelector("img").src = this.icon_data.best_button;
        this.dislike_tooltip_text.textContent = "맘에 안 들어요";
        this.like_tooltip_text.textContent = "좋아요";
        this.best_tooltip_text.textContent = "최고예요!";
    }

    set_user_opinion(opinion) {
        const response = localStorage.getItem("user_opinions");
        const user_opinions = response ? JSON.parse(response) : [];
        
        var updated = false;
        for (var i = 0; i < user_opinions.length; i++) {
            var user_opinion = user_opinions[i];
            if (user_opinion.id === this.content_id) {
                if (user_opinion.opinion === opinion) {
                    user_opinions.splice(i, 1);
                    updated = true;
                    break;
                } else {
                    user_opinions[i].opinion = opinion;
                    updated = true;
                    break;
                }
            }
        }
        if (!updated) {
            user_opinions.push({ "id": this.content_id, "opinion": opinion });
            updated = true;
        }

        localStorage.setItem("user_opinions", JSON.stringify(user_opinions));
    }

    get_user_opinion() {
        const response = localStorage.getItem("user_opinions");
        const user_opinions = response ? JSON.parse(response) : [];
        var target_opinion = { "id": this.content_id, "opinion": null };
        for (var i = 0; i < user_opinions.length; i++) {
            const user_opinion = user_opinions[i];
            if (user_opinion.id === this.content_id) {
                target_opinion = user_opinion;
            }
        }
        return target_opinion.opinion;
    }
}