import { create_component, create_component_with_img } from "../utils.js";

class Slider {
    constructor(parent, content, category_index, card_width, gap, img_dir) {
        this.parent = parent;
        this.content = content;
        this.category_index = category_index;
        this.track_index = 1;
        this.track_size = content.track_size;
        this.num_card = content.cards.length;
        this.num_track = this.num_card / this.track_size;
        this.card_width = card_width;
        this.gap = gap;
        this.img_dir = img_dir;
        
        this.slider_header = create_component("div", "category-slider-header", this.parent);
        this.slider_body = create_component("div", "category-slider-body", this.parent);
        this.create_slider_header(this.slider_header);
        this.create_slider_body(this.slider_body);
        this.create_slider_annimation();
    }

    create_slider_header(parent) {
        this.header_text = create_component("div", "category-slider-header-text", parent);
        this.header_text.innerHTML = this.content.header_text;

        this.page_indicator = create_component("div", "category-slider-page-indicator", parent);
        for (let i=0; i < this.num_track; i++) {
            create_component("div", "category-slider-page-indicator-element", this.page_indicator);
        }
    }

    create_slider_body(parent) {
        this.backward_button_container = create_component("div", "category-slider-backward-button-container", parent);
        this.forward_button_container = create_component("div", "category-slider-forward-button-container", parent);
        this.backward_button = create_component_with_img("button", "category-slider-backward-button", this.backward_button_container, `${this.img_dir}backward_icon.png`);
        this.forward_button = create_component_with_img("button", "category-slider-forward-button", this.forward_button_container, `${this.img_dir}forward_icon.png`);
        
        this.track = create_component("div", "category-slider-track", parent);
        let current_card_group;
        for (let i=0; i < this.num_card; i++) {
            if (i % this.track_size == 0) {
                current_card_group = create_component("div", "category-slider-card-group", this.track);
            }
            this.create_category_slider_card(current_card_group, this.content.cards[i].img_src);
        }

        this.reset_animation();        
    }

    create_category_slider_card(parent, img_src) {
        const card = create_component("div", "category-slider-card", parent);
        const card_img = create_component("img", "category-slider-card-img", card);
        card_img.src = img_src;
        
        const inner_card = create_component("div", "slider-inner-card", card);
        const inner_card_img = create_component("img", "slider-inner-card-img", inner_card);
        inner_card_img.src = img_src;
        
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

    reset_animation() {
        const cloned_first_card_group = this.track.querySelectorAll(".category-slider-card-group")[0].cloneNode(true);
        this.track.appendChild(cloned_first_card_group);    
        const cloned_last_card_group = this.track.querySelectorAll(".category-slider-card-group")[this.num_track - 1].cloneNode(true);
        this.track.prepend(cloned_last_card_group);

        this.track.style.transition = "none";
        const first_card_group_position = (this.card_width + this.gap) * this.track_size * 1;;
        this.track.style.transform = `translateX(-${first_card_group_position}px)`;
        
        setTimeout(() => {
            this.track.style.transition = 'transform 0.5s ease';
        }, 0);

        this.page_indicator.querySelector(".category-slider-page-indicator-element").classList.add("active");
    }

    create_slider_annimation() {
        this.forward_button_container.addEventListener("click", () => {
            this.track_index++;
            this.slide_track(1);
            this.update_page_indicator();
        })

        this.backward_button_container.addEventListener("click", () => {
            this.track_index--;
            this.slide_track(-1);
            this.update_page_indicator();
        })
    }

    slide_track(type) {
        let destination = (this.card_width + this.gap) * this.track_size * this.track_index;
        if (type > 0) {
            if (this.track_index > this.num_track) {
            this.track.style.transform = `translateX(-${destination}px)`;
            this.track.addEventListener("transitionend", () => {
                this.track.style.transition = "none";
                const first_card_group_position = (this.card_width + this.gap) * this.track_size * 1;;
                this.track.style.transform = `translateX(-${first_card_group_position}px)`;
                this.track_index = 1;

                this.update_page_indicator();

                setTimeout(() => {
                    this.track.style.transition = 'transform 0.5s ease';
                }, 0);

            }, {once: true})} else {
                this.track.style.transform = `translateX(-${destination}px)`;
            }
        } else {
            if (this.track_index == 0) {
            this.track.style.transform = `translateX(-${destination}px)`;
            this.track.addEventListener("transitionend", () => {
                this.track.style.transition = "none";
                const last_card_group_position = (this.card_width + this.gap) * this.track_size * this.num_track;
                this.track.style.transform = `translateX(-${last_card_group_position}px)`;
                this.track_index = this.num_track;

                this.update_page_indicator();

                setTimeout(() => {
                    this.track.style.transition = 'transform 0.5s ease';
                }, 0);
                
            }, {once: true})} else {
                this.track.style.transform = `translateX(-${destination}px)`;
            }
        }
    }

    update_page_indicator() {
        for (let i = 0; i < this.num_track; i++) {
            let element = this.page_indicator.querySelectorAll(".category-slider-page-indicator-element")[i];        
            if (i == this.track_index-1) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        }   
    }

}

export { Slider }