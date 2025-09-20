import { create_component, create_component_with_img } from "../../utils.js";
import { Card } from "../card/card.js"

class Slider {
    constructor(parent, content, slider_index, card_width, card_height, card_type) {
        this.parent = parent;
        this.content = content;
        this.slider_index = slider_index;
        this.track_index = 1;
        this.track_size = content.track_size;
        this.num_card = content.cards.length;
        this.num_track = this.num_card / this.track_size;

        this.card_width = card_width;
        this.card_height = card_height;
        this.track_width = 1325;
        this.gap = (this.track_width / this.track_size) - this.card_width;
        
        this.card_type = card_type;
        this.img_dir = `./content/${this.card_type}/images/`;

        this.slider_header = create_component("div", "slider-header", this.parent);
        this.slider_body = create_component("div", "slider-body", this.parent);
        this.create_slider_header(this.slider_header);
        this.create_slider_body(this.slider_body);
        this.create_slider_annimation();
    }

    create_slider_header(parent) {
        this.header_text = create_component("div", "slider-header-text", parent);
        this.header_text.innerHTML = this.content.header_text;

        this.page_indicator = create_component("div", "page-indicator", parent);
        for (let i=0; i < this.num_track; i++) {
            create_component("div", "page-indicator-element", this.page_indicator);
        }
    }

    create_slider_body(parent) {
        this.slider_body.style.height = `${this.card_height}px`;
        
        this.backward_button_container = create_component("div", "slider-backward-button-container", parent);
        this.forward_button_container = create_component("div", "slider-forward-button-container", parent);
        this.backward_button = create_component_with_img("button", "slider-backward-button", this.backward_button_container, `${this.img_dir}backward_icon.png`);
        this.forward_button = create_component_with_img("button", "slider-forward-button", this.forward_button_container, `${this.img_dir}forward_icon.png`);
        
        this.track = create_component("div", "slider-track", parent);
        this.track.style.gap = `${this.gap}px`;
        
        let current_card_group;
        for (let i=0; i < this.num_card; i++) {
            if (i % this.track_size == 0) {
                current_card_group = create_component("div", "slider-card-group", this.track);
                current_card_group.style.height = `${this.card_height}px`
                current_card_group.style.gap = `${this.gap}px`;
            }
            const card_content = this.content.cards[i];
            let card = new Card(current_card_group, this.card_width, this.card_height, card_content, this.card_type);
        }

        this.reset_animation();        
    }

    reset_animation() {
        const cloned_first_card_group = this.track.querySelectorAll(".slider-card-group")[0].cloneNode(true);
        this.track.appendChild(cloned_first_card_group);    
        const cloned_last_card_group = this.track.querySelectorAll(".slider-card-group")[this.num_track - 1].cloneNode(true);
        this.track.prepend(cloned_last_card_group);

        this.track.style.transition = "none";
        const first_card_group_position = this.track_width * 1;;
        this.track.style.transform = `translateX(-${first_card_group_position}px)`;
        
        setTimeout(() => {
            this.track.style.transition = 'transform 0.5s ease';
        }, 0);

        this.page_indicator.querySelector(".page-indicator-element").classList.add("active");
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
        let destination = this.track_width * this.track_index;
        if (type > 0) {
            if (this.track_index > this.num_track) {
            this.track.style.transform = `translateX(-${destination}px)`;
            this.track.addEventListener("transitionend", () => {
                this.track.style.transition = "none";
                const first_card_group_position = this.track_width * 1;;
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
                const last_card_group_position = this.track_width * this.num_track;
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
            let element = this.page_indicator.querySelectorAll(".page-indicator-element")[i];        
            if (i == this.track_index-1) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        }   
    }
}

export { Slider }